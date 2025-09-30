declare module "react-split-grid" {
  import type { ReactNode } from "react";

  interface SplitRenderProps {
    getGridProps: () => Record<string, unknown>;
    getGutterProps: (
      direction: "row" | "column",
      track: number
    ) => Record<string, unknown>;
  }

  interface SplitProps {
    gridTemplateColumns?: string;
    gridTemplateRows?: string;

    minSize?: number;
    maxSize?: number;
    columnMinSize?: number;
    rowMinSize?: number;
    columnMaxSize?: number;
    rowMaxSize?: number;
    columnMinSizes?: { [track: number]: number };
    rowMinSizes?: { [track: number]: number };
    columnMaxSizes?: { [track: number]: number };
    rowMaxSizes?: { [track: number]: number };

    snapOffset?: number;
    columnSnapOffset?: number;
    rowSnapOffset?: number;
    dragInterval?: number;
    columnDragInterval?: number;
    rowDragInterval?: number;

    cursor?: string;
    columnCursor?: string;
    rowCursor?: string;

    onDrag?: (
      direction: "row" | "column",
      track: number,
      gridTemplateStyle: string
    ) => void;
    onDragStart?: (direction: "row" | "column", track: number) => void;
    onDragEnd?: (direction: "row" | "column", track: number) => void;

    render?: (props: SplitRenderProps) => ReactNode;
    children?: (props: SplitRenderProps) => ReactNode;
    component?: React.ComponentType<SplitRenderProps>;
  }

  declare class Split extends React.Component<SplitProps> {}

  export default Split;
}
