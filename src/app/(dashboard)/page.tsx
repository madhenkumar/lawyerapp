import React from 'react'
import Hero from './components/Hero'
import {OurServices} from './components/OurServices'
import Testimonial from './components/Testimonial'
import GetInTouch from './components/GetInTouch'

const page = () => {
  return (
    <main className='relative'>
      <section className='padding-t padding-b'>
        <Hero />
      </section>
      <section className='pt-20 px-80'>
        <OurServices />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <GetInTouch />
      </section>
    </main>

  )
}

export default page