import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Youssef Mohammed Ali - Frontend Developer (React.js,Next.js)',
  description:
    'Portfolio of Youssef Mohammed Ali, a Frontend Developer using modern technologies like react and next',
  generator: 'Next.js'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        {children}
      </body>
    </html>
  );
}

import './globals.css';import { Bounce, ToastContainer } from 'react-toastify';

