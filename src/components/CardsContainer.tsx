import { ExamCard } from "./ExamCard";

import type { Exam, OptionSelect } from "@/types/interfaces";

interface CardsContainerProps {
  examsData: Exam[];
  selectedYear: OptionSelect;
}

export const CardsContainer = ({
  examsData,
  selectedYear,
}: CardsContainerProps) => {
  const filteredExams = examsData.filter(
    (exam) => exam.year === selectedYear.value
  );

  return (
    <section
      className={`grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4 mx-auto max-w-[420px] ${
        filteredExams.length > 3 && "md:max-w-[min(84%,1260px)]"
      } mt-6 mb-9 p-6`}
    >
      {filteredExams.map((exam, index) => {
        const { slug } = exam;
        return <ExamCard key={slug} index={index} {...exam} />;
      })}
    </section>
  );
};
