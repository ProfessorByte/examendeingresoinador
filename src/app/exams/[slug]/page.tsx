import { getExamsData } from "@/utils/services";
import { permanentRedirect } from "next/navigation";

export async function generateStaticParams() {
  const examsData = await getExamsData();
  return examsData.map((exam) => ({ slug: exam.slug }));
}

export const dynamicParams = false;

interface ExamsRedirectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ExamsRedirectPage({
  params,
}: ExamsRedirectPageProps) {
  permanentRedirect(`/exams/fcyt/${(await params).slug}`);
}
