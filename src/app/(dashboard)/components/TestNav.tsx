import Image from 'next/image';
import Link from 'next/link';
import React, { Key } from 'react'
import { Icons } from './Icons';

type NavItems = {
    SerialNo: Key;
    Name: String;
    Address: any;

}

const Navitems: NavItems[] = [
    {
        SerialNo:1,
        Name: "Home",
        Address: "/"
    },
    {
        SerialNo:2,
        Name: "About us",
        Address: "/aboutus"
    },
    {
        SerialNo:3,
        Name: "Services",
        Address: "/services"
    }
]



const TestNav = () => {

  return (

    <header className='absolute padding-x py-5 z-10 w-full bg-purplemain-light'>
        <nav className='flex justify-between items-center max-container'>
        <Image alt="logo" width="50" height="10" src="/logotwo.png"/>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
        {Navitems.map((item)=>(
            <li key={item.SerialNo}>
                <Link 
                href={item.Address}
                className='font-medium font-montserrat leading-normal text-lg hover:text-purplemain'
                
                >
                    {item.Name}
                </Link>
            </li>
        ))
        }
        </ul>
        <div className='gap-3 flex items-center max-lg:hidden text-white bg-purplemain hover:border-black px-4 py-2'>
        <Link className='font-medium font-montserrat' href="/contactus">Contact us</Link>
        <Icons.arrowRight />
        </div>
        </nav>
    </header>

  )
}

export default TestNav