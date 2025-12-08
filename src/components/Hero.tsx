import Image from "next/image";

import fcytImg from "@/../public/fcyt-img.webp";

export const Hero = () => {
  return (
    <header className="p-9 flex flex-col justify-center items-center">
      <Image
        src={fcytImg}
        alt="Examen de Ingreso-inador: Encuentra exámenes pasados para ingresar a la Facultad de Tecnología de la UMSS"
        className="animate-fade-down drop-shadow-[0_0_15px_black]"
        width={300}
        preload={true}
      />
      <h1 className="sr-only">
        Examen de Ingreso-inador: Encuentra exámenes pasados para ingresar a la
        Facultad de Tecnología de la UMSS
      </h1>
    </header>
  );
};
