import type { OptionSelect } from "../types/select.types";

export const isValidYear = (year: number, yearsOptions: OptionSelect[]) =>
  yearsOptions.some((option) => option.value === year);
