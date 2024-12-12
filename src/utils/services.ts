import type { Exam } from "./interfaces";

export const getExamsData = async (): Promise<Exam[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/ProfessorByte/FCyT_UMSS_ExamsPseudocrawler/refs/heads/main/validUrls.json"
  );
  const data = await response.json();
  return data;
};

export const getPdfBlob = async (url: string): Promise<Blob> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.blob();
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch PDF: ${error.message}`);
    } else {
      throw new Error("Failed to fetch PDF: Unknown error");
    }
  }
};
