const InStockFilter = ({ inStock, dispatch }) => {
    return (
            <div className="filter-sort">
              <h4 className="filter-heading">Others</h4>
              <div className="filter-checkbox">
              <label className="filter-input">
                <input type="checkbox" id="in-stock" checked={inStock}
                    onChange={(event) =>
                        event.target.checked
                            ? dispatch({
                                type: "IN_STOCK",
                                payload: { inStock: true }
                            })
                            : dispatch({
                                type: "IN_STOCK",
                                payload: { inStock: false }
                            })
                    } />
                <span className="filter-desc">In Stock</span>
                </label>
            </div>
            </div>
        
    )
}

export { InStockFilter };