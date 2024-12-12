import { ExamSolutionSplit } from "@/components/ExamSolutionSplit";
import { getPdfBlob } from "@/utils/services";

const examsUrlTemplate =
  "https://raw.githubusercontent.com/ProfessorByte/science-exams-crawler/refs/heads/main/downloads/{SLUG}/{CONTENT_LABEL}_{SLUG}.pdf";

interface ExamsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ExamsPage({ params }: ExamsPageProps) {
  const { slug } = await params;

  const [examPdfBlob, solutionPdfBlob] = await Promise.all([
    getPdfBlob(
      examsUrlTemplate
        .replace(/{SLUG}/g, slug)
        .replace("{CONTENT_LABEL}", "Preguntas")
    ),
    getPdfBlob(
      examsUrlTemplate
        .replace(/{SLUG}/g, slug)
        .replace("{CONTENT_LABEL}", "Respuestas")
    ),
  ]);

  return (
    <ExamSolutionSplit
      examPdfBlob={examPdfBlob}
      solutionPdfBlob={solutionPdfBlob}
    />
  );
}
