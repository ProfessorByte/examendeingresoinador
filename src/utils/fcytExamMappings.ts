import {
  ArithmeticAlgebraIcon,
  BiologyIcon,
  ChemistryIcon,
  GastronomyIcon,
  GeometryTrigonometryIcon,
  LearningStrategiesIcon,
  PhysicsIcon,
  ScienceTechnologyIcon,
} from "@/assets/FcytExamsIcons";

import type { ExamMode, Pathway } from "@/types/exam.types";
import type { PathwayIconFC } from "@/types/icons.types";

type ExamCategory = "entrance" | "preuniversity";

const EXAM_CATEGORY_LABELS: Record<ExamCategory, string> = {
  entrance: "Examen de Ingreso",
  preuniversity: "Examen Preuniversitario",
} as const;

const EXAM_MODE_LABELS: Record<ExamMode, string> = {
  1: "Primer Parcial",
  2: "Segundo Parcial",
  3: "Examen Final",
} as const;

const PATHWAY_LABELS: Record<Pathway, string> = {
  1: "Aritmética & Álgebra",
  2: "Geometría & Trigonometría",
  3: "Química",
  4: "Física",
  5: "Biología",
  6: "Ciencias & Tecnología",
  7: "Estrategias de Aprendizaje",
  8: "Gastronomía",
  9: "Ciencias & Tecnología",
  10: "Ciencias & Tecnología",
} as const;

export const PATHWAY_ICON_COMPONENTS: Record<Pathway, PathwayIconFC> = {
  1: ArithmeticAlgebraIcon,
  2: GeometryTrigonometryIcon,
  3: ChemistryIcon,
  4: PhysicsIcon,
  5: BiologyIcon,
  6: ScienceTechnologyIcon,
  7: LearningStrategiesIcon,
  8: GastronomyIcon,
  9: ScienceTechnologyIcon,
  10: ScienceTechnologyIcon,
} as const;

const ENTRANCE_EXAM_PATHWAYS: readonly Pathway[] = [6, 8, 9, 10] as const;

export const getExamCategory = (pathway: Pathway): ExamCategory => {
  return ENTRANCE_EXAM_PATHWAYS.includes(pathway)
    ? "entrance"
    : "preuniversity";
};

export const getExamCategoryLabel = (pathway: Pathway): string => {
  const category = getExamCategory(pathway);
  return EXAM_CATEGORY_LABELS[category];
};

export const getExamModeLabel = (mode: ExamMode): string => {
  return EXAM_MODE_LABELS[mode];
};

export const getPathwayLabel = (pathway: Pathway): string => {
  return PATHWAY_LABELS[pathway];
};

export const getPathwayIconComponent = (pathway: Pathway): PathwayIconFC => {
  return PATHWAY_ICON_COMPONENTS[pathway];
};

export const shouldShowModeInfo = (pathway: Pathway): boolean => {
  return getExamCategory(pathway) === "preuniversity";
};

export const formatSemesterLabel = (semester: 1 | 2, year: number): string => {
  return `Gestión ${semester}/${year}`;
};
