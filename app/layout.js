
import './globals.css'
import Navbar from './components/Navbar'
import { Analytics } from '@vercel/analytics/react';
import {Providers} from "./providers";

export const metadata = {
  title: 'ASL Marketing',
  description: 'Digital Marketing Agency',
}

export default function RootLayout({ children }) {
  return (
   
      <html lang="en" className='dark'>
        <body>
          
          <Providers>
            {children}
           
            <Analytics />
            {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
          </Providers>
          </body>
      </html>
    
  )
}
