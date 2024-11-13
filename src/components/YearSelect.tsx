import Select, { GroupBase, SingleValue, StylesConfig } from "react-select";
import { useEffect, useRef, useState } from "react";
import { OptionType } from "@/utils/interfaces";

interface YearSelectProps {
  yearsOptions: OptionType[];
  selectedYear: OptionType;
  updateYearInURL: (selectedOption: number) => void;
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

export const YearSelect = ({
  yearsOptions,
  selectedYear,
  updateYearInURL,
}: YearSelectProps) => {
  const selectSectionRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

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
    if (selectedOption && selectSectionRef.current) {
      updateYearInURL(selectedOption.value);
      selectSectionRef.current.scrollIntoView({ behavior: "smooth" });
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
