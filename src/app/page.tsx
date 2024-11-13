import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HomeMainContent } from "@/components/HomeMainContent";
import { Exam } from "@/utils/interfaces";
import { getExamsData } from "@/utils/services";

const examsData: Exam[] = await getExamsData();
const yearsOptions = [...new Set(examsData.map((exam) => exam.year))]
  .sort((a, b) => b - a)
  .map((year) => ({ value: year, label: year }));

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMainContent examsData={examsData} yearsOptions={yearsOptions} />
      <Footer />
    </>
  );
}
