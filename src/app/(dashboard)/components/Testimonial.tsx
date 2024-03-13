import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  return (
    <div className='max-container padding-t mx-[50px] 2xl:px-[250px] mt-20 font-montserrat pb-3 '>
        <p className='text-4xl font-medium'>What our great customers say</p>
        <div className=' flex flex-col justify-evenly items-center md:flex-row bg-purplesecondary max-sm:flex-col mt-9'>
            <div className='flex-none'>
            <Image alt='person' className='rounded-full bg-purplemain  mx-10 my-10' width='267' height ='267' src='/teenager.png'/>
            </div>
            <div className='text-2xl mx-10'>
                <div>
                <h1>
                <span>Waves demonstrates an excellent </span>
                <br/>
                <span>understanding of user needs and all of their </span>
                <br/>
                <span>designs are creative and elegant in their </span>
                <br/>
                <span>simplicity. </span>  
                </h1>
                </div>
                <div className='mt-10'>
                    <h2 className='text-purplemain text-xl'>Jerome Bell</h2>
                    <h3 className='text-lg'>President of Sales <span> (Binford Ltd.)</span></h3>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Testimonial