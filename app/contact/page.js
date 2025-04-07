export const metadata = {
  title: 'Contato',
};

import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        {/* Título e descrição */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Entre em contato</h2>
          <p className="mt-4 text-muted-foreground">
            Minhas principais informações e formas de contato estão listadas abaixo. Você pode entrar em contato comigo ou me encontrar nas redes sociais.
          </p>
        </div>

        {/* Seção de Email */}
        <div className="rounded-lg bg-muted/50 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-medium">Email</h3>
          </div>
          <div className="space-y-2">
            <Link href="mailto:pedrobpfeitosa@gmail.com" className="block text-primary hover:underline">
              pedrobpfeitosa@gmail.com
            </Link>
          </div>
        </div>

        {/* Seção de Telefone */}
        <div className="rounded-lg bg-muted/50 p-6 mb-6">
          <h3 className="text-lg font-medium mb-4">Telefone</h3>
          <div className="space-y-2">
            <p className="text-muted-foreground">+55 (11) 94133-0822</p>
          </div>
        </div>

        {/* Seção de GitHub */}
        <div className="rounded-lg bg-muted/50 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.932 0-1.31.47-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404c1.02.005 2.047.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.628-5.475 5.922.43.372.823 1.103.823 2.222 0 1.604-.015 2.897-.015 3.293 0 .32.192.694.8.576C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <Link href="https://github.com/Benites031407" className="text-lg font-medium text-primary hover:underline">
              GitHub
            </Link>
          </div>
        </div>

        {/* Seção de LinkedIn */}
        <div className="rounded-lg bg-muted/50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5"
            >
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7c1 0 1.7.8 1.7 1.7s-.8 1.7-1.7 1.7zm13.5 11.3h-3v-5.6c0-1.3-.5-2.1-1.6-2.1-0.9 0-1.3.6-1.5 1.2-.1.2-.1.5-.1.8v5.6h-3v-10h3v1.4c.4-.7 1.2-1.6 2.8-1.6 2 0 3.4 1.3 3.4 4.1v6.1z" />
            </svg>
            <Link href="https://www.linkedin.com/in/pedro-benites-30383524b" className="text-lg font-medium text-primary hover:underline">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}