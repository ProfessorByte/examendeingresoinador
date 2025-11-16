import { useCallback, useState } from "react";

export const useShowCover = () => {
  const [showCover, setShowCover] = useState(false);

  const handleDocumentLoad = useCallback(() => {
    setShowCover(true);
    setTimeout(() => {
      setShowCover(false);
    }, 3000);
  }, []);

  return { showCover, handleDocumentLoad };
};
