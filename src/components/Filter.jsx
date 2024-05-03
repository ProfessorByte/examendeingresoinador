import { useState, useEffect, useMemo } from "react";
import { db } from "../services/database";
import Select from "react-select";
import { collection, onSnapshot } from "firebase/firestore";

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
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: "#202123",
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: "#f3f4f6",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: "#f3f4f6",
    ":hover": {
      backgroundColor: "#343541",
      color: "#f3f4f6",
    },
  }),
};

const seasonsOptions = [
  { value: 1, label: "Principios de año" },
  { value: 2, label: "Mediados de año" },
];

export const Filter = () => {
  const [dataUrls, setDataUrls] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "dataUrls"), (snapshot) => {
      const dataUrls = snapshot.docs.map((doc) => doc.data());
      setDataUrls(dataUrls);
    });

    return () => unsubscribe();
  }, []);

  const yearsOptions = useMemo(
    () =>
      dataUrls
        .map((dataUrl) => ({
          value: dataUrl.year,
          label: dataUrl.year,
        }))
        .filter(
          (element, index, self) =>
            self.findIndex((t) => t.value === element.value) === index
        )
        .sort((a, b) => b.value - a.value),
    [dataUrls]
  );

  const handleYearChange = (selectedOption) => {
    const selectedYears = selectedOption.map((option) => option.value);
    console.log(selectedYears);
  };

  const handleSeasonChange = (selectedOption) => {
    const selectedSeasons = selectedOption.map((option) => option.value);
    console.log(selectedSeasons);
  };

  return (
    <section className="flex justify-center items-center gap-3 mx-auto md:max-w-[60%] mt-9 p-6">
      <Select
        isMulti
        styles={darkStyles}
        options={yearsOptions}
        className="w-1/2"
        placeholder="Año"
        onChange={handleYearChange}
      />
      <Select
        isMulti
        options={seasonsOptions}
        styles={darkStyles}
        className="w-1/2"
        placeholder="Temporada"
        onChange={handleSeasonChange}
      />
    </section>
  );
};
