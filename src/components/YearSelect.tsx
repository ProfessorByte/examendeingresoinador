"use client";

import Select, { SingleValue, GroupBase, StylesConfig } from "react-select";
import {
  usePathname,
  useRouter,
  ReadonlyURLSearchParams,
} from "next/navigation";
import { useRef } from "react";
import { OptionType } from "@/utils/interfaces";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface YearSelectProps {
  yearsOptions: OptionType[];
  searchParams: ReadonlyURLSearchParams;
  selectedYear: OptionType;
  setSelectedYear: (year: OptionType) => void;
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

const updateYearInURL = (
  year: OptionType,
  pathname: string,
  searchParams: ReadonlyURLSearchParams,
  replace: (href: string, options?: NavigateOptions) => void
) => {
  const params = new URLSearchParams(searchParams);
  params.set("year", year.value.toString());
  replace(`${pathname}?${params.toString()}`, { scroll: false });
};

export const YearSelect = ({
  yearsOptions,
  searchParams,
  selectedYear,
  setSelectedYear,
}: YearSelectProps) => {
  const pathname = usePathname();
  const { replace } = useRouter();

  const selectSectionRef = useRef<HTMLDivElement>(null);

  const handleYearChange = (selectedOption: SingleValue<OptionType>) => {
    if (selectedOption && selectSectionRef.current) {
      setSelectedYear(selectedOption);
      selectSectionRef.current.scrollIntoView({ behavior: "smooth" });
      updateYearInURL(selectedOption, pathname, searchParams, replace);
    }
  };

  return (
    <section
      className="flex justify-center items-center mx-auto md:max-w-[60%]"
      ref={selectSectionRef}
    >
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
