import type { OptionType } from "../types/interfaces";

export const isValidYear = (year: number, yearsOptions: OptionType[]) =>
  yearsOptions.some((option) => option.value === year);
