export interface Exam {
  readonly slug: string;
  readonly examUrl: string;
  readonly solutionUrl: string;
  readonly year: number;
  readonly semester: 1 | 2;
  readonly formVersion: 1 | 2;
  readonly idResource: number;
}

export interface OptionType {
  readonly value: number;
  readonly label: number;
}

export type Direction = "row" | "column";
