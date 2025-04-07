// Define os metadados da página, como o título que será exibido no navegador
export const metadata = {
  title: 'Sobre mim',
};

// Importações necessárias do React, Next.js e suas bibliotecas
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Componente principal da página "Sobre mim"
export default function AboutUs() {
  return (
    // Container principal com espaçamento interno
    <div className="container mx-auto px-4 py-12">

      {/* Seção principal com o título da página e uma imagem de destaque */}
      <section className="mb-20 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Sobre mim</h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-500">
          Programador aspirante com experiência em desenvolvimento web e mobile. Sempre buscando aprender e crescer.
        </p>

        {/* Imagem grande de destaque */}
        <div className="relative mx-auto h-[300px] w-full max-w-4xl overflow-hidden rounded-xl md:h-[400px]">
          <Image
            src="/assets/Eu.jpeg" // Caminho da imagem
            alt="Our team working together" // Texto alternativo (poderia ser mais descritivo)
            fill // Preenche o espaço disponível
            className="object-cover" // A imagem cobre toda a área mantendo o aspecto
            priority // Carrega a imagem com alta prioridade
          />
        </div>
      </section>

      {/* Seção contando um pouco da história pessoal */}
      <section className="mb-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Minha história</h2>
            <p className="mb-4 text-gray-500">
              Nascido em 14/03/2007, sempre fui apaixonado por tecnologia e o mecanismo das máquinas...
            </p>
          </div>

          {/* Imagem de infância ou algo relacionado à história */}
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            <Image
              src="/assets/Eupequeno.jpeg"
              alt="Company history timeline"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Seção listando os principais valores ou focos pessoais */}
      <section className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-bold">Meus focos</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Mapeia uma lista de valores e renderiza dinamicamente cada um como um card */}
          {[
            {
              title: "Inovação",
              description: "Constantemente evoluindo, tendo novas ideias e resolvendo problemas."
            },
            {
              title: "Integridade",
              description: "Sigo sempre o mais alto padrão ético e moral."
            },
            {
              title: "Qualidade",
              description: "Busco sempre entregar a melhor qualidade em tudo que faço."
            },
            {
              title: "Colaboração",
              description: "Acredito no poder do trabalho em equipe para entregar os melhores resultados."
            },
            {
              title: "Foco no cliente",
              description: "Coloco o cliente no centro do projeto, buscando sempre suprir suas expectativas."
            },
            {
              title: "Responsabilidade",
              description: "Todas as ações tomadas são pensadas em suas consequências."
            }
          ].map((value, index) => (
            <div key={index} className="rounded-lg border-0 bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
              <p className="text-gray-500">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção com estatísticas pessoais ou profissionais */}
      <section className="mb-20 rounded-xl bg-gray-100 p-10">
        <h2 className="mb-10 text-center text-3xl font-bold">Minhas estatísticas</h2>
        <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "6", label: "Projetos" },
            { value: "1", label: "Empresas trabalhadas" },
            { value: "18", label: "Anos" },
            { value: "25+", label: "Countries Reached" } // Você pode traduzir para "Países alcançados"
          ].map((stat, index) => (
            <div key={index}>
              <p className="mb-2 text-4xl font-bold">{stat.value}</p>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de contato com número, e-mail e botão de ação */}
      <section>
        <div className="rounded-xl bg-white p-10 shadow-lg">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Entre em contato</h2>
              <p className="mb-6 text-gray-500">
                {/* Espaço reservado para um texto opcional de introdução ao contato */}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="mr-3 inline-block h-5 w-5 text-center">📞</span>
                  <p>(11)94133-0822</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 inline-block h-5 w-5 text-center">✉️</span>
                  <p>pedrobpfeitosa@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Botão estilizado para redirecionar ao formulário ou página de contato */}
            <div className="flex items-center justify-center">
              <a 
                href="/contact" 
                className="inline-flex w-full max-w-xs items-center justify-center rounded-md bg-black px-6 py-3 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Contatar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
