// Importa o componente de imagem otimizada do Next.js (não está sendo usado neste arquivo, mas pode ser utilizado no futuro)
import Image from 'next/image'

// Importa o componente de navegação Link do Next.js (também não está sendo usado neste arquivo específico)
import Link from 'next/link'

// Importa os componentes visuais usados na página inicial (home)
import Hero from './home/Hero'
import Accessories from "./home/Accessories"
import Carousal from "./home/Carousal"

// Componente principal da página inicial do site (Home)
export default function Home() {
  return (
    <>
      {/* Componente de destaque principal ou banner (normalmente com título, chamada para ação, etc.) */}
      <Hero />

      {/* Componente que provavelmente exibe acessórios ou funcionalidades adicionais */}
      <Accessories />

      {/* Componente de carrossel de imagens ou conteúdos (ex: slides de projetos, produtos, etc.) */}
      <Carousal />
    </>
  )
}
