import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { PdfDocument } from "./PdfDocument";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

const examsUrlTemplate = `https://raw.githubusercontent.com/ProfessorByte/science-exams-crawler/refs/heads/main/downloads/{SLUG}/{CONTENT_LABEL}_{SLUG}.pdf`;

interface PdfViewProps {
  pdfContentLabel: "exam" | "solution";
  slug: string;
}

export const PdfView = ({ pdfContentLabel, slug }: PdfViewProps) => {
  const pdfUrl = examsUrlTemplate
    .replace(/{SLUG}/g, slug)
    .replace(
      "{CONTENT_LABEL}",
      pdfContentLabel === "exam" ? "Preguntas" : "Respuestas",
    );

  const fileNameGenerator = () =>
    pdfContentLabel === "exam" ? `Preguntas_${slug}` : `Respuestas_${slug}`;

  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  const getFilePluginInstance = getFilePlugin({ fileNameGenerator });
  const { DownloadButton } = getFilePluginInstance;

  return (
    <div className="overflow-x-hidden">
      <div className="sticky z-10 bg-brand-white flex justify-center items-center h-9">
        <div className="flex-1" />
        <div className="flex grow-0 justify-center items-center *:flex *:justify-center">
          <ZoomOutButton />
          <ZoomPopover />
          <ZoomInButton />
        </div>
        <div className="flex-1 flex justify-start *:flex *:justify-center">
          <DownloadButton />
        </div>
      </div>
      <PdfDocument
        pdfUrl={pdfUrl}
        pdfContentLabel={pdfContentLabel}
        zoomPluginInstance={zoomPluginInstance}
        getFilePluginInstance={getFilePluginInstance}
      />
    </div>
  );
};
