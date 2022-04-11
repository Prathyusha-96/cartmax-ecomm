import React from "react";
const RatingFilter = ({ ratingValue, dispatch }) => {
    return (
      
        
        <div className="filter-rating">
            <h3 className="filter-heading">Rating</h3>

            {/* Filter Four Star Rating Products */}
            <div className="filter-checkbox">
            <label className="filter-input">
                <input type="radio" id="four-star" name="radio-rating" value="4" checked={ratingValue === "4"}
                    onChange={(event) =>
                        dispatch({
                            type: "RATING",
                            payload: { ratingValue: event.target.value }
                        })
                    } />
                <span className="filter-desc">4 stars & above</span>
                </label>
            </div>

            {/* Filter  Three Star Rating Products */}
            <div className="filter-checkbox">
            <label className="filter-input">
                <input type="radio" id="three-star" name="radio-rating" value="3" checked={ratingValue === "3"}
                    onChange={(event) =>
                        dispatch({
                            type: "RATING",
                            payload: { ratingValue: event.target.value }
                        })
                    } />
                <span className="filter-desc">3 stars & above</span>
                </label>
            </div>

            {/* Filter Two Star Rating Products */}
            <div className="filter-checkbox">
            <label className="filter-input">
                <input type="radio" id="two-star" name="radio-rating" value="2" checked={ratingValue === "2"}
                    onChange={(event) =>
                        dispatch({
                            type: "RATING",
                            payload: { ratingValue: event.target.value }
                        })
                    } />
                <span className="filter-desc">2 stars & above</span>
                </label>
            </div>

            {/* Filter One Star Rating Products */}
            <div className="filter-checkbox">
            <label className="filter-input">
                <input type="radio" id="one-star" name="radio-rating" value="1" checked={ratingValue === "1"}
                    onChange={(event) =>
                        dispatch({
                            type: "RATING",
                            payload: { ratingValue: event.target.value }
                        })
                    } />
                <span className="filter-desc">1 stars & above</span>
                </label>
            </div>
        </div>
       
    )
}

export { RatingFilter };