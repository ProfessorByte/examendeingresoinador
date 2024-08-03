import { useState, useEffect, useRef, useContext } from "react";
import Select from "react-select";
import { ExamCard } from "./ExamCard";
import { FilterContext } from "../context/FilterContext";

import { dataUrls } from "../data/util";

const yearsOptions = dataUrls
  .map((dataUrl) => ({
    value: dataUrl.year,
    label: dataUrl.year,
  }))
  .filter(
    (element, index, self) =>
      self.findIndex((t) => t.value === element.value) === index
  )
  .sort((a, b) => b.value - a.value);

const darkStyles = {
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

export const Filter = () => {
  const { year, setYear } = useContext(FilterContext);

  const [yearHasChanged, setYearHasChanged] = useState(false);
  const [filteredDataUrls, setFilteredDataUrls] = useState(
    dataUrls.filter((dataUrl) => dataUrl.year === year)
  );

  const examsSectionRef = useRef();

  useEffect(() => {
    if (yearHasChanged && examsSectionRef.current) {
      examsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [filteredDataUrls, yearHasChanged]);

  const handleYearChange = (option) => {
    const { value: currentYear } = option;

    setFilteredDataUrls(
      dataUrls.filter((dataUrl) => dataUrl.year === currentYear)
    );
    setYear(currentYear);
    setYearHasChanged(true);
  };

  return (
    <>
      <section
        className="flex justify-center items-center gap-3 mx-auto md:max-w-[60%]"
        ref={examsSectionRef}
      >
        <Select
          styles={darkStyles}
          options={yearsOptions}
          isSearchable={false}
          className="w-1/2"
          placeholder="Año"
          defaultValue={{ value: year, label: year }}
          onChange={handleYearChange}
        />
      </section>

      <main className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4 mx-auto md:max-w-[84%] my-9 p-6">
        {filteredDataUrls.map((dataUrl) => (
          <ExamCard key={dataUrl.dataId} {...dataUrl} />
        ))}
      </main>
    </>
  );
};
