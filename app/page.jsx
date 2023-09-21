"use client"

import Image from 'next/image'
import Navbar from './components/Navbar'
import Tabs from './components/Tabs'
import Footer from './components/Footer'
import ServiceTabs from './components/ServiceTabs'
import ContactForm from './components/ContactForm'

import LandingRight from './assets/landingRight.png'
import LandingLeft from './assets/landingLeft.png'
import ScrollDown from '../public/scrollDown.svg'
import MockupSimplestudios from '../public/shotSimple.png'
import {BsLink45Deg} from 'react-icons/bs'

import {NextUIProvider} from "@nextui-org/react";

export default function Home() {

  return (
    
    <main className="flex flex-col items-center justify-center">
      {/* LANDING */}
       <section id='home' className=" flex flex-col justify-between items-center text-center w-full bg-fixed mb-16 sectionbg">
        
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              <h1 className='animate-fade-right animate-duration-100 animate-delay-150 text-4xl md:text-6xl font-bold  text-slate-300 m-3 font-mono'>Estrategias digitales, resultados <span className='text-gradient'></span>reales</h1>
            </div>
            
            <div className='animate-bounce z-0 mb-3'>
              <Image alt='scrollDown' src={ScrollDown} width={50}/>
            </div>
          </div>
          
        </section>
            {/* INFO */}
        <section id='info' className='flex flex-col items-start w-9/12 mt-2 mb-16 justify-center text-left'>
            
                
                    <div className='flex items-center justify-between w-full text-left'>
                      <div className='animate-fade-right flex flex-col md:text-left'>
                        <h1 className='text-4xl lg:text-7xl font-sans'><strong>Contacto Personalizado</strong></h1>
                        <p className='text-l lg:text-xl  text-stone-400'>En <strong>ASL</strong>, transformamos conexiones en resultados. Nuestro enfoque de marketing digital se centra en la personalización, creando interacciones únicas a lo largo del viaje del cliente. Desde mensajes a medida hasta tecnología avanzada, estamos aquí para maximizar conversiones a través de conexiones genuinas.</p>
                      </div>
                      <Image
                      className='animate-fade-left hidden md:block w-3/5'
                      src={LandingRight}
                      
                      />
                    </div>

                    <div className='flex items-center justify-between w-full text-right mt-5'>
                    <Image
                    className='animate-fade-right hidden md:block w-3/5'
                      src={LandingLeft}
                      />
                      
                        <div className='animate-fade-left flex flex-col md:text-right'>
                          <h1 className='text-4xl lg:text-7xl font-sans'><strong>Cómo operamos?</strong></h1>
                          <p className='text-l lg:text-xl text-stone-400'>En <strong>ASL</strong>, nuestra metodología es transparente y efectiva. Fusionamos estrategia y creatividad para ofrecerte soluciones de marketing digital impactantes. Desde la investigación inicial hasta la implementación y el análisis posterior, te acompañamos en cada paso para garantizar resultados excepcionales.</p>
                      </div>
          
                    </div>

                    
          
        </section>
        {/* Servicios */}
       
        <section id='servicios' className='flex flex-col items-start w-full lg:w-9/12 mt-2 mb-16 justify-center text-left'>
        <div className='w-full flex flex-col justify-center items-center'>

        <ServiceTabs/>

        <a href="/info" className='bg-indigo-950 rounded-lg p-3 hover:bg-indigo-900 duration-100 w-fit'>Mas Informacion</a>

        </div>

                    
          
                   
        </section>

       {/* INFO TABS */}
        <section id='fases' className='flex flex-col items-start w-11/12 mt-2 justify-center text-left '>
                    <div className="timeline">
                      <div className="container left">
                        <div className="content">
                          <h2 className='text-3xl font-bold font-sans'>Fase 1</h2>
                          <h3 className='text-2xl font-medium font-sans'>Evaluación de necesidades y objetivos</h3>
                          <p>En esta fase inicial, nos reuniremos contigo para comprender tu negocio, objetivos de marketing y necesidades específicas.</p>
                          <p>Realizaremos un análisis detallado de tu mercado objetivo, competidores y oportunidades de crecimiento.</p>
                        </div>
                      </div>
                      <div className="container right">
                        <div className="content lg:text-right">
                          <h2 className='text-3xl font-semibold font-sans'>Fase 2</h2>
                          <h3 className='text-2xl font-medium font-sans'>Propuesta y plan estratégico</h3>
                          <p>Basándonos en la información recopilada en el paso anterior, te presentaremos una propuesta detallada y un plan estratégico de marketing</p>
                          <p>Este plan incluirá un desglose de las acciones específicas que realizaremos para lograr tus objetivos, así como un cronograma y un presupuesto claro.</p>
                        </div>
                      </div>
                      <div className="container left">
                        <div className="content">
                          <h2 className='text-3xl font-semibold font-sans'>Fase 3</h2>
                          <h3 className='text-2xl font-medium font-sans'>Firma del contrato</h3>
                          <p>Una vez que hayamos acordado todos los detalles del plan estratégico y la propuesta, finalizaremos la documentación contractual.</p>
                          
                        </div>
                      </div>
                  </div>
        </section>
          
          {/* CONTACT */}
        <section id='contact' className='w-full flex flex-col justify-center items-center m-5'>
                <div className='w-full lg:w-7/12 flex justify-center'>
                  <ContactForm/>
                </div>
        </section>


          {/* AFILIADOS */}
        <section id='affiliates' className='w-full flex flex-col justify-center items-center sectionbgSmall h-96'>
          <h1 className=' tracking-tight font-extrabold text-5xl lg:text-7xl'>Afiliados</h1>
          <div className='flex flex-col lg:flex-row w-9/12 justify-between items-center gap-5'>

            <Image alt='simpleStudiosMockup' src={MockupSimplestudios} width={700}/>

            <div className='text-center lg:text-right'>
            <a href="https://simple-studiosjs.vercel.app" target='_blank' className='text-[35px] font-sans font-extrabold  hover:text-slate-300 duration-100'>Simple Studios</a>
            <p className='text-center lg:text-right'>Con Simple Studios elevá tu negocio al siguiente nivel. Nosotros te asesoramos y te guiamos en la creación de tu pagina web personal o para tu propio negocio. Eleva el número de ventas introduciendo tus productos en internet para tener mayor alcance.</p>
            </div>
            
          </div>
        </section>
        <Footer/>
    </main>
    
  )
}
