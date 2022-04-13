import React from "react";
const PriceRangeFilter = ({ rangeValue, dispatch }) => {
    return (
        
            <div className="filter-price">
              <h4 className="filter-heading">Price</h4>
              <div className="filter-range">
                  <p>1000</p>
                  <p>2000</p>
                <p>3000</p>
             </div>
              <input className="slider" type="range" name="" min="1000" max="3000" value={rangeValue}
              onChange={(event) =>
                dispatch({
                 type: "RANGE_FILTER",
                 payload: { rangeValue: event.target.value }
                    })
                } />
            
          </div>

    )
}

export { PriceRangeFilter };