import { Gutter } from "@/components/Gutter";
import { PdfView } from "@/components/PdfView";
import { Worker } from "@react-pdf-viewer/core";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Split from "react-split-grid";

import type { Direction } from "@/types/split.types";

export default function ExamSolutionSplit() {
  const [gridTemplate, setGridTemplate] = useState<string>("1fr 18px 1fr");
  const [directionSplit, setDirectionSplit] = useState<Direction>(
    window.innerWidth < 768 ? "row" : "column",
  );

  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const handleResize = () => {
      setDirectionSplit(window.innerWidth < 768 ? "row" : "column");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const setSplitProps = (direction: Direction) => {
    if (direction === "row") {
      return {
        gridTemplateColumns: "1fr",
        columnMinSize: undefined,
        gridTemplateRows: gridTemplate,
        cursor: "row-resize",
        rowMinSize: 36,
      };
    }
    return {
      gridTemplateRows: "1fr",
      rowMinSize: undefined,
      gridTemplateColumns: gridTemplate,
      cursor: "col-resize",
      columnMinSize: 36,
    };
  };

  const handleDrag = (
    _direction: Direction,
    _track: number,
    gridTemplateStyle: string,
  ) => {
    setGridTemplate(gridTemplateStyle);
  };

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Split {...setSplitProps(directionSplit)} onDrag={handleDrag}>
        {({ getGridProps, getGutterProps }) => (
          <div className="grid h-dvh" {...getGridProps()}>
            <PdfView pdfContentLabel="exam" slug={slug} />
            <Gutter
              direction={directionSplit}
              getGutterProps={getGutterProps}
              track={1}
            />
            <PdfView pdfContentLabel="solution" slug={slug} />
          </div>
        )}
      </Split>
    </Worker>
  );
}
