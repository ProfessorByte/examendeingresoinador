import { bangers } from "@/utils/fonts";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface ErrorCountdownProps {
  seconds: number;
}

export const ErrorCountdown = ({ seconds }: ErrorCountdownProps) => {
  const [count, setCount] = useState(seconds);
  const router = useRouter();

  useEffect(() => {
    if (count > 0) {
      const timerId = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      router.replace("/");
    }
  }, [count, router]);

  return (
    <article className="m-6 max-w-96 flex flex-col">
      <h3 className="text-3xl font-bold">Oops!</h3>
      <span className="text-2xl font-semibold">Hubo un error :(</span>
      <span className="text-xl">
        El <span className={bangers.className}>Examen de Ingreso-inador</span>{" "}
        se reiniciará en {count} segundos...
      </span>
    </article>
  );
};
