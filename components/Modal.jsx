'use client';

import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiOutlineXMark } from 'react-icons/hi2';
import { useOutsideClick } from '@/hooks/useOutsideClick.js';

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('');
  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex w-screen items-center justify-center overflow-y-auto bg-black/50 px-4 py-8 backdrop-blur-sm">
      <div
        className="relative w-full max-w-2xl overflow-y-auto rounded-xl bg-gray-900 p-6 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] md:p-8"
        ref={ref}
        style={{ maxHeight: '80vh', display: 'flex', flexDirection: 'column' }}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 focus:outline-none"
        >
          <HiOutlineXMark className="h-6 w-6" />
        </button>
        {cloneElement(children)}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
