import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export const PdfPage = () => {
  return (
    <div className="overflow-auto">
      <Viewer fileUrl="/test.pdf" />
    </div>
  );
};
