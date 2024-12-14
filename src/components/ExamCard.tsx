import { Exam } from "@/utils/interfaces";
import Link from "next/link";

interface ExamCardProps extends Exam {
  index: number;
}

export const ExamCard = ({
  index,
  idResource,
  formVersion,
  semester,
  year,
  slug,
}: ExamCardProps) => {
  return (
    <Link
      className="block relative p-6 bg-brand-gray rounded-lg border border-solid border-brand-darkwhite shadow-lg shadow-black z-0 overflow-hidden before:absolute before:-z-10 before:-bottom-4 before:-right-4 before:bg-brand-darkgreen before:size-8 before:rounded-full before:transition-transform before:duration-[600ms] before:ease-out hover:before:scale-[30] opacity-0 animate-fadeRight"
      style={{ animationDelay: `${index * 36}ms` }}
      href={`/fcyt/exams/${slug}`}
    >
      <h2 className="text-2xl font-semibold">
        {`Examen de Ingreso #${idResource}`}
      </h2>
      <h3 className="text-xl font-semibold">{`Variante ${formVersion}`}</h3>
      <p className="text-sm text-brand-darkwhite mt-2">{`Gestión ${semester}-${year}`}</p>
      <div className="flex items-center justify-center absolute size-8 overflow-hidden bottom-0 right-0 bg-brand-darkgreen rounded-[32px_0_8px_0]">
        <div className="-mb-1.5 -mr-1.5">→</div>
      </div>
    </Link>
  );
};
