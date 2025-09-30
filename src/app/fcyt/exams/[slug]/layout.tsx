import { getFcytExamsData } from "@/utils/services";

interface FcytExamsLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const examsData = await getFcytExamsData();
  return examsData.map((exam) => ({ slug: exam.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [year, semester, idResource, formVersion] = (await params).slug.split(
    "-",
  );
  return {
    title: `Examen FCyT | Gestión ${semester}-${year} | Fila ${formVersion} | #${idResource}`,
    description: `Solución del examen de ingreso #${idResource} de la gestión ${semester}-${year} para la FCyT de la UMSS.`,
  };
}

export default async function FcytExamsLayout({
  children,
  params,
}: FcytExamsLayoutProps) {
  const { slug } = await params;
  const [year, semester, idResource] = slug.split("-");

  return (
    <>
      <h1 className="sr-only">{`Examen de ingreso de la gestión ${semester}-${year} | #${idResource} Examen de Ingreso-inador`}</h1>
      {children}
    </>
  );
}
