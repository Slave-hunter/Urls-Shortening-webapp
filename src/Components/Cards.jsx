import React from 'react'
import image1 from '../Images/user-line.png'
import image2 from '../Images/memo-line-5839e.png'
import image3 from '../Images/click-line.png'
function Cards() {
  return (
    <section className='w-full flex flex-row justify-center'>
        <div className='flex flex-col'>
            <h2 className='font-bold text-xl m-4 p-4'  >Brand recognition</h2>
            <img src={image1} className='w-40' alt='discription'></img>
            <p className='text-gray-700 leading-relaxed m-3 p-3'>
            Boost your brand recognition  <br/> with each click. Generic links <br/> don’t mean a thing. Branded links help instil <br/>  confidence in your content. 
            </p>
        </div>

        <div className='flex flex-col'>
            <h2 className='font-bold text-xl m-4 p-4'>Detailed Records</h2>
            <img src={image2} className='w-40 ' alt='discription'></img>
            <p className='text-gray-700 leading-relaxed m-3 p-3'>
            Gain insights into who is clicking  <br/> your links. Knowing when and where people  <br/> engage with your content helps inform better decisions. 
            </p>
        </div>

        <div className='flex flex-col'>
            <h2 className='font-bold text-xl m-4 p-4'>Fully Customizable</h2>
            <img src={image3} className='w-40' alt='discription'></img>
            <p className='text-gray-700 leading-relaxed m-3 p-3'>
            mprove brand awareness and content <br/>  discoverability through customizable <br/>  links, supercharging audience engagement. 
            </p>
        </div>

    </section>
  )
}

export default Cards