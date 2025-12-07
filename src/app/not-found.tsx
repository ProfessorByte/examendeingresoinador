import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada - Examen de Ingreso-inador",
};

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none">
        <h1 className="text-[51vw] font-bold text-brand-darkgreen">404</h1>
      </div>

      <div className="flex flex-col items-center text-center space-y-8 px-4">
        <Image
          src="/pabloux.jpg"
          alt="Pabloux Darkmind"
          width={180}
          height={180}
          className="rounded-full border-4 border-brand-white shadow-[0_0_30px_rgba(20,184,166,0.5)]"
          priority
        />

        <div className="space-y-4 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-4 animate-pulse">
            Error 404
          </h2>
          <p className="text-brand-darkwhite text-lg">
            ¡Alto ahí, intruso! Esta página está más protegida que los secretos
            del Área 51, no intentes hackearla. Mejor regresa por donde viniste
            antes de que active mi Dark-Anti-Hacker-inador.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-brand-darkgreen mb-6 mt-0">
            ¡El único hacker aquí, soy yo!
          </p>
        </div>

        <Link
          href="/"
          replace
          className="bg-brand-darkgreen text-brand-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(20,184,166,0.3)]"
        >
          Salir de aquí
        </Link>
      </div>
    </div>
  );
}
