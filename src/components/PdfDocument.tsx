import { useCallback, useMemo, useState } from "react";
import { Loader } from "@/assets/Loader";
import { ErrorCountdown } from "@/assets/ErrorCountdown";
import { Viewer } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { getFilePlugin } from "@react-pdf-viewer/get-file";

import styles from "@/components/PdfDocument.module.css";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

const examsUrlTemplate = `https://raw.githubusercontent.com/ProfessorByte/science-exams-crawler/refs/heads/main/downloads/{SLUG}/{CONTENT_LABEL}_{SLUG}.pdf`;

interface PdfDocumentProps {
  pdfContentLabel: "exam" | "solution";
  slug: string;
}

export const PdfDocument = ({ pdfContentLabel, slug }: PdfDocumentProps) => {
  "use no memo";

  const [showCover, setShowCover] = useState(false);

  const pdfUrl = useMemo(
    () =>
      examsUrlTemplate
        .replace(/{SLUG}/g, slug)
        .replace(
          "{CONTENT_LABEL}",
          pdfContentLabel === "exam" ? "Preguntas" : "Respuestas",
        ),
    [slug, pdfContentLabel],
  );

  const handleDocumentLoad = useCallback(() => {
    setShowCover(true);
    setTimeout(() => {
      setShowCover(false);
    }, 3000);
  }, []);

  const fileNameGenerator = useCallback(
    () =>
      pdfContentLabel === "exam" ? `Preguntas_${slug}` : `Respuestas_${slug}`,
    [pdfContentLabel, slug],
  );

  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  const getFilePluginInstance = getFilePlugin({ fileNameGenerator });
  const { DownloadButton } = getFilePluginInstance;

  return (
    <div className="overflow-x-hidden">
      <div className="sticky z-10 bg-brand-white flex justify-center items-center h-9">
        <div className="flex-1" />
        <div
          className={`flex grow-0 justify-center items-center ${styles.btnToolbarContainer}`}
        >
          <ZoomOutButton />
          <ZoomPopover />
          <ZoomInButton />
        </div>
        <div
          className={`flex-1 flex justify-start ${styles.btnToolbarContainer}`}
        >
          <DownloadButton />
        </div>
      </div>
      <div className="h-[calc(100%-2.25rem)] relative">
        {showCover && (
          <div className="absolute inset-0 my-auto h-9 bg-brand-darkgray bg-opacity-75 flex items-center justify-center text-brand-white text-3xl font-bold z-20 animate-slide-from-right">
            {pdfContentLabel === "exam" ? "Preguntas" : "Respuestas"}
          </div>
        )}
        <Viewer
          fileUrl={pdfUrl}
          theme="dark"
          plugins={[zoomPluginInstance, getFilePluginInstance]}
          renderLoader={(percentages) => (
            <Loader percentages={percentages} size={100} fill="#f3f4f6" />
          )}
          renderError={() => <ErrorCountdown seconds={3} />}
          onDocumentLoad={handleDocumentLoad}
        />
      </div>
    </div>
  );
};
