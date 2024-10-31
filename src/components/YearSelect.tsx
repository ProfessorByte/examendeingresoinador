"use client";

import Select, { SingleValue, GroupBase, StylesConfig } from "react-select";
import {
  useSearchParams,
  usePathname,
  useRouter,
  ReadonlyURLSearchParams,
} from "next/navigation";
import { useState } from "react";

interface OptionType {
  value: number;
  label: number;
}

interface YearSelectProps {
  yearsOptions: OptionType[];
}

const darkStyles: StylesConfig<
  {
    value: number;
    label: number;
  },
  false,
  GroupBase<{
    value: number;
    label: number;
  }>
> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#0f172a",
    color: "#f3f4f6",
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "#343541",
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isSelected ? "#111111" : isFocused ? "#202123" : "#343541",
    color: "#f3f4f6",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "#f3f4f6",
  }),
  // multiValue: (styles) => ({
  //   ...styles,
  //   backgroundColor: "#202123",
  // }),
  // multiValueLabel: (styles) => ({
  //   ...styles,
  //   color: "#f3f4f6",
  // }),
  // multiValueRemove: (styles) => ({
  //   ...styles,
  //   color: "#f3f4f6",
  //   ":hover": {
  //     backgroundColor: "#343541",
  //     color: "#f3f4f6",
  //   },
  // }),
};

const isValidYear = (year: number, yearsOptions: OptionType[]) =>
  yearsOptions.some((option) => option.value === year);

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

const updateYearInURL = (
  year: OptionType,
  pathname: string,
  searchParams: ReadonlyURLSearchParams,
  replace: (href: string) => void
) => {
  const params = new URLSearchParams(searchParams);
  params.set("year", year.value.toString());
  replace(`${pathname}?${params.toString()}`);
};

export const YearSelect = ({ yearsOptions }: YearSelectProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [selectedYear, setSelectedYear] = useState(
    getYearFromURL(yearsOptions, searchParams)
  );

  const handleYearChange = (selectedOption: SingleValue<OptionType>) => {
    if (selectedOption) {
      setSelectedYear(selectedOption);
      updateYearInURL(selectedOption, pathname, searchParams, replace);
    }
  };

  return (
    <section className="flex justify-center items-center mx-auto md:max-w-[60%]">
      <label htmlFor="yearSelect" className="sr-only">
        Filtrar por año:
      </label>
      <Select
        instanceId="yearSelectInstanceId"
        inputId="yearSelect"
        styles={darkStyles}
        options={yearsOptions}
        isSearchable={false}
        className="w-1/2"
        placeholder="Año"
        value={selectedYear}
        onChange={handleYearChange}
      />
    </section>
  );
};
