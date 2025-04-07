import React from 'react'

// Componente de rodapé (Footer)
const Footer = () => {
  return (
    // Fundo do rodapé com uma cor cinza claro
    <div className='bg-[#F5F5F7]'>
      {/* Container principal com padding e responsividade */}
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        
        {/* Grade principal que divide o rodapé em colunas */}
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          
          {/* Coluna com logo e citação */}
          <div className="md:max-w-md lg:col-span-2 flex items-center">
            {/* Logo */}
            <img className='w-20 flex-shrink-0 mr-8' src="assets/porsche.svg" alt="" />
            
            {/* Citação inspiradora */}
            <p className="text-sm text-gray-800">
              "Você está preocupado demais com o que foi e o que será.
              Há um ditado: O ontem é história, o amanhã é um mistério, mas o hoje é uma dádiva. 
              <br />Por isso é chamado de presente. <br />(Mestre Oogway, 2008)" 
            </p>
          </div>

          {/* Colunas com navegação para seções do site */}
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            
            {/* Coluna: Projetos */}
            <div>
              <p className="font-semibold tracking-wide text-gray-800">Projetos</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/projects" className="text-gray-600 hover:text-deep-purple-accent-400">Sites</a></li>
                <li><a href="/projects" className="text-gray-600 hover:text-deep-purple-accent-400">Apps</a></li>
                <li><a href="/projects" className="text-gray-600 hover:text-deep-purple-accent-400">Mecatrônica</a></li>
              </ul>
            </div>

            {/* Coluna: Experiências */}
            <div>
              <p className="font-semibold tracking-wide text-gray-800">Experiências</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/projects" className="text-gray-600 hover:text-deep-purple-accent-400">Profissionais</a></li>
                <li><a href="/highlights" className="text-gray-600 hover:text-deep-purple-accent-400">Fóruns</a></li>
                <li><a href="/highlights" className="text-gray-600 hover:text-deep-purple-accent-400">Música</a></li>
              </ul>
            </div>

            {/* Coluna: Sobre mim */}
            <div>
              <p className="font-semibold tracking-wide text-gray-800">Sobre mim</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/contact" className="text-gray-600 hover:text-deep-purple-accent-400">Contato</a></li>
                <li><a href="/curriculo" className="text-gray-600 hover:text-deep-purple-accent-400">Currículo</a></li>
                <li><a href="/highlights" className="text-gray-600 hover:text-deep-purple-accent-400">Vida</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Parte inferior do rodapé com direitos autorais e redes sociais */}
        <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
          
          {/* Texto de direitos autorais */}
          <p className="text-sm text-gray-600">
            © Copyright 2025 Pirotinha Ltda. Todos os direitos reservados.
          </p>

          {/* Ícones de redes sociais */}
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pedro-benites-30383524b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-deep-purple-accent-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="..."/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_benitespedro/"
              className="text-gray-500 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="..."/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Benites031407"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="..."/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
