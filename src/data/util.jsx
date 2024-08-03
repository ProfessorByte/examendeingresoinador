import validUrls from "./validUrls.json";

export const dataUrls = validUrls
  .map((dataExam) => ({
    ...dataExam,
    dataId: `${dataExam.year}-${dataExam.semester}-${dataExam.idResource}-${dataExam.formVersion}`,
  }))
  .sort((a, b) => a.dataId.localeCompare(b.dataId));
