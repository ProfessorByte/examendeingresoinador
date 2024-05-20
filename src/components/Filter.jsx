import { useState, useEffect, useMemo, useRef } from "react";
import { db } from "../services/database";
import Select from "react-select";
import { collection, onSnapshot } from "firebase/firestore";
import { ExamCard } from "./ExamCard";
import { ExamDateIcon } from "../assets/Icons";

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

const seasonsOptions = [
  { value: 1, label: "Principios de año" },
  { value: 2, label: "Mediados de año" },
];

export const Filter = () => {
  const [dataUrls, setDataUrls] = useState([]);
  const [yearValue, setYearValue] = useState();
  const [seasonValue, setSeasonValue] = useState(1);
  const [filteredDataUrls, setFilteredDataUrls] = useState([]);

  const examsSectionRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "dataUrls"), (snapshot) => {
      const dataUrls = snapshot.docs
        .map((doc) => ({ ...doc.data(), dataId: doc.id }))
        .sort((a, b) => {
          if (a.examUrl < b.examUrl) {
            return -1;
          } else if (a.examUrl > b.examUrl) {
            return 1;
          } else {
            return 0;
          }
        });
      setDataUrls(dataUrls);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (yearValue) {
      setFilteredDataUrls(
        dataUrls.filter(
          (dataUrl) =>
            dataUrl.year === yearValue && dataUrl.semester === seasonValue
        )
      );
      examsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [dataUrls, yearValue, seasonValue]);

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

  return (
    <>
      <section
        className="flex justify-center items-center gap-3 mx-auto md:max-w-[60%] mt-9 p-6"
        ref={examsSectionRef}
      >
        <Select
          styles={darkStyles}
          options={yearsOptions}
          isSearchable={false}
          className="w-1/2"
          placeholder="Año"
          value={yearsOptions.find((option) => option.value === yearValue)}
          onChange={(option) => setYearValue(option.value)}
        />
        {yearValue && (
          <Select
            styles={darkStyles}
            options={seasonsOptions}
            isSearchable={false}
            className="w-1/2"
            placeholder="Temporada"
            value={seasonsOptions.find(
              (option) => option.value === seasonValue
            )}
            onChange={(option) => setSeasonValue(option.value)}
          />
        )}
      </section>
      {filteredDataUrls.length > 0 ? (
        <main className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4 mx-auto md:max-w-[84%] my-9 p-6">
          {filteredDataUrls.map((dataUrl) => (
            <ExamCard key={dataUrl.dataId} {...dataUrl} />
          ))}
        </main>
      ) : (
        <main className="flex justify-center flex-col items-center gap-3 mx-auto md:max-w-[60%] my-9 p-6">
          <ExamDateIcon width={128} height={128} fill="#f3f4f6" />
          <p className="text-2xl text-center font-semibold text-brand-white">
            {yearValue
              ? "No hay exámenes para el periodo seleccionado"
              : "Selecciona un año para ver los exámenes disponibles"}
          </p>
        </main>
      )}
    </>
  );
};
