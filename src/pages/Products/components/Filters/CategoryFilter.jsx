const CategoryFilter = ({ mensClothing, womensClothing, womenAccessories, kidsClothing, dispatch }) => {

    return (
        
        <div className="filter-category">
            <h4 className="filter-heading">Category</h4>

            {/* mens clothing */}
            <div className="filter-checkbox">
            <label className="filter-input">
                     
                      <input type="checkbox"  id="mens-clothing" checked={mensClothing}

                      onChange={(event) =>
                        event.target.checked
                            ? dispatch({
                                type: "MENS_CLOTHING",
                                payload: { mensClothing: true }
                            })
                            : dispatch({
                                type: "MENS_CLOTHING",
                                payload: { mensClothing: false }
                            })
                         } />
                      <span className="filter-desc">Men's Clothing</span>
                  </label>
                </div>

              {/* womens clothing */}
                <div className="filter-checkbox">
            <label className="filter-input">
                      <input type="checkbox"  id="womens-clothing" checked={womensClothing}
                      onChange={(event) =>
                        event.target.checked
                            ? dispatch({
                                type: "WOMENS_CLOTHING",
                                payload: { womensClothing: true }
                            })
                            : dispatch({
                                type: "WOMENS_CLOTHING",
                                payload: { womensClothing: false }
                            })
                         } />
                      <span className="filter-desc">Women's Clothing</span>
                  </label>
                </div>

            {/* women accessories */}
                <div className="filter-checkbox">
            <label className="filter-input">
                      <input type="checkbox"  id="womens-accessories" checked={womenAccessories}
                      onChange={(event) =>
                        event.target.checked
                            ? dispatch({
                                type: "WOMEN_ACCESSORIES",
                                payload: { womenAccessories: true }
                            })
                            : dispatch({
                                type: "WOMEN_ACCESSORIES",
                                payload: {  womenAccessories: false }
                            })
                         } />
                      <span className="filter-desc">Women Accessories</span>
                  </label>
                </div>
                
                {/* kids clothing */}
                
                <div className="filter-checkbox">
            <label className="filter-input">
                      <input type="checkbox"  id="kids-clothing" checked={kidsClothing}
                      onChange={(event) =>
                        event.target.checked
                            ? dispatch({
                                type: "KIDS_CLOTHING",
                                payload: { kidsClothing: true }
                            })
                            : dispatch({
                                type: "KIDS_CLOTHING",
                                payload: { kidsClothing: false }
                            })
                         } />
                      <span className="filter-desc">Kid's Clothing</span>
                  </label>
                </div>
                
            </div>
          
    )
}

export { CategoryFilter };