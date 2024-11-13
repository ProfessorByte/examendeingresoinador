"use client";

import { Exam, OptionType } from "@/utils/interfaces";
import { CardsContainer } from "./CardsContainer";
import { YearSelect } from "./YearSelect";
import { useYear } from "@/hooks/useYear";

interface HomeMainContentProps {
  examsData: Exam[];
  yearsOptions: OptionType[];
}

export const HomeMainContent = ({
  examsData,
  yearsOptions,
}: HomeMainContentProps) => {
  const { getYearFromURL, updateYearInURL } = useYear();
  const selectedYear = getYearFromURL(yearsOptions);

  return (
    <main>
      <YearSelect
        yearsOptions={yearsOptions}
        selectedYear={selectedYear}
        updateYearInURL={updateYearInURL}
      />
      <CardsContainer examsData={examsData} selectedYear={selectedYear} />
    </main>
  );
};
