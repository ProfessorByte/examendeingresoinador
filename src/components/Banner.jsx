export const Banner = () => {
  return (
    <header className="p-9 flex flex-col justify-center items-center">
      <img
        src="/logo.webp"
        alt="Logo con el título Examen de Ingreso-inador"
        className="w-96 rounded-3xl animate-fadeDown"
      />
      <h1 className="hidden">Examen de Ingreso-inador</h1>
    </header>
  );
};
