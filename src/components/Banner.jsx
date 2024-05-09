import BannerImg from "/exam.jpg";

export const Banner = () => {
  return (
    <section className="relative font-bold h-[calc(100vh-150px)] w-screen min-h-[600px] bg-brand-darkblue flex items-center justify-center">
      <img
        src={BannerImg}
        alt="Examen de ingreso"
        className="opacity-50 w-full h-full object-cover absolute top-0 left-0 z-0 filter blur-[10px] brightness-50 contrast-150 grayscale-100 invert-0 saturate-100 sepia-0"
      />
      <div className="w-full h-full p-3 flex flex-col gap-6 items-center justify-center text-center md:text-xl max-w-[600px] z-10">
        <p>
          Admira la creación más malévola y siniestra que el mundo haya
          conocido...
        </p>
        <h1 className="text-3xl md:text-5xl font-bangers tracking-wider">
          EL EXAMEN DE INGRESO-INADOR
        </h1>
        <p>
          Esta web está destinada a crear un ejército de científicos e
          ingenieros que me ayudarán a dominar el mundo JAJAJA
        </p>
      </div>
    </section>
  );
};
