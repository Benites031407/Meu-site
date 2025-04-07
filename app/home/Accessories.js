'use client'
import React from "react";

const Accessories = () => {
  return (
    <div className="container mx-auto md:my-24 h-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
      <div class="relative">
          <img
            src="assets/softskills.png"
            class="absolute top-12 left-0 right-0 mx-auto object-contain h-full w-full"
            alt=""
          />
          <div class="relative min-h-[540px]">
            <div class="flex flex-col items-center justify-between pt-10">
              <div className=" flex flex-col justify-center items-center ">
              <p className="text-3xl font-semibold">Soft Skills</p>
                <p className="text-xl pt-2 text-center">
                Confiante. Criativo. Adaptável.<br />
                </p>
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
        <div class="bg-black relative text-white ">
          <img
            src="assets/hardskills.png"
            class="absolute top-12 left-0 right-0 mx-auto object-contain h-full w-full"
            alt=""
          />
          <div class="relative min-h-[540px]">
            <div class="flex flex-col items-center justify-between pt-10">
              <div className=" flex flex-col justify-center items-center text-white">
                <p className="text-3xl font-semibold">Hard Skills</p>
                <p className="text-xl pt-2">
                Idiomas. Programação. Eletrônica.
                </p>

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

export default Accessories;
