import React from 'react'
import Image from 'next/image'
const Hero = () => {

  return (<>
    {/* <section className='w-full flex xl:flew-row flew-col min-h-screen gap-10 max-container justify-center'>
        <div className= 'relative xl:w-2/5 flex flex-row justify-center items-center w-full max-xl:padding-x pt-28'>
            <h1 className = 'font-montserrat font-semibold text-6xl max-sm:text-[72px] max-sm:leading-[82]'>
                <span className='text-purplemain'>Company Name </span><span>and Logo</span>
            </h1>
        </div>
    </section> */}
    <section className='min-h-full min-w-full max-container padding'>
      <div className='flex flex-row justify-center items-center '>
        <div>
        <h1 className='mx-10 my-10 text-center text-purplemain font-montserrat font-semibold text-[60px] sm:text-6xl '>
          Company Name
        </h1>
        </div>
        <div className='mx-10 my-10 px-10 py-10 font-montserrat font-semibold text-[60px] sm:text-6xl rounded-full bg-purplesecondary'>
          <Image alt="logo" width ={200} height={200} src="/logotwo.png"/>
        </div>
        
      </div>
    </section>
    </>
  )
}

export default Hero