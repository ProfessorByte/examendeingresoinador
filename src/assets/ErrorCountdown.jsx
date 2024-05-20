import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export const ErrorCountdown = ({ seconds }) => {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    if (count > 0) {
      const timerId = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [count]);

  return (
    <div>
      {count > 0 ? (
        <article className="m-6 max-w-96 flex flex-col">
          <h3 className="text-3xl font-bold">Oops!</h3>
          <span className="text-2xl font-semibold">Hubo un error :(</span>
          <span className="text-xl">
            El <span className="font-bangers">Examen de Ingreso-inador</span> se
            reiniciará en {count} segundos...
          </span>
        </article>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

ErrorCountdown.propTypes = {
  seconds: PropTypes.number.isRequired,
};
