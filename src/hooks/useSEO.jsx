import { useEffect, useRef } from "react";

export const useSEO = ({ dataId }) => {
  const prevTitle = useRef(document.title);
  const prevMetaDesc = useRef(
    document.querySelector('meta[name="description"]')
  );

  useEffect(() => {
    const previousTitle = prevTitle.current;
    const previousMetaDesc = prevMetaDesc.current;
    const previousMetaDescContent = previousMetaDesc.getAttribute("content");

    const [year, semester, idResource] = dataId.split("-");
    document.title = `${semester}-${year} | Examen de Ingreso-inador #${idResource}`;
    previousMetaDesc.setAttribute(
      "content",
      `Solución del examen de ingreso #${idResource} de la gestión ${semester}-${year} para la FCyT de la UMSS.`
    );

    return () => {
      document.title = previousTitle;
      previousMetaDesc.setAttribute("content", previousMetaDescContent);
    };
  }, [dataId]);
};
