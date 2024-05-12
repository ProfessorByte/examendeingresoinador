import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
  }, [navigate]);

  return (
    <h1 className="h-screen flex justify-center items-center text-4xl">
      404 | Not Found
    </h1>
  );
};
