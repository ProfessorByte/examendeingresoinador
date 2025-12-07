"use client";

import dynamic from "next/dynamic";

const ExamSolutionSplit = dynamic(
  () => import("@/components/ExamSolutionSplit"),
  { ssr: false },
);

export default function FcytExamsPage() {
  return <ExamSolutionSplit />;
}
