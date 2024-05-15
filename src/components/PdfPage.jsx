import { Viewer } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

export const urlExamTemplate =
  "http://sagaa.fcyt.umss.edu.bo/adm_academica/archivos/examenes/{YEAR}-{SEMESTER}-{ID}/1/6-{FORM_VERSION}.pdf";
export const urlSolutionTemplate =
  "http://sagaa.fcyt.umss.edu.bo/adm_academica/archivos/solucionario/{YEAR}-{SEMESTER}-{ID}/1/6-{FORM_VERSION}/0.pdf";

export const PdfPage = ({ pdfContentLabel }) => {
  const { dataId } = useParams();

  const getUrl = (urlTemplate) => {
    const [year, semester, idResource, formVersion] = dataId.split("-");
    const examUrl = urlTemplate
      .replace("{YEAR}", year)
      .replace("{SEMESTER}", semester)
      .replace("{ID}", idResource)
      .replace("{FORM_VERSION}", formVersion);

    return `https://corsproxy.io/?${encodeURIComponent(examUrl)}`;
  };

  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  const getFilePluginInstance = getFilePlugin();
  const { DownloadButton } = getFilePluginInstance;

  return (
    <div className="overflow-auto">
      <div className="sticky bg-brand-white flex justify-center items-center overflow-auto h-9">
        <div className="ml-9 flex justify-center items-center">
          <ZoomOutButton />
          <ZoomPopover />
          <ZoomInButton />
        </div>
        <DownloadButton />
      </div>
      <div className="h-[calc(100%-2.25rem)]">
        <Viewer
          fileUrl={getUrl(
            pdfContentLabel === "exam" ? urlExamTemplate : urlSolutionTemplate
          )}
          theme="dark"
          plugins={[zoomPluginInstance, getFilePluginInstance]}
        />
      </div>
    </div>
  );
};

PdfPage.propTypes = {
  pdfContentLabel: PropTypes.oneOf(["exam", "solution"]).isRequired,
};
