import React from "react";
import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filter-reducer";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, {
        sortBy: "",
        mensClothing: false,
        womensClothing: false,
        womenAccessories: false,
        kidsClothing: false,
        ratingValue: "",
        inStock: false,
        rangeValue: 3000
    });

    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };




       