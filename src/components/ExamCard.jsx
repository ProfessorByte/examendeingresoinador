import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ExamCard = ({
  idResource,
  formVersion,
  semester,
  year,
  dataId,
}) => {
  return (
    <Link
      className="p-4 bg-brand-darkgray rounded-lg border border-solid border-[#e5e7eb] shadow-lg shadow-black hover:bg-brand-darkblue transition duration-300 ease-in-out"
      to={`/exams/${dataId}`}
    >
      <h3 className="text-2xl font-semibold text-brand-white">
        {`Examen de Ingreso #${idResource}`}
      </h3>
      <h4 className="text-xl font-semibold text-brand-white">
        {`Variante ${formVersion}`}
      </h4>
      <p className="text-sm text-brand-darkwhite mt-2">{`Gestión ${semester}-${year}`}</p>
    </Link>
  );
};

ExamCard.propTypes = {
  idResource: PropTypes.number.isRequired,
  formVersion: PropTypes.number.isRequired,
  semester: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  dataId: PropTypes.string.isRequired,
};
