import { useEffect, useState } from "react";
import { type Plugin, Viewer } from "@react-pdf-viewer/core";
import { Loader } from "@/assets/Loader";
import { PdfError } from "@/components/PdfError";
import { InitTitleCover } from "./InitTitleCover";

interface PdfDocumentProps {
  pdfUrl: string;
  pdfContentLabel: "exam" | "solution";
  zoomPluginInstance: Plugin;
  getFilePluginInstance: Plugin;
}

export const PdfDocument = ({
  pdfUrl,
  pdfContentLabel,
  zoomPluginInstance,
  getFilePluginInstance,
}: PdfDocumentProps) => {
  const [showCover, setShowCover] = useState(false);

  useEffect(() => {
    if (!showCover) return;

    const timer = setTimeout(() => {
      setShowCover(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showCover]);

  const handleDocumentLoad = () => {
    setShowCover(true);
  };

  return (
    <div className="h-[calc(100%-2.25rem)] relative **:data-[testid=core\_\_doc-loading]:bg-transparent!">
      <InitTitleCover pdfContentLabel={pdfContentLabel} showCover={showCover} />
      <Viewer
        fileUrl={pdfUrl}
        theme="dark"
        plugins={[zoomPluginInstance, getFilePluginInstance]}
        renderLoader={(percentages) => (
          <Loader percentages={percentages} size={100} fill="#f3f4f6" />
        )}
        renderError={() => <PdfError />}
        onDocumentLoad={handleDocumentLoad}
        pageLayout={{
          buildPageStyles: () => ({
            backgroundColor: "transparent",
          }),
        }}
      />
    </div>
  );
};
