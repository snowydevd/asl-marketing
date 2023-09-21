import React from 'react'
import Image from 'next/image'
import metaAds from '../../public/meta.webp'
import seoImage from '../../public/seo.webp'
import googleAds from '../../public/googleAds.webp'
import webpageCreation from '../../public/webpage.webp'

export default function Info() {

    let infoTabs = [
        {
          id: "metaAds",
          label: "Meta Ads",
          link: '/meta-ads',
          image: metaAds
        },

        {
            id: "googleAds",
            label: "Google Ads",
            link: '/google-ads',
            image: googleAds
        },

        {
          id: "seo",
          label: "SEO",
          link: '/seo',
          image: seoImage
        },
        {
          id: "webpageCreation",
          label: "Pagina Web",
          link: '/webpage',
          image: webpageCreation
        }
      ];

  return (
    <main className='h-[100vh] w-full flex flex-col justify-start items-center'>
        <h1 className='text-3xl font-extrabold'>
            Informacion adicional sobre servicios brindados
        </h1>

        <section className='flex justify-center items-center gap-3 m-16 flex-wrap'>
            
            {infoTabs.map((items) =>{
                return (
                <div key={items.id} className='h-96 bg-slate-100 rounded-xl text-center flex flex-col justify-between items-center p-3 text-black flex-nowrap'>
                    <Image src={items.image} width={200} alt={items.label}/>

                    <div className='gap-3 flex flex-col'>
                        <h1 className='text-xl font-semibold'>{items.label}</h1>
                        <a href={items.link} className='text-white p-2 rounded-lg bg-purple-900 m-3 hover:bg-purple-950 hover:-translate-y-1 duration-150 '>Mas Informacion</a>
                    </div>
                    
                    
                </div>

                )
                
            })}
        </section>
    </main>
  )
}
