import { YearSelect } from "@/components/YearSelect";
import { getExamsData } from "@/utils/services";

export const MainContent = async () => {
  const examsData = await getExamsData();
  console.log(examsData);

  return (
    <main>
      <YearSelect />
    </main>
  );
};
