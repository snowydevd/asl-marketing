"use client"

import '../../globals.css'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";



export default function GoogleAds() {
  return (
    < >
      <main className='flex flex-col justify-start items-center m-16'>

        <section className='w-5/6 lg:w-2/4'>
        <div className='w-full flex justify-start items-center gap-16'>
          {/* Header y icon de back */}
          <a href="/info" className='text-3xl text-purple-600 hover:text-purple-900 duration-150 cursor-context-menu'> <IoIosArrowBack /></a>
          <h1 className='text-6xl font-extrabold'>Google Ads</h1>
          <br className='h-1 bg-white w-full'/>
        </div>

            <article className='w-full h-16 mt-16 text-l lg:text-xl mb-7'>

              <h3 className='text-xl lg:text-2xl font-extrabold mb-3'>Tu Pasaporte al Éxito en Publicidad Digital</h3>

              <p>En el mundo actual altamente digitalizado, la publicidad en línea se ha convertido en una herramienta esencial para las empresas que buscan llegar a su audiencia de manera efectiva. Google Ads, anteriormente conocida como Google AdWords, es una plataforma publicitaria líder que ha revolucionado la forma en que las marcas promocionan sus productos y servicios en línea. En este artículo, exploraremos los aspectos clave de Google Ads y cómo puede ser un pasaporte hacia el éxito en la publicidad digital.</p>
              <br />

              <h3 className='text-xl lg:text-2xl font-extrabold mb-3'>Lo Básico de Google Ads:</h3>
              <p>
              Google Ads es una plataforma de publicidad en línea que permite a las empresas promocionar sus anuncios en los resultados de búsqueda de Google, así como en otros lugares de la red de Google, como YouTube y sitios web asociados. La característica fundamental de Google Ads es la publicidad basada en palabras clave, lo que significa que tus anuncios aparecerán cuando las personas busquen palabras clave relacionadas con tu negocio.
              </p>
              <br />
              <br />

              <h3 className='text-xl lg:text-2xl font-extrabold mb-3'>Beneficios claves</h3>
              <h4 className='text-xl lg:text-xl font-extrabold text-purple-20 mb-3'>Segmentacion Precisa:</h4>
              <p>Google Ads permite una segmentación detallada, lo que significa que puedes mostrar tus anuncios solo a personas que están interesadas en tu producto o servicio. Esto aumenta la probabilidad de conversión.</p>
              <br />

              <h4 className='text-xl lg:text-xl font-extrabold text-purple-200 mb-3'>Control del Presupuesto:</h4>
              <p>Puedes establecer un presupuesto diario y definir cuánto estás dispuesto a pagar por clic (CPC). Esto garantiza que mantengas el control total de tus gastos publicitarios.</p>
              <br />

              <h4 className='text-xl lg:text-xl font-extrabold text-purple-200 mb-3'>Rápida Visibilidad:</h4>
              <p> A diferencia de las estrategias de marketing a largo plazo, Google Ads ofrece una visibilidad inmediata. Tus anuncios pueden aparecer en las primeras posiciones de los resultados de búsqueda en cuestión de minutos.</p>
              <br />

              <h4 className='text-xl lg:text-xl font-extrabold text-purple-200 mb-3'>Medición y Análisis: </h4>
              <p>Google Ads proporciona herramientas detalladas para medir el rendimiento de tus anuncios. Puedes rastrear impresiones, clics, conversiones y ROI para ajustar tu estrategia.</p>
              <br />

              <h4 className='text-xl lg:text-xl font-extrabold text-purple-200 mb-3'>Flexibilidad de Anuncios:</h4>
              <p>Puedes utilizar diferentes tipos de anuncios, como anuncios de búsqueda, anuncios gráficos, anuncios de video y anuncios de aplicaciones móviles, para adaptarte a tus objetivos y a tu público objetivo.</p>
              <br />


            </article>

        </section>

      </main>
    </>
  
      
    
    
  )
}
