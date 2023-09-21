"use client"

import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

export default function App() {
  let tabs = [
    {
      id: "Meta Ads",
      label: "Meta Ads",
      content: "Esta plataforma ofrece una amplia variedad de opciones de segmentación, formatos de anuncios y herramientas de análisis para llegar a públicos específicos y medir el rendimiento de las campañas."
    },
    {
      id: "Google Ads",
      label: "Google Ads",
      content: "Google Ads es una plataforma de publicidad en línea de Google que permite a las empresas promocionar sus productos o servicios a través de anuncios pagados en los resultados de búsqueda de Google y en otros sitios web asociados."
    },
    {
      id: "SEO",
      label: "SEO",
      content: "SEO (Search Engine Optimization) es el conjunto de técnicas y estrategias utilizadas por las agencias de marketing digital para mejorar la visibilidad y el posicionamiento de un sitio web en los resultados orgánicos de los motores de búsqueda como Google. "
    },
    {
      id: "Webpage Creation",
      label: "Webpage Creation",
      content: "Crearemos una pagina web a tu gusto con nuestra afiliacion con Simple Studios."
    }
  ];


  return (
    <div className="dark flex lg:w-9/12 w-full justify-center items-center lg:items-start lg:justify-start lg:flex-col flex-wrap gap-4">
      <h1 className="text-6xl font-extrabold ">Servicios</h1>
      <div className="lg:block hidden">
        <Tabs aria-label="Dynamic tabs" items={tabs} variant="light" className="bg-transparent flex-col " color="secondary" size="lg">
          {(item) => (
            <Tab key={item.id} title={item.label} className="p-3 ">
              <Card className="bg-transparent w-full ">
                <CardBody className="text-xl flex flex-col w-full text-center lg:text-left">
                  <h3 className="text-4xl font-extrabold">
                    {item.label}
                  </h3>
                  {item.content}
                </CardBody>
              </Card>  
            </Tab>
          )}
        </Tabs>
      </div>
      
      <div className="lg:hidden block">
            {tabs.map((item) => {
                return(
                  <div key={item.id} className="m-3 flex flex-col justify-center items-center text-center bg-indigo-950 bg-opacity-30 p-5 rounded-xl">
                    <h1 className="text-3xl font-extrabold">
                      {item.label}
                    </h1>
                    <p>{item.content}</p>
                  </div>
                )
            })}
      </div>


    </div>  
  );
}
