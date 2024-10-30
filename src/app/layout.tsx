import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { nunito } from "@/utils/fonts";

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
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta
          name="google-site-verification"
          content="ZE7wOzJUJXqowqy_3ufsabYa5hFEpWedyNTbD7rtnTU"
        />
      </head>
      <body
        className={`${nunito.className} antialiased min-h-screen grid grid-rows-[auto_1fr_auto]`}
      >
        {children}
      </body>
    </html>
  );
}
