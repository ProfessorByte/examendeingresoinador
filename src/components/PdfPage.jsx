import { useState, useEffect } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { useNavigate } from "react-router-dom";
import { FuturisticLoaderIcon } from "../assets/Icons";
import { remote2Base64 } from "../services/externalData";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

export const PdfPage = () => {
  const [pdfBase64, setPdfBase64] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getPdfBase64 = async () => {
      try {
        const examPdfBase64 = await remote2Base64(
          "http://sagaa.fcyt.umss.edu.bo/adm_academica/archivos/examenes/2012-1-558/1/6-1.pdf"
        );
        setPdfBase64(examPdfBase64);
      } catch (error) {
        navigate("/404", { replace: true });
      }
    };

    getPdfBase64();
  }, [navigate]);

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
      <div className="flex justify-center items-center min-h-[42vh]">
        {pdfBase64 ? (
          <Viewer
            fileUrl={pdfBase64}
            theme="dark"
            plugins={[zoomPluginInstance, getFilePluginInstance]}
          />
        ) : (
          <FuturisticLoaderIcon width={100} height={100} fill="#f3f4f6" />
        )}
      </div>
    </div>
  );
};
