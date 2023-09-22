import HeaderLogo from '../assets/ASLheaderLogos.svg'
import Image from 'next/image'
import React from 'react'



export default function Navbar() {
  return (
    <nav className="animate-fade-up animate-duration-100 flex flex-row justify-center items-center  p-6 rounded-xl mb-4 bg-transparent" >
            <div className='flex flex-col items-center gap-10 '>
                <Image
                className=''
                alt='header'
                width={500}
                src={HeaderLogo}
                />
            </div>
            <div>
               
            </div>

            <div></div>
    </nav>
  )
}
