'use client'
import React, { useEffect, useState } from "react";

const Hero = () => {
  const toRotate = ["Pedro Benites", "Bem vindo.", "Elegante. Eficiente."];
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      setDelta(isDeleting ? 100 : 200);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const ticker = setTimeout(() => {
      handleTyping();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  return (
    <div className="bg-black h-auto text-white">
      <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
        <div className="flex flex-col items-center max-w-2xl md:px-8">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div className="flex flex-col justify-center items-center">
              
              {}
              <p className="text-5xl font-semibold min-h-[3.5rem]">
                <span>{text}</span>
                <span className="border-r-2 border-white ml-1 animate-pulse"></span>
              </p>

              <p className="text-xl pt-2">Diferente do que você imaginava.</p>

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
