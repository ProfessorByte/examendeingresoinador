export type Semester = 1 | 2;
export type FormVersion = 1 | 2;
export type ExamMode = 1 | 2 | 3;
export type Pathway = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Exam {
  readonly slug: string;
  readonly examUrl: string;
  readonly solutionUrl: string;
  readonly year: number;
  readonly semester: Semester;
  readonly idResource: number;
  readonly mode: ExamMode;
  readonly pathway: Pathway;
  readonly formVersion: FormVersion;
  readonly examStatusCode: number;
  readonly solutionStatusCode: number;
}
