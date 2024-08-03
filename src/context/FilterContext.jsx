import { createContext } from "react";
import { dataUrls } from "../data/util";

export const FilterContext = createContext({ year: dataUrls.at(-1).year });
