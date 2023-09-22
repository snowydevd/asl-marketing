"use client"

import '../../globals.css'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";



export default function Seo() {
  return (
    < >
      <main className='flex flex-col justify-start items-center m-16'>

        <section className='w-5/6 lg:w-2/4'>
        <div className='w-full flex justify-start items-center gap-16'>
          {/* Header y icon de back */}
          <a href="/info" className='text-3xl text-purple-600 hover:text-purple-900 duration-150 cursor-context-menu'> <IoIosArrowBack /></a>
          <h1 className='text-6xl font-extrabold'>S.E.O</h1>
          <br className='h-1 bg-white w-full'/>
        </div>

            <article className='w-full h-16 mt-16 text-xl mb-7'>
              <h2 className='text-3xl font-extrabold mb-3'>Que es?</h2>
              <p>El SEO, o Search Engine Optimization (Optimización para Motores de Búsqueda), es una estrategia esencial en el mundo digital que tiene un impacto significativo en la visibilidad y el éxito de un sitio web. En resumen, se trata de un conjunto de técnicas y prácticas diseñadas para mejorar la posición de un sitio web en los resultados de los motores de búsqueda como Google, Bing y Yahoo. A través de la optimización de contenido, estructura y otros aspectos clave, el SEO busca aumentar la visibilidad de un sitio web, atraer tráfico orgánico de alta calidad y, en última instancia, lograr objetivos comerciales.</p>
              <br />
              
              <p>
                Una de las bases fundamentales del SEO es la elección de palabras clave relevantes. Estas son las palabras o frases que las personas utilizan en los motores de búsqueda para encontrar información o productos. Identificar palabras clave adecuadas y utilizarlas estratégicamente en el contenido de un sitio web es esencial para clasificar bien en los resultados de búsqueda relacionados. Sin embargo, el SEO va más allá de la elección de palabras clave; también involucra la creación de contenido de alta calidad y relevante para los usuarios.
              </p>
              <br />
              <p>
              La estructura de un sitio web es otro aspecto crucial del SEO. Los motores de búsqueda valoran la organización lógica de la información, la navegación sencilla y la velocidad de carga rápida. Un diseño de sitio web limpio y fácil de usar no solo mejora la experiencia del usuario, sino que también contribuye a un mejor rendimiento en las clasificaciones de búsqueda.
              </p>
              <br />
              <p>
                El SEO no es un esfuerzo único, sino un proceso continuo. Los algoritmos de los motores de búsqueda cambian constantemente, lo que significa que las estrategias de SEO también deben evolucionar. Esto incluye la monitorización regular del rendimiento del sitio web y la adaptación de las tácticas según sea necesario.
              </p>

              <br />
            

            
            </article>

        </section>

      </main>
    </>
  
      
    
    
  )
}
