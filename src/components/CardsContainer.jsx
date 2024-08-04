import { ExamCard } from "./ExamCard";

import PropTypes from "prop-types";

export const CardsContainer = ({ filteredDataUrls }) => {
  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4 mx-auto md:max-w-[84%] my-9 p-6">
      {filteredDataUrls.map((dataUrl) => (
        <ExamCard key={dataUrl.dataId} {...dataUrl} />
      ))}
    </main>
  );
};

CardsContainer.propTypes = {
  filteredDataUrls: PropTypes.arrayOf(
    PropTypes.shape({
      dataId: PropTypes.string.isRequired,
      examUrl: PropTypes.string.isRequired,
      formVersion: PropTypes.oneOf([1, 2]).isRequired,
      idResource: PropTypes.number.isRequired,
      semester: PropTypes.oneOf([1, 2]).isRequired,
      solutionUrl: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    })
  ).isRequired,
};
