import { useState } from "react";
import { dataUrls } from "../data/util";
import { FilterContext } from "./FilterContext";

import PropTypes from "prop-types";

export const FilterProvider = ({ children }) => {
  const [year, setYear] = useState(dataUrls.at(-1).year);

  return (
    <FilterContext.Provider value={{ year, setYear }}>
      {children}
    </FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
