import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#F5F5F7]'>
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2 flex items-center">
         <img className='w-20 flex-shrink-0 mr-8' src="assets/porsche.svg" alt="" />
         
            <p className="text-sm text-gray-800">
            "Você está preocupado demais com o que foi e o que será.
            Há um ditado: O ontem é história, o amanhã é um mistério, mas o hoje é uma dádiva. 
            <br />Por isso é chamado de presente. <br />(Mestre Oogway, 2008)" 
            </p>
          
      
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
             Projetos
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/projects"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Sites
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Apps
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Mecatrônica
                </a>
              </li>
              <li>
              </li>
              <li>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Experiências</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/projects"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Profissionais
                </a>
              </li>
              <li>
                <a
                  href="/highlights"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Fóruns
                </a>
              </li>
              <li>
                <a
                  href="/highlights"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Música
                </a>
              </li>
              <li>
              </li>
              <li>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Sobre mim</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="/curriculo"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Currículo
                </a>
              </li>
              <li>
                <a
                  href="/highlights"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Vida
                </a>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2025 Pirotinha Ltda. Todos os direitos reservados.
        </p>

      <div className="flex items-center mt-4 space-x-4 sm:mt-0">
        <a
          href="https://www.linkedin.com/in/pedro-benites-30383524b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5"
          >
            <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 
            0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 
            0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7c1 0 1.7.8 1.7 
            1.7s-.8 1.7-1.7 1.7zm13.5 11.3h-3v-5.6c0-1.3-.5-2.1-1.6-2.1-0.9 
            0-1.3.6-1.5 1.2-.1.2-.1.5-.1.8v5.6h-3v-10h3v1.4c.4-.7 1.2-1.6 
            2.8-1.6 2 0 3.4 1.3 3.4 4.1v6.1z" />
          </svg>
        </a>
          <a
            href="https://www.instagram.com/_benitespedro/"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4" />
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg>
          </a>
          <a
           href="https://github.com/Benites031407"
           target="_blank"
           rel="noopener noreferrer"
          className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
          <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5"
          xmlns="http://www.w3.org/2000/svg"
          >
         <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.932 0-1.31.47-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404c1.02.005 2.047.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.628-5.475 5.922.43.372.823 1.103.823 2.222 0 1.604-.015 2.897-.015 3.293 0 .32.192.694.8.576C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z"/>
           </svg>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer