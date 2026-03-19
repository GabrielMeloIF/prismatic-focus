'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type NavLink = {
    label: string;
    href: String;
    dropdown?: { label:String; href: string}[];
}

const navLinks: NavLink[] = [
    {label: 'Home', href: '/'},
    {label: 'Loja', href: '/'},
    {label: 'Blog', href: '/'},
    {
        label: 'Produtos',
        href: '/',
        dropdown: [
            {label: 'Roupas', href: '/'},
            {label: 'Acessórios', href: '/'},
        ],
    },
    {label: 'Fale conosco', href: '/'},
];

export default function BottomNav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
        {},
    );
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrolly > 50);
        };

        windown.addEventlistener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    const toggleDropdown = (label: string) => {
        setOpenDropdowns((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setOpenDropdowns({});   
    };

    return (
        <div 
            className={`w-full bg-white py-5 shadown-sm transition-all duration-500 ${ isFixed ? 'fixed-nav fixed left-0 top-0 z-50': ''}`}>

            <div className='flex w-full items-center justify-between px-[8%] text-gray-700 lg:px-[16%]'>

            {/* Logo Mobile */}
            <Link
                href='/'
                className='font-audiowide text-3xl font-bold text-bold'
            >
            </Link>
            
            </div>
        </div>
    )

};
