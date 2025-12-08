import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { nunito } from "@/utils/fonts";

import "@/app/globals.css";

import type { Metadata, Viewport } from "next";

const pageData = {
  title: "Examen de Ingreso-inador",
  description:
    "Encuentra exámenes pasados para ingresar a la Facultad de Ciencias y Tecnología (FCyT) de la UMSS. ¡Prepárate para el examen de ingreso!",
  url: "https://examendeingresoinador.pages.dev",
  ogLogoUrl: "https://examendeingresoinador.pages.dev/logoOpenGraph.webp",
};

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  verification: {
    google: "ZE7wOzJUJXqowqy_3ufsabYa5hFEpWedyNTbD7rtnTU",
  },
  icons: "/favicon.ico",
  creator: "Pablo Pardo Alcocer (Pabloux Darkmind)",
  applicationName: "Examen de Ingreso-inador",
  openGraph: {
    title: pageData.title,
    description: pageData.description,
    siteName: "Examen de Ingreso-inador",
    type: "website",
    locale: "es_BO",
    url: pageData.url,
    images: [
      {
        url: pageData.ogLogoUrl,
        width: 1200,
        height: 630,
        alt: "Examen de Ingreso-inador - Powered by Pabloux Darkmind",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageData.title,
    description: pageData.description,
    images: [
      {
        url: pageData.ogLogoUrl,
        width: 1200,
        height: 630,
        alt: "Examen de Ingreso-inador - Powered by Pabloux Darkmind",
      },
    ],
    site: "@PablouxDarkmind",
    creator: "@PablouxDarkmind",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${nunito.className} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
