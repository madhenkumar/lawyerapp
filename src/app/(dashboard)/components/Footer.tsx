import React from 'react'
import { Icons } from './Icons'

const Footer = () => {
  return (
    <footer className='relative bg-black text-white mt-24'>
        <div className='max-container flex flex-col justify-start'>
            <div className='mt-[150px] flex flex-col sm:flex-row justify-between padding'>
                <div>
                <h1 className='text-purplemain text-5xl font-semibold'> Waves</h1>
                </div>
                <div className='flex flex-col text-white'>
                    <div className='flex justify-center items-center gap-10 max-sm:gap-4'>
                        <h2>Home</h2>
                        <h2>About us</h2>
                        <h2>Services</h2>
                    </div>
                    <div className='pt-7 flex justify-end gap-4 item-scenter'>
                    <div className='w-[27px] h-[27px] flex items-center justify-center rounded-full bg-white'>
                        <Icons.twitter  className='w-5 h-5' />
                    </div>
                    <div className='w-[27px] h-[27px] flex items-center justify-center rounded-full bg-white'>
                        <Icons.twitter  className='w-5 h-5' />
                    </div>
                    <div className='w-[27px] h-[27px] flex items-center justify-center rounded-full bg-white'>
                        <Icons.twitter  className='w-5 h-5' />
                    </div>
                    <div className='w-[27px] h-[27px] flex items-center justify-center rounded-full bg-white'>
                        <Icons.twitter  className='w-5 h-5' />
                    </div>
                    </div>
                   
                </div>

            </div>
            <hr className="bg-white h-[1px]" />
            <div className='flex max-sm:flex-col justify-between padding-t padding-r padding-l pb-7'>
                <h3>
                Privacy Policy | Terms of Use
                </h3>

                <h3>
                    © 2022 Waves.All rights reserved.
                </h3>
            </div>

        </div>
    </footer>
  )
}

export default Footer