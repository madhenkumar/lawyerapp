import React from 'react'
import { Services } from './OurServices'
import Image from 'next/image'
import Link from 'next/link'
import { Icons } from './Icons'



const EachService = ({ description, id, name, imageUrl }: Services & { key: any }) => {
  return (
    <div>
    <div key={id} className='w-[227px] h-[290px] py-[20px] bg-whitemain-light rounded-[40px] flex flex-col justify-start items-center  hover:shadow-purplemain shadow-sm  hover:shadow-2xl transform transition duration-100 hover:scale-110'>

      <div>
      <Icons.service className='w-[100px] h-[71px] flex-1' />  
        </div>  
          <div className='py-4'>
        <h1 className='text-purplemain font-medium font-montserrat text-[32px]'>{name}</h1>
        </div>
        <p className='leading-normal font-normal text-[16px] text-gray-700'>Subservice-1</p>
        <p className='leading-normal font-normal text-[16px] text-gray-700'>Subservice-2</p>
        <Link className='wavy underline-offset-2 pt-5' href={"/services"}>Learn more</Link>

    </div>  
    </div>

  )
}

export default EachService