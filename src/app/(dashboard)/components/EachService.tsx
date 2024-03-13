import React from 'react'
import { Services } from './OurServices'
import Image from 'next/image'
import Link from 'next/link'



const EachService = ({description,id,name,imageUrl}: Services & {key: any}) => {
  return (
    <div key={id} className='flex flex-col justify-start'>
        <Image alt={name} width={144} height={144} src={imageUrl}/>
        <div className='py-4'>
        <h1 className='text-purplemain font-medium font-montserrat text-[32px]'>{name}</h1>
        </div>
        <p className='leading-normal font-normal text-[16px] text-gray-700'>{description}</p>
        <Link className='wavy underline-offset-2 pt-5' href={"/services"}>Learn more</Link>
    </div>
  )
}

export default EachService