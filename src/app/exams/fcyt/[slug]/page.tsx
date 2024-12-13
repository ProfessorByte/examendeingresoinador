"use client";

import { Gutter } from "@/components/Gutter";
import { PdfPage } from "@/components/PdfPage";
import { Direction } from "@/utils/interfaces";
import { Worker } from "@react-pdf-viewer/core";
import { useParams } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";
import Split from "react-split-grid";

export default function ExamsPage() {
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
    direction: Direction,
    track: number,
    style: SetStateAction<string>
  ) => {
    setGridTemplate(style);
  };

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Split
        {...setSplitProps(directionSplit)}
        onDrag={handleDrag}
        // @ts-expect-error: Split component does not have TypeScript definitions for render prop
        render={({ getGridProps, getGutterProps }) => (
          <div className="grid h-dvh" {...getGridProps()}>
            <PdfPage pdfContentLabel="exam" slug={slug} />
            <Gutter
              direction={directionSplit}
              getGutterProps={getGutterProps}
              track={1}
            />
            <PdfPage pdfContentLabel="solution" slug={slug} />
          </div>
        )}
      />
    </Worker>
  );
}
