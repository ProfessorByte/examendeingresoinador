import type { OptionSelect } from "../types/interfaces";

export const isValidYear = (year: number, yearsOptions: OptionSelect[]) =>
  yearsOptions.some((option) => option.value === year);
