export interface Exam {
  examUrl: string;
  solutionUrl: string;
  year: number;
  semester: 1 | 2;
  formVersion: 1 | 2;
  idResource: number;
}

export interface OptionType {
  value: number;
  label: number;
}
