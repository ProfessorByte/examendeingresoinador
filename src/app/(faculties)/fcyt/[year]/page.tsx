import { CardsContainer } from "@/components/CardsContainer";
import { YearSelect } from "@/components/YearSelect";
import { isValidYear } from "@/utils/validation";
import { getFcytExamsData } from "@/utils/services";
import { redirect } from "next/navigation";

import type { Exam } from "@/types/exam.types";
import type { OptionSelect } from "@/types/select.types";

const examsData: Exam[] = await getFcytExamsData();

const yearsOptions: OptionSelect[] = [
  ...new Set(examsData.map((exam) => exam.year)),
]
  .sort((a, b) => b - a)
  .map((year) => ({ value: year, label: year }));

export function generateStaticParams() {
  return [
    ...yearsOptions.map((yearOption) => ({
      year: yearOption.value.toString(),
    })),
    { year: "darkmind" },
  ];
}

export const dynamicParams = false;

interface FcytPageProps {
  params: Promise<{
    year: string;
  }>;
}

export default async function FcytPage({ params }: FcytPageProps) {
  const { year } = await params;
  const selectedYear = Number(year);

  if (!isValidYear(selectedYear, yearsOptions))
    redirect(`/fcyt/${yearsOptions[0].value}`);

  const selectedYearOption: OptionSelect = {
    value: selectedYear,
    label: selectedYear,
  };

  return (
    <main>
      <YearSelect
        yearsOptions={yearsOptions}
        selectedYear={selectedYearOption}
      />
      <CardsContainer examsData={examsData} selectedYear={selectedYearOption} />
    </main>
  );
}
