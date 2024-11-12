import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MainContent } from "@/components/MainContent";
import { Exam } from "@/utils/interfaces";
import { getExamsData } from "@/utils/services";

const examsData: Exam[] = await getExamsData();
const yearsOptions = [...new Set(examsData.map((exam) => exam.year))]
  .sort((a, b) => b - a)
  .map((year) => ({ value: year, label: year }));

export default async function Home() {
  // const currentYearParam =
  //   Number((await searchParams).year) || yearsOptions[0].value;

  return (
    <>
      <Hero />
      <MainContent yearsOptions={yearsOptions} examsData={examsData} />
      <Footer />
    </>
  );
}
