export const metadata = {
  title: 'Currículo',
};

import React from 'react';

const CurriculumPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Meu Currículo</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Aqui está um resumo das minhas experiências, habilidades e formação acadêmica.
        </p>
      </header>

      {/* Professional Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Experiência Profissional</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Trainee de Tecnologia</h3>
            <p className="text-muted-foreground">EJEM (Empresa Junior Engenharia Mackenzie) - Março 2025 a Presente</p>
            <ul className="list-disc list-inside mt-2 text-muted-foreground">
              <li>Desenvolvimento de interfaces responsivas utilizando React e Tailwind CSS.</li>
              <li>Desenvolvimento de Aplicativos utilizando Flutterflow e Supabase.</li>
              <li>Colaboração com equipes de Front e Backend para implementar novas funcionalidades.</li>
              <li>Otimização de desempenho e acessibilidade de aplicações web.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Projetos</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Hermes</h3>
            <ul className="list-disc list-inside mt-2 text-muted-foreground">
              <li>Desenvolvimento de um carro de controle remoto por um aplicativo via celular.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">NX-25</h3>
            <ul className="list-disc list-inside mt-2 text-muted-foreground">
              <li>Desenvolvimento de um aplicativo com integração de SQL para uma feira de recrutamento.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Monitora SP</h3>
            <ul className="list-disc list-inside mt-2 text-muted-foreground">
              <li>Desenvolvimento de um aplicativo com flutterflow integrado ao SQL para forncecer informações sobre ocorrências.</li>
            </ul>
          </div>
        </div>
        
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Formação Acadêmica</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Estudante em Ciência da Computação</h3>
            <p className="text-muted-foreground">Universidade Presbiteriana Mackenzie - Atual</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Ensino Médio</h3>
            <p className="text-muted-foreground">Instituto Presbiteriano Mackenzie Tamboré - 2022 a 2024</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Ensino Fundamental</h3>
            <p className="text-muted-foreground">Instituto Presbiteriano Mackenzie Tamboré - 2013 a 2022</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Habilidades</h2>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>Desenvolvimento Frontend: React, Next.js, Tailwind CSS, Html</li>
          <li>Desenvolvimento Backend: Node.js, C++, SQL, Django</li>
          <li>Ferramentas: Flutterflow, Docker, Firebase, Supabase</li>
          <li>Idiomas: Português (Nativo), Inglês (Fluente), Espanhol (Intermediário)</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Contato</h2>
        <p className="text-muted-foreground">
          Caso queira entrar em contato, acesse meu perfil no{' '}
          <a
            href="https://www.linkedin.com/in/pedro-benites-30383524b"
            className="text-primary hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default CurriculumPage;