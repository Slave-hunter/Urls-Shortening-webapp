import React from 'react'
import {ReactComponent as MySvg } from '../Images/il-01.svg'

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" />


function Hero() {
  return (
    <section className=' flex justify-center items-center w-full'>
        <div className='flex flex-col '>
        <h1 className='text-5xl font-bold items-center leading-relaxed mt-10 mb-2 font-poppins inline-block   '>
            Shorten links Diffrently <br/>
            with a Great Tool

        </h1>
        <p className='text-lg text-gray-600 border-2  inline-block p-3 '>
        Build your brand’s recognition and get detailed insights <br/>
         on how your links are performing. 
         </p>

         <button className='inline-block rounded-full bg-yellow-300 m-4 p-4 w-25  font-bold '>
            Get Started

        </button>
        </div>
      
       
        <MySvg className='w-80'/>
  
        
        
        </section>
  )
}

export default Hero