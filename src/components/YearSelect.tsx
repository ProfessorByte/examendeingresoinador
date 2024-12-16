"use client";

import { useEffect, useRef, useState } from "react";
import { useYear } from "@/hooks/useYear";
import { darkStyles } from "@/utils/yearSelectStyles";

import Select from "react-select";

import type { SingleValue } from "react-select";
import type { OptionType } from "@/utils/interfaces";

interface YearSelectProps {
  yearsOptions: OptionType[];
  selectedYear: OptionType;
}

export const YearSelect = ({ yearsOptions, selectedYear }: YearSelectProps) => {
  const selectSectionRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  const { updateYearInURL } = useYear(yearsOptions);

  useEffect(() => {
    const handleScroll = () => {
      const selectSectionElement = selectSectionRef.current;
      if (selectSectionElement) {
        const rect = selectSectionElement.getBoundingClientRect();
        const isAtTop = rect.top <= 0;
        setIsSticky(isAtTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleYearChange = (selectedOption: SingleValue<OptionType>) => {
    if (selectedOption) {
      updateYearInURL(selectedOption.value);
      // selectSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={`sticky top-0 flex justify-center items-center mx-auto z-10 py-3 transition-colors duration-300 ease-in-out ${
        isSticky ? "backdrop-blur-sm bg-brand-black/75" : "bg-transparent"
      }`}
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
        className="w-10/12 max-w-[369px]"
        placeholder="Año"
        defaultValue={selectedYear}
        onChange={handleYearChange}
      />
    </section>
  );
};
