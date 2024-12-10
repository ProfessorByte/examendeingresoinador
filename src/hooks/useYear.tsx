import { useParams, usePathname, useRouter } from "next/navigation";

export const useYear = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{ year: string }>();

  const updateYearInURL = (year: number) => {
    const newPath = pathname.replace(`/${params.year}`, `/${year}`);
    router.replace(newPath, { scroll: false });
  };

  return { updateYearInURL };
};
