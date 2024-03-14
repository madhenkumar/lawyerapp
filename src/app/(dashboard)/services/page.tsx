import React from 'react'
import { ServiceForm } from './components/ServiceForm'

const page = () => {
  return (
    <div className='pt-[155px] px-[182px] z-10 max-container flex flex-col justify-evenly items-start '>
      <div>
        <h1 className='text-[62px] font-medium'>
        Interested in Service - 1
        {<br/ >} 
        Let&#39;s talk!
        </h1>
        <div className='mt-[72px]'>
        <p>Just fill this form and we will contact you promptly to discuss your project. 
          <br />
          Hate forms? Drop us a message at
          <br />
          <span className='text-purplemain'>info@waves.com</span> or <span className='text-purplemain'>hello@waves.com</span></p>

        </div>
     </div>
     <div className='mt-5'>
        <ServiceForm />
     </div>
    </div>
  )
}

export default page