import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '~/components/ui/button'
import { cn } from '~/lib/utils'

const GetInTouch = () => {
  return (
    <div className="relative top-64 bg-slate-300 z-10 mx-72 my-32 padding-t padding-b">
        <div className='flex flex-col justify-evenly items-center gap-10 padding'>
            <h1 className='text-4xl text-white '>Ready for your project</h1>
            <Link href={"/contactus" } className={buttonVariants({ variant: 'default',className: 'bg-purplemain hover:bg-purplemain-dark px-4 py-4 rounded-none' })}> Get in touch</Link>
        </div>
    </div>
  )
}

export default GetInTouch