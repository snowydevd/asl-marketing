import React from 'react'
import Image from 'next/image'
import Logo from '../assets/asl_headerLogo.svg'

export default function () {
  return (
    <div className='flex flex-row justify-center items-center w-full bottom-0'>
         <div className='w-full bg-slate-950 flex flex-row justify-center items-center h-full mt-36'>
            <div className='flex flex-row justify-between items-center w-full p-6'>
                <div className='w-1/6 hidden lg:block'>
                        <Image
                        src={Logo}
                        alt='footerLogo'
                        width={150}
                        />
                    </div>
                
                    <div className='lg:border-l-2 lg:border-stone-600 w-3/6 lg:w-1/6 p-3 font-sans h-fit'>
                        <h3 className='text-l text-stone-200 font-semibold'>Redes & Contacto</h3>
                        <div className='text-stone-400 text-xs'>
                            <p>Email: aca va el email :D</p>
                            <p>numero de telefono?</p>
                            <a href="https://www.instagram.com/simplestudiosweb/?hl=es"><p>Instagram: insta de ASL</p></a>
                        </div>
                    </div>

                    <div className='lg:border-l-2 lg:border-stone-600 w-3/6 lg:w-1/6 p-3 font-sans h-fit lg:text-left text-right'>
                        <h3 className='text-l text-stone-200 font-semibold'>Índice</h3>
                        <div className='text-stone-400 text-xs'>
                            <a href="#home"><p>Home</p></a>
                            <a href="#info"><p>Informacion</p></a>
                            <a href="#affiliates"><p>Afiliados</p></a>
                            <a href="#contact"><p>Contacto</p></a>
                        
                        </div>
                        
                    </div>
            </div>
                
        </div>
    </div>
   
  )
}
