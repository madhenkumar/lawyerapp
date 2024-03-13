import React from 'react'
import EachService from './EachService';
import Link from 'next/link';
import { Icons } from './Icons';
import { buttonVariants } from '~/components/ui/button';

export type Services = {
    id: any,
    name: string,
    description: string,
    imageUrl: string
}

const lawyerServices: Services[] = [
    {
        id: 1,
        name: 'Service-1',
        description: 'Get professional legal advice and guidance on various legal matters.',
        imageUrl: "/customerservice.png"
    },
    {
        id: 2,
        name: 'Service-1',
        description: 'Review existing contracts or have new contracts drafted with attention to detail.',
        imageUrl: "/customerservice.png"
    },
    {
        id: 3,
        name: 'Service-1',
        description: 'Representation in court for civil, criminal, or administrative matters.',
        imageUrl: "/customerservice.png"
    },
    {
        id: 4,
        name: 'Service-1',
        description: 'Plan for the distribution of assets and properties to heirs and beneficiaries.',
        imageUrl: "/customerservice.png"
    }
];


export const OurServices = () => {
    return (
        <div className='relative' >
            <p className='text-xl font-montserrat text-purplemain'> OUR SERVICES</p>
            <h1 className='font-montserrat font-medium text-3xl pt-5'>
            <span className="whitespace-nowrap">Our agency experts will provide you</span>
            <br />
            with a full stack of services

            </h1>
                <div className='pt-10 grid grid-cols-3 gap-10'>
                    {lawyerServices.map((service)=>(
                            <EachService key={service.id}description={service.description} id={service.id} imageUrl={service.imageUrl} name={service.name}/>
                    )

                    )}                    
                </div>
            <div className='absolute bottom-0 right-0'>   
            <Link href="/services" className={buttonVariants({ variant: "outline",className: 'border-purplemain px-4 py-4 rounded-none' })}>
                <span className='font-montserrat text-purplemain pr-2'>Explore all services</span>
            <Icons.arrowRight className="iconfill"/>
            </Link>
            </div>
        </div>
    )
}

