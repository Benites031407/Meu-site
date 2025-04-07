'use client' // Indica que este componente será renderizado no lado do cliente (Client Component no Next.js)

import React from "react";

// Componente Accessories que exibe as seções de Soft Skills e Hard Skills
const Accessories = () => {
  return (
    // Container centralizado com margem vertical em telas médias
    <div className="container mx-auto md:my-24 h-auto">
      
      {/* Grid com uma coluna em telas pequenas e duas colunas em telas grandes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        {/* Seção de Soft Skills */}
        <div className="relative">
          {/* Imagem de fundo com posicionamento absoluto */}
          <img
            src="assets/softskills.png"
            className="absolute top-12 left-0 right-0 mx-auto object-contain h-full w-full"
            alt=""
          />
          
          {/* Container relativo para manter o tamanho da seção */}
          <div className="relative min-h-[540px]">
            <div className="flex flex-col items-center justify-between pt-10">
              
              {/* Conteúdo textual centralizado */}
              <div className="flex flex-col justify-center items-center">
                <p className="text-3xl font-semibold">Soft Skills</p>
                <p className="text-xl pt-2 text-center">
                  Confiante. Criativo. Adaptável.<br />
                </p>

                {/* Link para saber mais */}
                <div className="flex gap-10 mt-2">
                  <a
                    href="/habilities"
                    className="text-lg font-medium text-blue-500 hover:underline cursor-pointer"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Seção de Hard Skills */}
        <div className="bg-black relative text-white">
          {/* Imagem de fundo com posicionamento absoluto */}
          <img
            src="assets/hardskills.png"
            className="absolute top-12 left-0 right-0 mx-auto object-contain h-full w-full"
            alt=""
          />
          
          {/* Container relativo com altura mínima */}
          <div className="relative min-h-[540px]">
            <div className="flex flex-col items-center justify-between pt-10">
              
              {/* Conteúdo textual centralizado */}
              <div className="flex flex-col justify-center items-center text-white">
                <p className="text-3xl font-semibold">Hard Skills</p>
                <p className="text-xl pt-2">
                  Idiomas. Programação. Eletrônica.
                </p>

                {/* Link para saber mais */}
                <div className="flex gap-10 mt-5">
                  <a
                    href="/habilities"
                    className="text-lg font-medium text-blue-500 hover:underline cursor-pointer"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Accessories; // Exporta o componente para uso em outras partes do projeto
