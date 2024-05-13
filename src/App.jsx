import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ExamSolutionSplit } from "./pages/ExamSolutionSplit";
import { Page404 } from "./pages/Page404";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/exam" element={<ExamSolutionSplit />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
