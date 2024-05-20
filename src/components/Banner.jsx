import BannerImg from "/exam.webp";

export const Banner = () => {
  return (
    <header className="relative font-bold h-[60vh] min-h-[360px] bg-brand-darkblue flex items-center justify-center">
      <img
        src={BannerImg}
        alt="Examen de ingreso"
        className="opacity-45 w-full h-full object-cover absolute top-0 left-0 z-0 filter blur-[0.3rem] brightness-[.66] contrast-150 grayscale-100 invert-0 saturate-100 sepia-0"
        // eslint-disable-next-line react/no-unknown-property
        fetchpriority="high"
      />
      <div className="size-full p-6 flex flex-col gap-6 items-center justify-center text-center max-w-[768px] z-10">
        <p className="md:text-xl">El conocimiento es libre.</p>
        <h1 className="text-3xl md:text-5xl font-bangers tracking-wider">
          EXAMEN DE INGRESO-INADOR
        </h1>
        <p className="md:text-xl">
          Aprendamos de los errores de quienes estuvieron antes que nosotros,
          evolucionemos y dejemos mentes brillantes para que la ciencia siga
          avanzando.
        </p>
      </div>
    </header>
  );
};
