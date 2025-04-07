"use client"; // Indica que este componente deve ser renderizado no cliente (não no servidor)

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Função utilitária para concatenar classes condicionalmente
import { Button } from "@/components/ui/button"; // Componente de botão estilizado

// Componentes do carrossel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Componente principal da página
export default function Home() {
  return (
    <main className="min-h-screen bg-background"> {/* Container principal com altura mínima de tela */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-center text-4xl font-bold tracking-tight animate-fade-in">
          Minhas Experiências
        </h1>
        <Slider /> {/* Componente de carrossel manual */}
        <HighlightsCarousel /> {/* Componente de carrossel com destaque interativo */}
      </div>
    </main>
  );
}

// Lista de experiências com título, descrição e imagem
const highlights = [
  { id: 1, title: "Fórum FAAP", description: "Participação no Fórum FAAP...", image: "/assets/faap.jpeg" },
  { id: 2, title: "Confemack", description: "Fórum da ONU sediado pelo Mackenzie.", image: "/assets/confemack2.jpeg" },
  { id: 3, title: "Macktalent 24", description: "Edição 2024 do MackTalent...", image: "/assets/macktalent1.jpeg" },
  { id: 4, title: "Macktalent 25", description: "Edição 2025 do MackTalent...", image: "/assets/macktalent2.jpeg" },
  { id: 5, title: "OBA", description: "Participação na Olimpíada Brasileira de Astronomia...", image: "/assets/oba.jpeg" },
  { id: 6, title: "Hermes", description: "Projeto Hermes de mecatrônica...", image: "/assets/hermes.jpeg" },
];

// Carrossel simples com botões "Anterior" e "Próxima"
function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar o slide atual

  // Função para ir ao slide anterior
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? highlights.length - 1 : prevIndex - 1
    );
  };

  // Função para ir ao próximo slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === highlights.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mb-12">
      {/* Imagem principal com gradiente e texto sobreposto */}
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <Image
          src={highlights[currentIndex].image}
          alt={highlights[currentIndex].title}
          width={1200}
          height={600}
          className="object-cover w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-2xl font-bold">{highlights[currentIndex].title}</h2>
          <p className="text-sm">{highlights[currentIndex].description}</p>
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <Button onClick={handlePrevious} className="bg-primary text-white">
          Anterior
        </Button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <Button onClick={handleNext} className="bg-primary text-white">
          Próxima
        </Button>
      </div>
    </div>
  );
}

// Carrossel interativo com grid de destaques e animações
function HighlightsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0); // Slide ativo
  const [isAnimating, setIsAnimating] = useState(false); // Controle de animação

  // Função para trocar o slide com efeito
  const handleSlideChange = (index) => {
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500); // Tempo da animação
  };

  return (
    <div className="space-y-12">
      {/* Carrossel principal com imagens em destaque */}
      <div className="relative overflow-hidden rounded-xl shadow-xl">
        <Carousel className="w-full" onSelect={(index) => handleSlideChange(index)}>
          <CarouselContent>
            {highlights.map((highlight, index) => (
              <CarouselItem key={highlight.id}>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h2 className="text-3xl font-bold">{highlight.title}</h2>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>

      {/* Grade com miniaturas das experiências */}
      <div className="grid gap-4 md:grid-cols-4">
        {highlights.map((highlight, index) => (
          <div
            key={highlight.id}
            className={cn(
              "cursor-pointer rounded-lg border p-4 transition-all duration-300",
              activeIndex === index
                ? "border-primary bg-primary/5 shadow-md"
                : "border-border hover:border-primary/50"
            )}
            onClick={() => handleSlideChange(index)}
          >
            {/* Barra indicadora de progresso */}
            <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  "h-full bg-primary transition-all duration-500",
                  activeIndex === index ? "w-full" : "w-0"
                )}
              />
            </div>
            {/* Título da experiência */}
            <h3 className="mb-2 font-semibold">{highlight.title}</h3>

            {/* Descrição com animação de opacidade */}
            <div
              className={cn(
                "transition-opacity duration-500",
                activeIndex === index && !isAnimating
                  ? "opacity-100"
                  : "opacity-70"
              )}
            >
              <p className="line-clamp-3 text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Seção de detalhes da experiência selecionada */}
      <div className="rounded-xl bg-card p-6 shadow-md animate-fade-in-up">
        <div
          className={cn(
            "transition-all duration-500",
            isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          )}
        >
          <h2 className="mb-4 text-2xl font-bold">
            {highlights[activeIndex].title}
          </h2>
          <p className="text-muted-foreground">
            {highlights[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}
