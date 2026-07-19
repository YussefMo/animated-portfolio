/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * docx2pdf.js — Convert .docx CV to PDF via mammoth + puppeteer.
 *
 * Usage:
 *   node scripts/docx2pdf.js youssef_cv.docx youssef_cv.pdf
 *   node scripts/docx2pdf.js youssef_cv_react.docx youssef_cv_react.pdf
 */

const mammoth = require('mammoth');
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function convert(inputPath, outputPath) {
  const input = path.resolve(inputPath);
  const output = path.resolve(outputPath);

  if (!fs.existsSync(input)) {
    console.error(`Input not found: ${input}`);
    process.exit(1);
  }

  // Step 1: mammoth → HTML with inline styles
  const result = await mammoth.convertToHtml({ path: input });
  const styledHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @page { size: A4; margin: 18mm 20mm 16mm 20mm; }
  body {
    font-family: 'Segoe UI', Calibri, system-ui, sans-serif;
    font-size: 10.5pt;
    color: #1a1a1a;
    line-height: 1.45;
    max-width: 800px;
    margin: 0 auto;
    padding: 32px 40px;
  }
</style>
</head>
<body>${result.value}</body></html>`;

  // Step 2: puppeteer → PDF
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setContent(styledHtml, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: output,
    format: 'A4',
    margin: { top: '18mm', bottom: '16mm', left: '20mm', right: '20mm' },
    printBackground: true
  });

  await browser.close();
  console.log(`PDF created: ${output}`);
}

// ── CLI ──
const [inputArg, outputArg] = process.argv.slice(2);
if (!inputArg) {
  console.error('Usage: node scripts/docx2pdf.js <input.docx> [output.pdf]');
  process.exit(1);
}
const outName = outputArg || inputArg.replace(/\.docx$/i, '.pdf');
convert(inputArg, outName);
