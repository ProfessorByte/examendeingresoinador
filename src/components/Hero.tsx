import Image from "next/image";

export const Hero = () => {
  return (
    <header className="p-9 flex flex-col justify-center items-center">
      <Image
        src="/logo.webp"
        alt="Logo con el título Examen de Ingreso-inador"
        className="rounded-3xl animate-fadeDown"
        width={384}
        height={284}
        priority={true}
      />
      <h1 className="sr-only">
        Examen de Ingreso-inador: Encuentra exámenes pasados para ingresar a la
        Facultad de Tecnología de la UMSS
      </h1>
    </header>
  );
};
