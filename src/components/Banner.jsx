import BannerImg from "/logo.webp";

export const Banner = () => {
  return (
    <header className="p-9 flex justify-center items-center">
      <img
        src={BannerImg}
        alt="Examen de ingreso"
        className="w-96 rounded-3xl"
        // eslint-disable-next-line react/no-unknown-property
        fetchpriority="high"
      />
    </header>
  );
};
