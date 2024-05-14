import { Viewer } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

export const PdfPage = () => {
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  const getFilePluginInstance = getFilePlugin();
  const { DownloadButton } = getFilePluginInstance;

  return (
    <div className="overflow-auto">
      <div className="sticky top-0 z-10 bg-brand-white flex justify-center items-center">
        <div className="ml-9 flex justify-center items-center">
          <ZoomOutButton />
          <ZoomPopover />
          <ZoomInButton />
        </div>
        <DownloadButton />
      </div>
      <div>
        <Viewer
          fileUrl="/test.pdf"
          theme="dark"
          plugins={[zoomPluginInstance, getFilePluginInstance]}
        />
      </div>
    </div>
  );
};
