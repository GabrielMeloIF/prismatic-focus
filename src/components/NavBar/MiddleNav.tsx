'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function MiddleNav() {
    const [query, setQuery] = useState('');
    return (
        <div className='w-full bg-[var(--prim)] border-b border-gray-300 relative'>
            <div className='flex items-center justify-between py-3 px-[8%] lg:px-[16%]'>
                {/*Logo*/}
                <Link href='/' className='font-audiowide text-4xl lg:text-5xl font-bold Audiowide text-(--white) '>
                    <span className='text-white'>Prismatic</span><span className='text-[var(--second)]'>Focus</span>
                </Link>

                {/* Search Bar*/}
                <div className='relative mx-0 ms-6 flex flex-1 flex-col rounded-lg bg-white lg:max-w-2xl'>
                    <div className='flex items-center'>
                        <input 
                            type="text"
                            placeholder='Busque por um produto ou marca'
                            value={query}
                            onChange={(e) => setQuery (e.target.value)}
                            className='flex-1 rounded-1-lg px-4 py-4 outline-none' 
                        />
                        <button className='cursor-pointer px-3 text-2xl'>
                            <i className='bi bi-search'></i>
                        </button>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Image
                        src='/suporte.png'
                        alt='Suporte'
                        width={50}
                        height={50}
                    />
                    <div className='flex flex-col'>
                        <h2 className='font-golos ps-2 text-xs font-semibold text-white'>SUPORTE</h2>
                        <h1 className='font-golos font-semibold text-white'>12 99999-9999</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}