import HeaderLogo from '../assets/ASLheaderLogos.svg'
import Image from 'next/image'
import React from 'react'


export default function Navbar() {
  return (
    <nav className="animate-fade-up animate-duration-100  flex flex-row justify-center items-center w-fit p-6 rounded-xl mt-4 mb-4" >
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
