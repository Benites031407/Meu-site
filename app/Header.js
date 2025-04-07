'use client'
import Link from 'next/link'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineShoppingBag } from 'react-icons/hi2'

const Header = () => {
  return (
    <header className=' sticky top-0 left-0 w-full backdrop-blur-sm bg-gradient-to-r from-slate-50/90 to-gray-50/90 z-50'>
        <div className="container mx-auto flex justify-between lg:gap-5 font-thin text-sm items-center flex-wrap">
           
                <Link href='/'>
                  <img src="./assets/porsche.svg" alt="icons" />
                </Link>
         
                <Link href='/'>Home
                </Link>
                <Link href='/about'>Sobre
                </Link>
                <Link href='/projects'>Projetos
                </Link>
                <Link href='/highlights'>Destaques
                </Link>
                <Link href='/habilities'>Habilidades
                </Link>
                <Link href='/curriculo'>Currículo
                </Link>
                <Link href='/contact'>Contato
                </Link>
                <Link href='/projects'>
                  <BiSearch className='text-lg'/>
                </Link>
        </div>
    </header>
  )
}

export default Header