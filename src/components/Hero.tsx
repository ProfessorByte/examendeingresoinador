import Image from "next/image";

export const Hero = () => {
  return (
    <header className="p-9 flex flex-col justify-center items-center">
      <Image
        src="/logo.webp"
        alt="Examen de Ingreso-inador: Encuentra exámenes pasados para ingresar a la Facultad de Tecnología de la UMSS"
        className="rounded-3xl animate-fadeDown"
        width={384}
        height={284}
        priority
      />
      <h1 className="sr-only">
        Examen de Ingreso-inador: Encuentra exámenes pasados para ingresar a la
        Facultad de Tecnología de la UMSS
      </h1>
    </header>
  );
};
