import Image from 'next/image'
import Navbar from './components/Navbar'
import LandingRight from './assets/landingRight.png'
import LandingLeft from './assets/landingLeft.png'
import Tabs from './components/Tabs'
import ScrollDown from '../public/scrollDown.svg'
import ContactForm from './components/ContactForm'
import MockupSimplestudios from '../public/shotSimple.png'

import {BsLink45Deg} from 'react-icons/bs'

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center">
       <section id='home' className=" flex flex-col justify-between items-center text-center w-full bg-fixed mb-16 sectionbg">
        <Navbar/>
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              <h1 className='animate-fade-right animate-duration-100 animate-delay-150 text-4xl md:text-6xl font-bold  text-slate-300 m-3 font-mono'>Estrategias digitales, resultados <span className='text-gradient'></span>reales</h1>
            </div>
            
            <div className='animate-bounce z-0 mb-3'>
              <Image alt='scrollDown' src={ScrollDown} width={50}/>
            </div>
          </div>
          
        </section>

        <section id='info' className='flex flex-col items-start w-9/12 mt-2 justify-center text-left'>
            
                
                    <div className='flex items-center justify-between w-full text-left'>
                      <div className='animate-fade-right flex flex-col text-center md:text-left'>
                        <h1 className='text-[35px] font-sans'><strong>Contacto Personalizado</strong></h1>
                        <p className='text-[18px] text-stone-400'>En <strong>ASL</strong>, transformamos conexiones en resultados. Nuestro enfoque de marketing digital se centra en la personalización, creando interacciones únicas a lo largo del viaje del cliente. Desde mensajes a medida hasta tecnología avanzada, estamos aquí para maximizar conversiones a través de conexiones genuinas.</p>
                      </div>
                      <Image
                      className='animate-fade-left hidden md:block w-3/5'
                      src={LandingRight}
                      
                      />
                    </div>

                    <div className='flex items-center justify-between w-full text-right'>
                    <Image
                    className='animate-fade-right hidden md:block w-3/5'
                      src={LandingLeft}
                      
                      />
                      
                        <div className='animate-fade-left flex flex-col text-center md:text-right'>
                          <h1 className='text-[35px] font-sans'><strong>Como operamos?</strong></h1>
                          <p className='text-[18px] text-stone-400'>En <strong>ASL</strong>, nuestra metodología es transparente y efectiva. Fusionamos estrategia y creatividad para ofrecerte soluciones de marketing digital impactantes. Desde la investigación inicial hasta la implementación y el análisis posterior, te acompañamos en cada paso para garantizar resultados excepcionales..</p>
                      </div>
          
                    </div>

                    <div className='w-full flex justify-center'>
                      <Tabs/>
                    </div>
          
        </section>
        {/* LANDING PAGE MAIN CONTAINER */}
          

        <section id='affiliates' className='w-full flex flex-col justify-center items-center sectionbgSmall h-96'>
          <h1 className=' tracking-tight font-extrabold text-7xl'>Afiliados</h1>
          <div className='flex flex-col lg:flex-row w-9/12 justify-between items-center gap-5'>

            <Image alt='simpleStudiosMockup' src={MockupSimplestudios} width={700}/>

            <div className='text-center lg:text-right'>
            <a href="https://simple-studiosjs.vercel.app" target='_blank' className='text-[35px] font-sans font-extrabold  hover:text-slate-300 duration-100'>Simple Studio</a>
            <p className='text-center lg:text-right'>Con Simple Studios elevá tu negocio al siguiente nivel. Nosotros te asesoramos y te guiamos en la creacion de tu pagina web personal o para tu propio negocio. Eleva el numero de ventas introduciendo tus productos en internet para tener mayor alcance.</p>
            </div>
            
          </div>
        </section>

    <section id='contact' className='w-full flex flex-col justify-center items-center m-5'>
            <div className='w-7/12 flex justify-center'>
              <ContactForm/>
            </div>
    </section>
          



      
    </main>
  )
}
