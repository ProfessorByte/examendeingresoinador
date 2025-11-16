interface InitTitleCoverProps {
  pdfContentLabel: "exam" | "solution";
  showCover: boolean;
}

export const InitTitleCover = ({
  pdfContentLabel,
  showCover,
}: InitTitleCoverProps) => {
  if (!showCover) {
    return null;
  }

  return (
    <div className="absolute inset-0 my-auto h-9 bg-brand-darkgray bg-opacity-75 flex items-center justify-center text-brand-white text-3xl font-bold z-20 animate-slide-from-right">
      {pdfContentLabel === "exam" ? "Preguntas" : "Respuestas"}
    </div>
  );
};
