'use client';

import { useEffect, useRef } from 'react';

const vertexSource = `
  attribute vec2 a_position;
  attribute vec2 a_texCoord;
  varying vec2 v_texCoord;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texCoord = a_texCoord;
  }
`;

const fragmentSource = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  varying vec2 v_texCoord;

  void main() {
    vec2 uv = v_texCoord;
    float t = u_time * 0.5;
    float rayPos = (uv.x + uv.y) * 2.0;

    float rays = 0.0;
    rays += sin(rayPos * 5.0 - t * 2.0) * 0.5 + 0.5;
    rays += sin(rayPos * 8.0 + t * 1.5) * 0.3 + 0.3;
    rays *= smoothstep(0.8, 0.2, uv.y);

    float colorPhase = mod(t * 0.2, 4.0);

    vec3 green = vec3(0.0, 0.4, 0.2);
    vec3 purple = vec3(0.5, 0.0, 0.8);
    vec3 red = vec3(0.8, 0.1, 0.1);
    vec3 white = vec3(1.0, 1.0, 1.0);

    vec3 beamColor;
    if (colorPhase < 1.0) {
      beamColor = mix(green, purple, colorPhase);
    } else if (colorPhase < 2.0) {
      beamColor = mix(purple, red, colorPhase - 1.0);
    } else if (colorPhase < 3.0) {
      beamColor = mix(red, white, colorPhase - 2.0);
    } else {
      beamColor = mix(white, green, colorPhase - 3.0);
    }

    vec3 bgColor = vec3(0.01, 0.01, 0.02);
    vec3 finalColor = mix(bgColor, beamColor, rays * 0.4);
    finalColor += beamColor * rays * 0.15;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function AuroraShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const glContext = gl;
    const canvasEl = canvas;

    const vs = createShader(glContext, glContext.VERTEX_SHADER, vertexSource);
    const fs = createShader(glContext, glContext.FRAGMENT_SHADER, fragmentSource);
    if (!vs || !fs) return;

    const program = glContext.createProgram();
    if (!program) return;
    glContext.attachShader(program, vs);
    glContext.attachShader(program, fs);
    glContext.linkProgram(program);
    if (!glContext.getProgramParameter(program, glContext.LINK_STATUS)) {
      console.error('Program link error:', glContext.getProgramInfoLog(program));
      return;
    }

    const positionBuffer = glContext.createBuffer();
    glContext.bindBuffer(glContext.ARRAY_BUFFER, positionBuffer);
    glContext.bufferData(
      glContext.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      glContext.STATIC_DRAW
    );

    const texCoordBuffer = glContext.createBuffer();
    glContext.bindBuffer(glContext.ARRAY_BUFFER, texCoordBuffer);
    glContext.bufferData(
      glContext.ARRAY_BUFFER,
      new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
      glContext.STATIC_DRAW
    );

    const positionLocation = glContext.getAttribLocation(program, 'a_position');
    const texCoordLocation = glContext.getAttribLocation(program, 'a_texCoord');
    const timeLocation = glContext.getUniformLocation(program, 'u_time');
    const resLocation = glContext.getUniformLocation(program, 'u_resolution');

    let animationId: number;
    let disposed = false;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvasEl.width = canvasEl.clientWidth * dpr;
      canvasEl.height = canvasEl.clientHeight * dpr;
      glContext.viewport(0, 0, canvasEl.width, canvasEl.height);
    }

    function render(time: number) {
      if (disposed) return;
      resize();

      glContext.useProgram(program);

      glContext.enableVertexAttribArray(positionLocation);
      glContext.bindBuffer(glContext.ARRAY_BUFFER, positionBuffer);
      glContext.vertexAttribPointer(positionLocation, 2, glContext.FLOAT, false, 0, 0);

      glContext.enableVertexAttribArray(texCoordLocation);
      glContext.bindBuffer(glContext.ARRAY_BUFFER, texCoordBuffer);
      glContext.vertexAttribPointer(texCoordLocation, 2, glContext.FLOAT, false, 0, 0);

      glContext.uniform1f(timeLocation, time * 0.001);
      glContext.uniform2f(resLocation, canvasEl.width, canvasEl.height);

      glContext.drawArrays(glContext.TRIANGLES, 0, 6);
      animationId = requestAnimationFrame(render);
    }

    resize();
    window.addEventListener('resize', resize);
    animationId = requestAnimationFrame(render);

    return () => {
      disposed = true;
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      glContext.deleteProgram(program);
      glContext.deleteShader(vs);
      glContext.deleteShader(fs);
      glContext.deleteBuffer(positionBuffer);
      glContext.deleteBuffer(texCoordBuffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-80 rotate-180"
      aria-hidden="true"
    />
  );
}
