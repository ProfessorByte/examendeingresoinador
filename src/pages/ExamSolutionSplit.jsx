import { useState } from "react";
import Split from "react-split-grid";
import { PdfPage } from "../components/PdfPage";
import { Gutter } from "../components/Gutter";
import { useEffect } from "react";
import { Worker } from "@react-pdf-viewer/core";

export const ExamSolutionSplit = () => {
  const [gridTemplate, setGridTemplate] = useState("1fr 18px 1fr");
  const [directionSplit, setDirectionSplit] = useState(
    window.innerWidth < 768 ? "row" : "column"
  );

  useEffect(() => {
    const handleResize = () => {
      setDirectionSplit(window.innerWidth < 768 ? "row" : "column");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const setSplitProps = (direction) => {
    if (direction === "row") {
      return {
        gridTemplateColumns: "1fr",
        columnMinSize: undefined,
        gridTemplateRows: gridTemplate,
        cursor: "row-resize",
        rowMinSize: 102,
      };
    }
    return {
      gridTemplateRows: "1fr",
      rowMinSize: undefined,
      gridTemplateColumns: gridTemplate,
      cursor: "col-resize",
      columnMinSize: 102,
    };
  };

  const handleDrag = (direction, track, style) => {
    setGridTemplate(style);
  };

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Split
        {...setSplitProps(directionSplit)}
        onDrag={handleDrag}
        render={({ getGridProps, getGutterProps }) => (
          <div className="grid h-screen" {...getGridProps()}>
            <PdfPage />
            <Gutter
              direction={directionSplit}
              getGutterProps={getGutterProps}
              track={1}
            />
            <PdfPage />
          </div>
        )}
      />
    </Worker>
  );
};
