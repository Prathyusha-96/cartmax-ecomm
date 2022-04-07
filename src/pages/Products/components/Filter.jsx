import { CategoryFilter } from "./Filters/CategoryFilter";
import { PriceRangeFilter } from "./Filters/PriceRangeFilter";
import { SortPriceFilter } from "./Filters/SortPriceFilter";
import { InStockFilter } from "./Filters/InStockFilter";
import { RatingFilter } from "./Filters/RatingFilter";
import { useFilter } from "../../../hooks";

const Filter = () => {
 const { state, dispatch } = useFilter();
  
    return (
    <div>
      <div className="filter">
        <div className="filter-head">
          <h4>Filters</h4>
          <button className="text-underline clear-filters-btn gray-text" onClick = {() => dispatch({ type: "RESET", payload: {} })} >
          Clear
          </button>
          </div>
        <PriceRangeFilter {...state} dispatch={dispatch} />

        <CategoryFilter {...state} dispatch={dispatch} />

        <RatingFilter {...state} dispatch={dispatch} />

        <SortPriceFilter {...state} dispatch={dispatch} />

        <InStockFilter {...state} dispatch={dispatch} />
       </div>
        </div>
      
    );
  };
  export {Filter}

    




























