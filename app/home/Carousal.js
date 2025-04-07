'use client' // Indica que este componente será executado no lado do cliente (Client Component do Next.js)

import React, { Component } from "react";
import Slider from "react-slick"; // Importa o componente de carrossel da biblioteca react-slick

// Importa os estilos do carrossel (obrigatórios para funcionar corretamente)
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Classe que define o componente Carousal
export default class Carousal extends Component {
  render() {
    // Configurações do carrossel (documentação: https://react-slick.neostack.com/docs/api)
    const settings = {
      infinite: true,          // Faz o carrossel rodar em loop infinito
      slidesToShow: 1,         // Mostra um slide por vez
      centerMode: true,        // Centraliza o slide ativo
      slidesToScroll: 2,       // Avança dois slides por vez
      autoplay: true,          // Ativa rolagem automática
      autoplaySpeed: 3000,     // Tempo entre os slides em milissegundos (3 segundos)
      arrows: false,           // Oculta as setas de navegação
      swipe: true,             // Permite arrastar o slide com o dedo (touch) ou mouse
      dots: true,              // Mostra bolinhas (indicadores) abaixo do carrossel
      pauseOnHover: true       // Pausa o autoplay quando o mouse estiver sobre o slide
    };

    // Retorna o JSX com o carrossel e as imagens
    return (
      <div>
        {/* Componente Slider recebe as configurações via spread operator */}
        <Slider {...settings}>

          {/* Slide 1 */}
          <div className="w-full h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
            <img
              className="w-full h-full object-cover" // Preenche todo o espaço do slide com corte proporcional
              src="assets/laura.jpeg"
              alt="carousal"
            />
          </div>

          {/* Slide 2 */}
          <div className="w-full h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="assets/fusca.png"
              alt="carousal"
            />
          </div>

          {/* Slide 3 */}
          <div className="w-full h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="assets/pais.jpeg"
              alt="carousal"
            />
          </div>

          {/* Slide 4 */}
          <div className="w-full h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="assets/maxpequeno.jpeg"
              alt="carousal"
            />
          </div>

        </Slider>
      </div>
    );
  }
}
