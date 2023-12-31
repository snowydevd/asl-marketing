"use client"

import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { useState } from 'react'


export default function ContactForm() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [business, setBusiness] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // console.log("Full name: ", fullname);
      // console.log("Email: ", email);
      // console.log("Message: ", message);
  
      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          business,
          email,
         
          message,
        }),
      });
  
      const { msg, success } = await res.json();
      setError(msg);
      setSuccess(success);
  
      if (success) {
        setFullname("");
        setEmail("");
        setBusiness("");
        
        setMessage("");
      }
    };
  

  return (
    <main className='w-full lg:w-2/4 mt-7'>
        <h1 className='text-4xl font-extrabold text-center'>Contactanos</h1>
         <form method="POST" className='w-full'>
            {/* FULL NAME */}
            <div className='flex flex-col m-5'>
                <label className='font-semibold text-l lg:text-xl' htmlFor="fullname">Nombre Completo*</label>
                <input className=' bg-transparent border-2 border-slate-800 rounded-lg text:xs lg:text-l p-2' onChange={(e) => setFullname(e.target.value)} value={fullname} type="text" placeholder='Nombre Completo' id='fullname' name='fullname' required/>
            </div>
            {/* BUSINESS */}
            <div className='flex flex-col m-5'>
                <label className='font-semibold text-l lg:text-xl' htmlFor="businessName">Nombre de la empresa</label>
                <input className=' bg-transparent border-2 border-slate-800 rounded-lg text-l p-2' type="text" onChange={(e) => setBusiness(e.target.value)} value={business} id='businessName' name='businessName' placeholder='opcional'/>
            </div>
            {/* EMAIL */}
            <div className='flex flex-col m-5'>
                <label className='font-semibold text-l lg:text-xl' htmlFor="email">Correo Electrónico*</label>
                <input className=' bg-transparent border-2 border-slate-800 rounded-lg text-l p-2' type="email" onChange={(e) => setEmail(e.target.value)} value={email} id='email' name='email' placeholder='ejemplo@mail.com' required/>
            </div>
                {/* MESSAGE */}
            <div className='flex flex-col m-5'>
                <label className='font-semibold text-l lg:text-xl' htmlFor="message">Mensaje*</label>
                <textarea className=' bg-transparent border-2 border-slate-800 rounded-lg text-l h-28 min-h-[32px] max-h-48 p-2' onChange={(e) => setMessage(e.target.value)} value={message} id='message' name='message' placeholder='Escriba su mensaje aquí' required/>
            </div>
            
            {/* SUBMIT BTN */}
            <div className='m-5'>
                <button onClick={handleSubmit} className='bg-indigo-800 p-2 rounded-lg font-bold hover:bg-indigo-950 duration-200 w-full' type='submit'>Enviar</button>
            </div> 

           

            <div className='w-full flex justify-center'>
              <div className="w-3/4 bg-violet-800  flex flex-col text-center rounded-lg">
                {error &&
                  error.map((e) => (
                    <div key={e}
                      className={`${
                        success ? "text-white bg-green-700 rounded-lg" : "text-white bg-red-800"
                      } px-5 py-2`}
                    >
                      {e}
                    </div>
                  ))}
              </div>
            </div>
            
        </form>

        

    </main>
  )
}
