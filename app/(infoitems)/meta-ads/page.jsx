"use client"

import '../../globals.css'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";



export default function MetaAds() {
  return (
    < >
      <main className='flex flex-col justify-start items-center m-16'>

        <section className='w-5/6 lg:w-2/4'>
        <div className='w-full flex justify-start items-center gap-16'>
          {/* Header y icon de back */}
          <a href="/info" className='text-3xl text-purple-600 hover:text-purple-900 duration-150 cursor-context-menu'> <IoIosArrowBack /></a>
          <h1 className='text-6xl font-extrabold'>Meta Ads</h1>
          <br className='h-1 bg-white w-full'/>
        </div>

            <article className='w-full h-16 mt-16 text-xl mb-7'>
              <p>En la era digital, la publicidad en redes sociales se ha convertido en una herramienta esencial para las empresas que buscan llegar a su público objetivo de manera efectiva. <strong className='text-purple-700'>Facebook Ads</strong> e <strong className='text-purple-700'>Instagram Ads</strong> son dos de las plataformas más influyentes en este ámbito, y juntas ofrecen un arsenal de posibilidades publicitarias. En este artículo, exploraremos estas dos plataformas y sus características clave.</p>

              <br />
              <h2 className='text-3xl font-extrabold mb-3'>Facebook Ads</h2>
              <p>
                Facebook, con su vasta base de usuarios, proporciona un entorno ideal para la publicidad dirigida. Las <strong className='text-purple-700'>Facebook Ads</strong> permiten a las empresas llegar a personas basándose en datos demográficos, intereses, comportamientos y más. Esto significa que puedes mostrar tus anuncios solo a aquellos que tienen más probabilidades de estar interesados en tu producto o servicio, lo que maximiza tus posibilidades de conversión.
              </p>
              <br />
              <p>
                Otro aspecto destacado de <strong className='text-purple-700'>Facebook Ads</strong> es la variedad de formatos de anuncios disponibles. Desde imágenes y videos hasta carruseles y anuncios instantáneos, tienes la libertad de elegir el tipo de contenido que mejor se adapte a tus objetivos de marketing.
              </p>
              <br />
              <p>
                Además, Facebook proporciona herramientas de análisis detallado que te permiten medir el rendimiento de tus anuncios en tiempo real. Puedes realizar un seguimiento de las impresiones, clics, conversiones y mucho más para ajustar tu estrategia según los resultados.
              </p>

              <br />
              <br />

              <h2 className='text-3xl font-extrabold mb-3'>Instagram Ads</h2>
              <p>
              Instagram, propiedad de Facebook, ofrece una plataforma de publicidad integrada que complementa perfectamente a <strong className='text-purple-700'>Facebook Ads</strong>. La principal ventaja de <strong className='text-purple-700'>Instagram Ads</strong> es su enfoque visual. Las imágenes y videos atractivos pueden captar la atención de los usuarios de manera efectiva y generar interés en tu marca.
              </p>

              <br />
              <p>
              El uso de Instagram Stories Ads es una estrategia popular, ya que las historias tienen un alto nivel de compromiso y brindan una experiencia inmersiva. Además, Instagram permite la vinculación directa a tu sitio web desde los anuncios, lo que facilita a los usuarios explorar más sobre tu producto o servicio.
              </p>

              <br />
              <p>
              Al igual que con <strong className='text-purple-700'>Facebook Ads</strong>, Instagram ofrece opciones avanzadas de segmentación y análisis de datos para optimizar tus campañas publicitarias. Puedes ajustar tus anuncios en función de la ubicación, intereses y comportamientos de tus audiencias objetivo.

              </p>
              <br />
              <br />
            </article>

        </section>

      </main>
    </>
  
      
    
    
  )
}
