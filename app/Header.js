'use client' // Indica que este componente deve ser renderizado no cliente (Client Component do Next.js 13+)

import Link from 'next/link' // Componente de link do Next.js (navegação SPA)
import React from 'react' // Importa o React
import { BiSearch } from 'react-icons/bi' // Ícone de busca da biblioteca react-icons
import { HiOutlineShoppingBag } from 'react-icons/hi2' // (Ícone importado mas não utilizado)

const Header = () => {
  return (
    // Cabeçalho fixo no topo, com fundo transparente e efeito de desfoque
    <header className='sticky top-0 left-0 w-full backdrop-blur-sm bg-gradient-to-r from-slate-50/90 to-gray-50/90 z-50'>
      
      {/* Container centralizado com espaçamento entre os itens, texto fino, responsivo e com quebra de linha para telas menores */}
      <div className="container mx-auto flex justify-between lg:gap-5 font-thin text-sm items-center flex-wrap">
        
        {/* Logo da marca (clicável, redireciona para a home) */}
        <Link href='/'>
          <img src="./assets/porsche.svg" alt="icons" />
        </Link>

        {/* Navegação para páginas principais */}
        <Link href='/'>Home</Link>
        <Link href='/about'>Sobre</Link>
        <Link href='/projects'>Projetos</Link>
        <Link href='/highlights'>Destaques</Link>
        <Link href='/habilities'>Habilidades</Link>
        <Link href='/curriculo'>Currículo</Link>
        <Link href='/contact'>Contato</Link>

        {/* Ícone de busca (linkando para /projects, possivelmente para uma área de busca de projetos) */}
        <Link href='/projects'>
          <BiSearch className='text-lg' />
        </Link>
      </div>
    </header>
  )
}

export default Header
