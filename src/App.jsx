import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ExamSolutionSplit } from "./pages/ExamSolutionSplit";
import { Page404 } from "./pages/Page404";
import { FilterProvider } from "./context/FilterProvider";

export const App = () => {
  return (
    <FilterProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/exams/:dataId" element={<ExamSolutionSplit />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </FilterProvider>
  );
};
