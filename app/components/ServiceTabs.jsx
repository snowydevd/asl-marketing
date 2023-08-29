"use client"

import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

export default function App() {
  let tabs = [
    {
      id: "Meta Ads",
      label: "Meta Ads",
      content: "Con Meta Ads, crearemos publicidad para tu empresa en todas las plataformas de META como Instagram o Facebook."
    },
    {
      id: "Email Marketing",
      label: "Email Marketing",
      content: "Con E-mail Marketing le daremos a entender a muchos otros potenciales clientes de la existencia de tu empresa via e-mails escritos por ASL."
    },
    {
      id: "SEO",
      label: "SEO",
      content: "Con nuestro servicio SEO, mejoraremos el posicionamiento de tu pagina web en los motores de busqueda como Google"
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
                  <div key={item.id} className="m-3 flex flex-col justify-center items-center text-center bg-indigo-900 p-5 rounded-xl">
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
