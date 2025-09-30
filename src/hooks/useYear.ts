import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import type { OptionSelect } from "@/types/interfaces";

export const useYear = (yearsOptions: OptionSelect[]) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{ year: string }>();

  useEffect(() => {
    yearsOptions.forEach((yearOption) => {
      router.prefetch(`/fcyt/${yearOption.value}`);
    });
  }, [yearsOptions, router]);

  const updateYearInURL = (year: number) => {
    const newPath = pathname.replace(`/${params.year}`, `/${year}`);
    router.replace(newPath, { scroll: false });
  };

  return { updateYearInURL };
};
