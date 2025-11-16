import { useState } from "react";
import { type Plugin, Viewer } from "@react-pdf-viewer/core";
import { Loader } from "@/assets/Loader";
import { ErrorCountdown } from "@/assets/ErrorCountdown";
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

  const handleDocumentLoad = () => {
    setShowCover(true);
    setTimeout(() => {
      setShowCover(false);
    }, 3000);
  };

  return (
    <div className="h-[calc(100%-2.25rem)] relative">
      <InitTitleCover pdfContentLabel={pdfContentLabel} showCover={showCover} />
      <Viewer
        fileUrl={pdfUrl}
        theme="dark"
        plugins={[zoomPluginInstance, getFilePluginInstance]}
        renderLoader={(percentages) => (
          <Loader percentages={percentages} size={100} fill="#f3f4f6" />
        )}
        renderError={() => <ErrorCountdown seconds={3} />}
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
