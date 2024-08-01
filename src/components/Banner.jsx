import { useEffect } from "react";
import LogoImg from "/logo.webp";

export const Banner = () => {
  useEffect(() => {
    const linkPreload = document.createElement("link");
    linkPreload.rel = "preload";
    linkPreload.as = "image";
    linkPreload.href = LogoImg;
    linkPreload.type = "image/webp";
    document.head.appendChild(linkPreload);

    return () => {
      document.head.removeChild(linkPreload);
    };
  }, []);

  return (
    <header className="p-9 flex justify-center items-center">
      <img
        src={LogoImg}
        alt="Logo con el título Examen de Ingreso-inador"
        className="w-96 rounded-3xl"
        // eslint-disable-next-line react/no-unknown-property
        fetchpriority="high"
      />
    </header>
  );
};
