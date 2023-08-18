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
            description2: 'Te proporcionaremos un contrato detallado que establecerá todos los términos y condiciones de nuestra colaboración',
            link: '#0'
        },
      ]
  return (
    <div className='flex flex-col  p-3 rounded-lg m-5'>
            <Tab.Group>
        {({ selectedIndex }) => (
          <div className='mt-3 animate-fade'>
            {/* Buttons */}
            <div className="flex justify-center">
              <Tab.List className=" inline-flex flex-wrap justify-center bg-indigo-500 rounded-[20px] p-1 mb-8 min-[480px]:mb-12">
                {tab.map((tab, index) => (
                  <Tab key={index} as={Fragment}>
                    <button
                      className={`flex-1 text-l font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${selectedIndex === index ? 'bg-black text-slate-300' : 'text-slate-300 hover:text-slate-900'}}`}>{tab.title}</button>
                  </Tab>
                ))}
              </Tab.List>
            </div>
            {/* Tab panels */}
            <Tab.Panels className="max-w-[640px] mx-auto">
              <div className="relative flex flex-col">
                {tab.map((tab, index) => (
                  <Tab.Panel
                    key={index}
                    as={Fragment}
                  >
                    <article className="w-full text-left rounded-2xl shadow-xl min-[480px]:flex items-stretch focus-visible:outline-none focus-visible:ring">
                      <div className=" min-[480px]:w-full flex flex-col justify-center p-3">
                        <div className="flex justify-center md:justify-between mb-1">
                          <header>
                            <div className="text-4xl font-bold font-sans text-indigo-700 text-center md:text-left"><strong>{tab.tag}</strong></div>
                            <h1 className="text-xl font-bold  text-center md:text-left">{tab.title}</h1>
                          </header>
                      
                        </div>
                        <div className="text-stone-400 text-sm  mb-2 text-center md:text-left">{tab.description}</div>
                        <div className="text-stone-400 text-sm  mb-2 text-center md:text-left">{tab.description2}</div>
                        
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
