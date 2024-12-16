import { OptionType } from "./interfaces";

export const isValidYear = (year: number, yearsOptions: OptionType[]) =>
  yearsOptions.some((option) => option.value === year);
