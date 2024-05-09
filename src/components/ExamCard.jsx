import PropTypes from "prop-types";

export const ExamCard = ({
  idResource,
  row,
  semester,
  year,
  examUrl,
  solutionUrl,
}) => {
  const handleOpenExam = () => {
    window.open(examUrl, "_blank");
  };

  const handleOpenSolution = (e) => {
    e.stopPropagation();
    window.open(solutionUrl, "_blank");
  };

  return (
    <button
      type="button"
      className="p-4 bg-brand-darkgray rounded-lg border border-solid border-[#e5e7eb] shadow-lg shadow-black hover:bg-brand-darkblue transition duration-300 ease-in-out"
      onClick={handleOpenExam}
    >
      <h3 className="text-2xl font-semibold text-brand-white">
        {`Examen de Ingreso #${idResource}`}
      </h3>
      <h4 className="text-xl font-semibold text-brand-white">
        {`Fila #${row}`}
      </h4>
      <p className="text-sm text-brand-darkwhite mt-2">{`Gestión ${semester}-${year}`}</p>
      <button
        type="button"
        className="mt-3 p-1 bg-blue-300 text-sm text-brand-black rounded-full hover:bg-blue-600"
        onClick={handleOpenSolution}
      >
        Ver solución
      </button>
    </button>
  );
};

ExamCard.propTypes = {
  idResource: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  semester: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  examUrl: PropTypes.string.isRequired,
  solutionUrl: PropTypes.string.isRequired,
};
