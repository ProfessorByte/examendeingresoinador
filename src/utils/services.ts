export const getExamsData = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/ProfessorByte/FCyT_UMSS_ExamsPseudocrawler/refs/heads/main/validUrls.json"
  );
  const data = await response.json();
  return data;
};