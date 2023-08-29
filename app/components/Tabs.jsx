'use client'
import Image, {StaticImageData} from 'next/image'

import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import React from 'react'

export default function Tabs() {
    const tab = [
        {
          
          title: 'Evaluación de necesidades y objetivos',
          tag: 'Fase 1',
          description: "En esta fase inicial, nos reuniremos contigo para comprender tu negocio, objetivos de marketing y necesidades específicas.",
          description2: 'Realizaremos un análisis detallado de tu mercado objetivo, competidores y oportunidades de crecimiento.',
          link: '#0'
        },
        {
            title: 'Propuesta y plan estratégico',
            tag: 'Fase 2',
            description: "Basándonos en la información recopilada en el paso anterior, te presentaremos una propuesta detallada y un plan estratégico de marketing",
            description2: 'Este plan incluirá un desglose de las acciones específicas que realizaremos para lograr tus objetivos, así como un cronograma y un presupuesto claro',
            link: '#0'
        },
        {
            
            title: 'Firma del contrato',
            tag: 'Fase 3',
            description: "Una vez que hayamos acordado todos los detalles del plan estratégico y la propuesta, finalizaremos la documentación contractual",
            description2: 'Una vez que hayamos acordado todos los detalles del plan estratégico y la propuesta, finalizaremos la documentación contractual',
            link: '#0'
        },
      ]
  return (
    <div className='flex flex-row w-full p-3 rounded-lg '>
          <Tab.Group className="w-full flex flex-col lg:flex-row">
        {({ selectedIndex }) => (
          <div className='mt-3 animate-fade'>
            {/* Buttons */}
            <div className="flex justify-center">
              <Tab.List className=" w-full inline-flex flex-col justify-center lg:border-b-0  lg:border-r-2 lg:border-indigo-950 h-[30vh] mb-8 min-[480px]:mb-12 lg:mr-6">
                {tab.map((tab, index) => (
                  <Tab key={index} as={Fragment}>
                    <button
                      className={`flex-1 text-l text-center lg:text-right font-medium px-4 rounded-lg py-2 m-5 whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${selectedIndex === index ? 'lg:bg-transparent text-slate-300' : 'lg:bg-transparent  text-slate-300 hover:text-slate-900'}}`}>{tab.title}</button>
                  </Tab>
                ))}
              </Tab.List>
            </div>
            {/* Tab panels */}
            <Tab.Panels className=" mx-auto">
              <div className="relative flex flex-col">
                {tab.map((tab, index) => (
                  <Tab.Panel
                    key={index}
                    as={Fragment}
                  >
                    <article className="w-full text-left rounded-2xl shadow-xl min-[480px]:flex ">
                      <div className="w-full flex flex-col justify-center ">
                        <div className="flex justify-center md:justify-between mb-1">
                          <header>
                            <div className="text-5xl lg:text-8xl font-bold font-sans text-purple-500 text-center md:text-left"><strong>{tab.tag}</strong></div>
                            <h1 className="text-4xl lg:text-6xl font-bold  text-center md:text-left">{tab.title}</h1>
                          </header>
                      
                        </div>
                        <div className="text-stone-400 lg:text-xl text-sm  mt-2 text-center md:text-left">{tab.description}</div>
                        <div className="text-stone-400 lg:text-xl text-sm  mb-2 text-center md:text-left">{tab.description2}</div>
                        
                      </div>
                    </article>
                  </Tab.Panel>
                ))}
              </div>
            </Tab.Panels>
          </div>
        )}
      </Tab.Group>
    </div>

    
   
  )
}
