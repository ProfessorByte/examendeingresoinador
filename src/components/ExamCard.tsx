import Link from "next/link";

import type { Exam } from "@/types/exam.types";
import {
  getExamCategory,
  getExamCategoryLabel,
  getExamModeLabel,
  getPathwayLabel,
  getPathwayIconComponent,
  formatSemesterLabel,
  shouldShowModeInfo,
} from "@/utils/examMappings";

interface ExamCardProps extends Exam {
  index: number;
}

export const ExamCard = ({
  index,
  idResource,
  formVersion,
  semester,
  year,
  slug,
  mode,
  pathway,
}: ExamCardProps) => {
  const category = getExamCategory(pathway);
  const categoryLabel = getExamCategoryLabel(pathway);
  const pathwayLabel = getPathwayLabel(pathway);
  const PathwayIcon = getPathwayIconComponent(pathway);
  const showModeInfo = shouldShowModeInfo(pathway);
  const modeLabel = getExamModeLabel(mode);
  const semesterLabel = formatSemesterLabel(semester, year);

  const isEntranceExam = category === "entrance";

  return (
    <Link
      className="group flex flex-col relative p-3 pt-6 bg-brand-gray rounded-xl border border-solid border-brand-darkwhite shadow-lg shadow-black/30 z-0 overflow-hidden transition-all duration-300 hover:border-brand-darkgreen hover:shadow-brand-darkgreen/30 opacity-0 animate-fade-right"
      style={{ animationDelay: `${index * 36}ms` }}
      href={`/fcyt/exams/${slug}`}
    >
      <div className="absolute -top-1 -right-1 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-brand-darkgreen blur-md opacity-60 rounded-full" />
          <span className="relative flex items-center justify-center min-w-12 h-9 px-3 bg-linear-to-br from-brand-darkgreen to-teal-600 text-white font-bold text-lg rounded-bl-xl rounded-tr-xl shadow-md">
            #{idResource}
          </span>
        </div>
      </div>

      <div className="mb-3">
        <span
          className={`inline-flex items-center gap-1.5 px-1.5 py-1 text-xs font-semibold rounded-full ${
            isEntranceExam
              ? "bg-brand-darkgreen/30 text-teal-300 border border-brand-darkgreen/30"
              : "bg-amber-300/30 text-amber-300 border border-amber-300/30"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {categoryLabel}
        </span>
      </div>

      <div className="flex items-center gap-1.5 mb-1.5">
        <PathwayIcon
          className="size-6 text-teal-300 shrink-0"
          aria-hidden="true"
        />
        <h2 className="text-xl font-bold text-brand-white leading-tight">
          {pathwayLabel}
        </h2>
      </div>

      {showModeInfo && (
        <p className="text-sm font-medium text-teal-300 mb-1.5">{modeLabel}</p>
      )}

      <div className="w-fit inline-flex items-center gap-1 px-1.5 py-1 bg-brand-darkgray rounded-md text-sm text-brand-darkwhite mb-3">
        <span className="opacity-90">Variante</span>
        <span className="font-semibold text-brand-white">{formVersion}</span>
      </div>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-brand-darkwhite">
        <p className="text-sm text-brand-darkwhite">{semesterLabel}</p>
        <div className="flex items-center gap-1 text-teal-300 group-hover:translate-x-1 transition-transform duration-300">
          <span className="text-sm font-medium">Ver examen</span>
          <span className="text-lg">→</span>
        </div>
      </div>

      <div className="absolute -z-30 -bottom-30 -right-30 size-90 bg-brand-darkgreen/30 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-600" />
    </Link>
  );
};
