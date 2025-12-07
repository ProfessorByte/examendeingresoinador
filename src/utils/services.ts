import type { Exam } from "../types/exam.types";
import { FCYT_EXAMS_CRAWLER_BASE_URL } from "./baseUrls";

export const getFcytExamsData = async (): Promise<Exam[]> => {
  const response = await fetch(`${FCYT_EXAMS_CRAWLER_BASE_URL}/validUrls.json`);
  const data = await response.json();
  return data;
};
