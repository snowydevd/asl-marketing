
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react';

import {Providers} from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ASL Marketing',
  description: 'Marketing',
}

export default function RootLayout({ children }) {
  return (
   
      <html lang="en">
        <body className='w-full'>
          <Providers>
            {children}
            <Footer/>
            <Analytics />
            <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
          </Providers>
          </body>
      </html>
    
  )
}
