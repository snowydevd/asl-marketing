"use client"

import '../../globals.css'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";



export default function Webpage() {
  return (
    < >
      <main className='flex flex-col justify-start items-center m-16'>

        <section className='w-5/6 lg:w-2/4'>
        <div className='w-full flex justify-start items-center gap-16'>
          {/* Header y icon de back */}
          <a href="/info" className='text-3xl text-purple-600 hover:text-purple-900 duration-150 cursor-context-menu'> <IoIosArrowBack /></a>
          <h1 className='text-6xl font-extrabold'>Paginas Web</h1>
          <br className='h-1 bg-white w-full'/>
        </div>

            <article className='w-full h-16 mt-16 text-xl mb-7'>
              
              <p>Las páginas web son la carta de presentación digital de cualquier entidad, ya sea una empresa, una organización sin fines de lucro o incluso una persona. Son espacios en línea que ofrecen información, interacción y representación de una entidad en el vasto mundo de Internet.</p>
              <br />
              
              <p>
                En su esencia, una página web es un conjunto de documentos electrónicos interconectados a través de hipervínculos, lo que permite la navegación y la exploración de contenido. A continuación, se presentan algunos aspectos clave de las páginas web:
              </p>
              <br />
              <h2 className='text-3xl font-extrabold mb-3'>Información Accesible:</h2>
              <p>
              Las páginas web almacenan y presentan información de manera organizada y accesible. Esto incluye detalles sobre productos, servicios, historia de la empresa, datos de contacto y más. Los visitantes pueden obtener información relevante en cualquier momento, lo que mejora la conveniencia y la disponibilidad.</p>
              <br />

              <h2 className='text-3xl font-extrabold mb-3'>Interacción:</h2>
              <p>
              Las páginas web también pueden ser interactivas. Los formularios de contacto, las encuestas en línea y las opciones de chat en vivo permiten a los visitantes interactuar directamente con la entidad. Esto facilita la comunicación y la recopilación de información valiosa
              </p>
              <br />

              <h2 className='text-3xl font-extrabold mb-3'>Representación de Marca:</h2>
              <p>
              El diseño y la estética de una página web reflejan la identidad de la entidad. Los colores, logotipos, tipografías y el estilo visual contribuyen a crear una impresión duradera en los visitantes. Una página web profesional y coherente mejora la percepción de la marca. 
              </p>
              <br />

              <h2 className='text-3xl font-extrabold mb-3'>Presencia Global:</h2>
              <p>
              Las páginas web permiten que una entidad alcance a una audiencia global las 24 horas del día, los 7 días de la semana. Esto amplía significativamente el alcance y la exposición, lo que puede ser beneficioso tanto para negocios locales como para empresas internacionales.
              </p>
              <br />

              <h2 className='text-3xl font-extrabold mb-3'>Marketing y Promoción:</h2>
              <p>
              Las páginas web son una herramienta esencial para las estrategias de marketing digital. A través de técnicas como el SEO, el contenido de calidad y las campañas de publicidad en línea, las páginas web pueden atraer tráfico, generar leads y aumentar las conversiones.              </p>
              <br />

              <h2 className='text-3xl font-extrabold mb-3'>Adaptabilidad:</h2>
              <p>
              Las páginas web son altamente adaptables. Pueden evolucionar con el tiempo para mantenerse actualizadas y relevantes. Esto incluye la adición de nuevas secciones, la optimización para dispositivos móviles y la integración de nuevas tecnologías.              </p>
              <br />
            

            
            </article>

        </section>

      </main>
    </>
  
      
    
    
  )
}
