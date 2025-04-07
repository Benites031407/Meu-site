// Define os metadados da página, como o título que aparece na aba do navegador
export const metadata = {
  title: 'Currículo',
};

// Importa o React (necessário para usar JSX)
import React from 'react';

// Componente principal da página de currículo
const CurriculumPage = () => {
  return (
    // Container centralizado com espaçamento interno
    <div className="container mx-auto px-4 py-12 max-w-4xl">

      {/* Seção do cabeçalho com o título da página e uma descrição */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Meu Currículo</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Aqui está um resumo das minhas experiências, habilidades e formação acadêmica.
        </p>
      </header>

      {/* Seção de Experiência Profissional */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Experiência Profissional</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Trainee de Tecnologia</h3>
            <p className="text-muted-foreground">
              EJEM (Empresa Junior Engenharia Mackenzie) - Março 2025 a Presente
            </p>
            {/* Lista das responsabilidades/atividades exercidas */}
            <ul className="list-disc list-inside mt-2 text-muted-foreground">
              <li>Desenvolvimento de interfaces responsivas utilizando React e Tailwind CSS.</li>
              <li>Desenvolvimento de Aplicativos utilizando Flutterflow e Supabase.</li>
              <li>Colaboração com equipes de Front e Backend para implementar novas funcionalidades.</li>
              <li>Otimização de desempenho e acessibilidade de aplicações web.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seção de Projetos Pessoais ou Acadêmicos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Projetos</h2>
        <div className="space-y-6">
          {/* Projeto 1: Hermes */}
          <div>
            <h3 className="text-lg font-semibold">Hermes</h3>
            <ul className="list-disc list-inside mt-2 text-muted-foreground">
              <li>Desenvolvimento de um carro de controle remoto por um aplicativo via celular.</li>
            </ul>
          </div>

          {/* Projeto 2: NX-25 */}
          <div>
            <h3 className="text-lg font-semibold">NX-25</h3>
            <ul className="list-disc list-inside mt-2 text-muted-foreground">
              <li>Desenvolvimento de um aplicativo com integração de SQL para uma feira de recrutamento.</li>
            </ul>
          </div>

          {/* Projeto 3: Monitora SP */}
          <div>
            <h3 className="text-lg font-semibold">Monitora SP</h3>
            <ul className="list-disc list-inside mt-2 text-muted-foreground">
              <li>Desenvolvimento de um aplicativo com Flutterflow integrado ao SQL para fornecer informações sobre ocorrências.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seção de Formação Acadêmica */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Formação Acadêmica</h2>
        <div className="space-y-6">
          {/* Universidade */}
          <div>
            <h3 className="text-lg font-semibold">Estudante em Ciência da Computação</h3>
            <p className="text-muted-foreground">Universidade Presbiteriana Mackenzie - Atual</p>
          </div>
          {/* Ensino Médio */}
          <div>
            <h3 className="text-lg font-semibold">Ensino Médio</h3>
            <p className="text-muted-foreground">Instituto Presbiteriano Mackenzie Tamboré - 2022 a 2024</p>
          </div>
          {/* Ensino Fundamental */}
          <div>
            <h3 className="text-lg font-semibold">Ensino Fundamental</h3>
            <p className="text-muted-foreground">Instituto Presbiteriano Mackenzie Tamboré - 2013 a 2022</p>
          </div>
        </div>
      </section>

      {/* Seção de Habilidades Técnicas e Idiomas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Habilidades</h2>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>Desenvolvimento Frontend: React, Next.js, Tailwind CSS, HTML</li>
          <li>Desenvolvimento Backend: Node.js, C++, SQL, Django</li>
          <li>Ferramentas: Flutterflow, Docker, Firebase, Supabase</li>
          <li>Idiomas: Português (Nativo), Inglês (Fluente), Espanhol (Intermediário)</li>
        </ul>
      </section>

      {/* Seção de Contato (com link para o LinkedIn) */}
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

// Exporta o componente para que possa ser usado como uma página no Next.js
export default CurriculumPage;
