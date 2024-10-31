import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { YearSelect } from "@/components/YearSelect";
import { getExamsData } from "@/utils/services";

interface Exam {
  examUrl: string;
  solutionUrl: string;
  year: number;
  semester: number;
  formVersion: number;
  idResource: number;
}

export default async function Home() {
  const examsData: Exam[] = await getExamsData();
  const yearsOptions = [...new Set(examsData.map((exam) => exam.year))]
    .sort((a, b) => b - a)
    .map((year) => ({ value: year, label: year }));

  return (
    <>
      <Hero />
      <main>
        <YearSelect yearsOptions={yearsOptions} />
      </main>
      <Footer />
    </>
  );
}
