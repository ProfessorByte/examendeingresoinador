"use client";

import { useState } from "react";
import { YearSelect } from "./YearSelect";
import { CardsContainer } from "./CardsContainer";
import { Exam, OptionType } from "@/utils/interfaces";
import { isValidYear } from "@/utils/functions";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

interface MainContentProps {
  yearsOptions: OptionType[];
  examsData: Exam[];
}

const getYearFromURL = (
  yearsOptions: OptionType[],
  searchParams: ReadonlyURLSearchParams
) => {
  const year = Number(searchParams.get("year"));
  if (isValidYear(year, yearsOptions)) {
    return { value: year, label: year };
  }
  return yearsOptions[0];
};

export const MainContent = ({ yearsOptions, examsData }: MainContentProps) => {
  const searchParams = useSearchParams();
  const [selectedYear, setSelectedYear] = useState(
    getYearFromURL(yearsOptions, searchParams)
  );

  return (
    <main>
      <YearSelect
        yearsOptions={yearsOptions}
        searchParams={searchParams}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <CardsContainer examsData={examsData} selectedYear={selectedYear} />
    </main>
  );
};
