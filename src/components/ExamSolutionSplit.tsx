import { Gutter } from "@/components/Gutter";
import { PdfDocument } from "@/components/PdfDocument";
import { Worker } from "@react-pdf-viewer/core";
import { useParams } from "next/navigation";
import { SetStateAction, useCallback, useEffect, useState } from "react";
import Split from "react-split-grid";

import type { Direction } from "@/utils/interfaces";

export default function ExamSolutionSplit() {
  const [gridTemplate, setGridTemplate] = useState<string>("1fr 18px 1fr");
  const [directionSplit, setDirectionSplit] = useState<Direction>(
    window.innerWidth < 768 ? "row" : "column"
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

  const setSplitProps = useCallback(
    (direction: Direction) => {
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
    },
    [gridTemplate]
  );

  const handleDrag = useCallback(
    (direction: Direction, track: number, style: SetStateAction<string>) => {
      setGridTemplate(style);
    },
    []
  );

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Split
        {...setSplitProps(directionSplit)}
        onDrag={handleDrag}
        // @ts-expect-error: Split component does not have TypeScript definitions for render prop
        render={({ getGridProps, getGutterProps }) => (
          <div className="grid h-dvh" {...getGridProps()}>
            <PdfDocument pdfContentLabel="exam" slug={slug} />
            <Gutter
              direction={directionSplit}
              getGutterProps={getGutterProps}
              track={1}
            />
            <PdfDocument pdfContentLabel="solution" slug={slug} />
          </div>
        )}
      />
    </Worker>
  );
}
