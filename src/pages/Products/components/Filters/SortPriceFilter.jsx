import React from "react";
const SortPriceFilter = ({ sortBy, dispatch }) => {
    return (
        
            <div className="filter-sort">
              <h4 className="filter-heading">Sort by</h4>

              {/* sort low to high */}
              <div className="filter-checkbox">
                 <label className="filter-input">
                     <input type="radio" name="radio-sort" id="low-high"
                    checked={sortBy === "LOW_TO_HIGH"}
                    onChange={() =>
                        dispatch({
                            type: "LOW_TO_HIGH",
                            payload: {}
                        })
                    }  />
                    <span className="filter-desc">Price - Low to High</span>
                 </label>
                 </div>

                 {/* sort high to low */}
                 <div className="filter-checkbox">
                 <label className="filter-input">
                     <input type="radio" name="radio-sort" id="high-low"
                    checked={sortBy === "HIGH_TO_LOW"}
                    onChange={() =>
                        dispatch({
                            type: "HIGH_TO_LOW",
                            payload: {}
                        })
                    }  />
                    <span className="filter-desc">Price - High to Low</span>
                 </label>
                  </div> 
           </div>
        
        
     
    )
}

export { SortPriceFilter };