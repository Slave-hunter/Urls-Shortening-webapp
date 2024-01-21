import React from 'react'
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialFacebook } from "react-icons/sl";
import photocc from "../Images/ElEdev-1.png";

function Footer() {
  return (
    <footer className='justify-between  '>
      <div className='bg-gray-800 flex flex-row '>
        <h3 className='text-white p-4 m-4 text-2xl'>Shortly</h3>

        <ul className='flex flex-col justify-center p-4 m-4'>
        <h4 className='text-white font-bold text-lg mb-2'>Feautures</h4>
        <li>
        
          <a href="/" className=' text-white'>Link Shortening</a>

          
        </li>

        <li>
        <a href="/" className=' text-white'>Branded Links</a>

        </li>

        <li>
        <a href="/" className=' text-white'>Analytics</a>


        </li>

        </ul>


        <ul className='flex flex-col justify-center p-4 m-4 '>
        <h4 className='text-white text-lg mb-2 font-bold'>Resources</h4>
        <li>
        
          <a href="/" className=' text-white'>Blog</a>

          
        </li>

        <li>
        <a href="/" className=' text-white'>Developers</a>

        </li>

        <li>
        <a href="/" className=' text-white'>Support</a>


        </li>

        </ul>


        <ul className='flex flex-col justify-center p-4 m-4 '>
        <h4 className='text-white text-lg mb-2 font-bold'>Company</h4>
        <li>
        
          <a href="/" className=' text-white'>About</a>

          
        </li>

        <li>
        <a href="/" className=' text-white'>Our Team</a>

        </li>

        <li>
        <a href="/" className=' text-white'>Careers</a>


        </li>

        </ul>
     




      </div>

      <div className=' w-full flex justify-center  bg-gray-800 p-3 '>
      <SlSocialInstagram size='2rem' color='brown' />
      <SlSocialFacebook size='2rem' color='blue'  />
      <TiSocialTwitter size='2rem' color='cyan'  />

   


      </div>
      <div className='bg-gray-800 flex justify-center'>
      <img className='' src={photocc} alt='' style={{ width: '60px', height: '60px' }} 
        >
      </img>

      </div>
   

      



    </footer>
  )
}

export default Footer