import type { JSX, SVGProps } from "react";

export interface IconProps
  extends JSX.IntrinsicAttributes,
    SVGProps<SVGSVGElement> {}

export type PathwayIconFC = (props: IconProps) => JSX.Element;
