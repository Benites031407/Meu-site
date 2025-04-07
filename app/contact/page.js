// Define os metadados da página, nesse caso o título que será exibido no navegador
export const metadata = {
  title: 'Contato',
};

// Importações necessárias do React e Next.js
import React from 'react';
import Link from 'next/link';

// Componente principal da página de Contato
export default function Contact() {
  return (
    // Seção principal da página com espaçamento vertical
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        
        {/* Título e descrição da seção */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Entre em contato</h2>
          <p className="mt-4 text-muted-foreground">
            Minhas principais informações e formas de contato estão listadas abaixo. 
            Você pode entrar em contato comigo ou me encontrar nas redes sociais.
          </p>
        </div>

        {/* Seção com o email de contato */}
        <div className="rounded-lg bg-muted/50 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-medium">Email</h3>
          </div>
          <div className="space-y-2">
            {/* Link que abre o cliente de email com o endereço já preenchido */}
            <Link href="mailto:pedrobpfeitosa@gmail.com" className="block text-primary hover:underline">
              pedrobpfeitosa@gmail.com
            </Link>
          </div>
        </div>

        {/* Seção com o número de telefone */}
        <div className="rounded-lg bg-muted/50 p-6 mb-6">
          <h3 className="text-lg font-medium mb-4">Telefone</h3>
          <div className="space-y-2">
            <p className="text-muted-foreground">+55 (11) 94133-0822</p>
          </div>
        </div>

        {/* Seção com link para o GitHub */}
        <div className="rounded-lg bg-muted/50 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            {/* Ícone do GitHub em SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387..."/>
            </svg>
            {/* Link para o perfil do GitHub */}
            <Link href="https://github.com/Benites031407" className="text-lg font-medium text-primary hover:underline">
              GitHub
            </Link>
          </div>
        </div>

        {/* Seção com link para o LinkedIn */}
        <div className="rounded-lg bg-muted/50 p-6">
          <div className="flex items-center gap-2 mb-4">
            {/* Ícone do LinkedIn em SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5"
            >
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8..."/>
            </svg>
            {/* Link para o perfil do LinkedIn */}
            <Link href="https://www.linkedin.com/in/pedro-benites-30383524b" className="text-lg font-medium text-primary hover:underline">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
