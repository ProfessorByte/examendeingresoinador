import { useEffect, useRef } from "react";

export const useTitle = ({ dataId }) => {
  const prevTitle = useRef(document.title);

  useEffect(() => {
    const previousTitle = prevTitle.current;

    const [year, semester, idResource] = dataId.split("-");
    document.title = `${semester}-${year} | Examen de Ingreso-inador #${idResource}`;

    return () => {
      document.title = previousTitle;
    };
  }, [dataId]);
};
