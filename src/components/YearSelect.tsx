import Select, { GroupBase, SingleValue, StylesConfig } from "react-select";
import { useRef } from "react";
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

  const handleYearChange = (selectedOption: SingleValue<OptionType>) => {
    if (selectedOption && selectSectionRef.current) {
      updateYearInURL(selectedOption.value);
      selectSectionRef.current.scrollIntoView({ behavior: "smooth" });
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
        defaultValue={selectedYear}
        onChange={handleYearChange}
      />
    </section>
  );
};
