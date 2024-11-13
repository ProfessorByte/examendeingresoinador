import { OptionType } from "@/utils/interfaces";
import { usePathname, useSearchParams } from "next/navigation";

const isValidYear = (year: number, yearsOptions: OptionType[]) =>
  yearsOptions.some((option) => option.value === year);

export const useYear = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const getYearFromURL = (yearsOptions: OptionType[]) => {
    const year = Number(searchParams.get("year"));
    if (isValidYear(year, yearsOptions)) {
      return { value: year, label: year };
    }
    return yearsOptions[0];
  };

  const updateYearInURL = (year: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("year", year.toString());
    window.history.replaceState(null, "", `${pathname}?${params.toString()}`);
  };

  return { getYearFromURL, updateYearInURL };
};
