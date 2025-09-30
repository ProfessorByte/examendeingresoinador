import type { GroupBase, StylesConfig } from "react-select";

export const darkStyles: StylesConfig<
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
