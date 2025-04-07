'use client' // Indica que esse componente será executado no lado do cliente (Client Component)

import React, { useEffect, useState } from "react";

const Hero = () => {
  // Frases que serão exibidas uma por uma com efeito de digitação
  const toRotate = ["Pedro Benites", "Bem vindo.", "Elegante. Eficiente."];

  // Estado que armazena o texto atual sendo exibido
  const [text, setText] = useState("");

  // Índice para controlar qual frase está sendo exibida
  const [loopNum, setLoopNum] = useState(0);

  // Estado que indica se o texto está sendo apagado
  const [isDeleting, setIsDeleting] = useState(false);

  // Tempo de intervalo entre os caracteres (digitação/apagamento)
  const [delta, setDelta] = useState(200);

  // Hook useEffect que executa o efeito de digitação a cada mudança de `text` ou `isDeleting`
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;       // Define qual frase será usada com base no loop
      const fullText = toRotate[i];              // Frase completa a ser exibida

      // Atualiza o texto gradualmente com base no estado de digitação ou apagamento
      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)  // Apagando
          : fullText.substring(0, prev.length + 1)  // Digitando
      );

      // Altera a velocidade do efeito dependendo se está apagando ou digitando
      setDelta(isDeleting ? 100 : 200);

      // Quando terminar de digitar a frase inteira, espera 1 segundo antes de apagar
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      }
      // Quando terminar de apagar, avança para a próxima frase
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    // Define um timeout para executar a função de digitação com base em `delta`
    const ticker = setTimeout(() => {
      handleTyping();
    }, delta);

    // Limpa o timeout anterior para evitar múltiplas execuções
    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  return (
    <div className="bg-black h-auto text-white">
      {/* Container centralizado responsivo */}
      <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
        <div className="flex flex-col items-center max-w-2xl md:px-8">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div className="flex flex-col justify-center items-center">
              
              {/* Texto digitado dinamicamente */}
              <p className="text-5xl font-semibold min-h-[3.5rem]">
                <span>{text}</span>
                {/* Linha que pisca no final, simulando cursor de digitação */}
                <span className="border-r-2 border-white ml-1 animate-pulse"></span>
              </p>

              {/* Subtítulo fixo abaixo da animação */}
              <p className="text-xl pt-2">Diferente do que você imaginava.</p>

              {/* Espaço reservado para botões ou links, se necessário */}
              <div className="flex gap-10 mt-5">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
