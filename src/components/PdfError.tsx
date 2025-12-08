"use client";

import Image from "next/image";
import Link from "next/link";
import { bangers } from "@/utils/fonts";

import pabloux from "@/../public/pabloux.jpg";

export const PdfError = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden px-4 py-54">
      <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
        <Image
          src={pabloux}
          alt="Pabloux Darkmind"
          width={120}
          className="rounded-full border-4 border-brand-white"
          fetchPriority="high"
        />

        <div className="space-y-2 max-w-md md:min-w-xs">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-white animate-pulse">
            Damn!
          </h2>
          <p className="text-brand-darkwhite text-sm md:text-base">
            Parece que este documento aún no ha sido creado por{" "}
            <span className={bangers.className}>DarkBot</span>. Vuelve más tarde
            cuando haya terminado su trabajo.
          </p>
          <p className="text-lg md:text-xl font-bold text-brand-darkgreen">
            ¡La paciencia es una virtud, joven padawan!
          </p>
        </div>

        <Link
          href="/"
          replace
          className="bg-brand-darkgreen text-brand-white px-6 py-2 text-sm rounded-lg transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(20,184,166,0.3)]"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};
