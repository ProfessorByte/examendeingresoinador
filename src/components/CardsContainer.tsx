import { Exam, OptionType } from "@/utils/interfaces";
import { ExamCard } from "./ExamCard";

interface CardsContainerProps {
  examsData: Exam[];
  selectedYear: OptionType;
}

export const CardsContainer = ({
  examsData,
  selectedYear,
}: CardsContainerProps) => {
  const filteredExams = examsData.filter(
    (exam) => exam.year === selectedYear.value
  );

  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4 mx-auto md:max-w-[84%] my-9 p-6">
      {filteredExams.map((exam, index) => {
        const { year, semester, idResource, formVersion } = exam;
        const slug = `${year}-${semester}-${idResource}-${formVersion}`;
        return <ExamCard key={slug} slug={slug} index={index} {...exam} />;
      })}
    </section>
  );
};