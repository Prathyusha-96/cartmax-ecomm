
import './filter.css'
import '../products.css'
export default function Filter() {
    return (
        <div className="product-conainer">
        <aside className="filter">
          <div className="filter-head">
            <h4>Filters</h4>
            <p>Clear</p>
          </div>
          <div className="filter-price">
              <h4 className="filter-heading">Price</h4>
              <div className="filter-range">
                  <p>50</p>
                  <p>150</p>
                  <p>200</p>
              </div>
              <input className="slider" type="range" name="" min="50" max="200"/>
          </div>
          <div className="filter-category">
              <h4 className="filter-heading">Category</h4>
              <div className="filter-checkbox">
                  <label className="filter-input">
                      <input type="checkbox" name="" id=""/>
                      <span className="filter-desc">Men's clothing</span>
                  </label>
                  <label className="filter-input">
                    <input type="checkbox" name="" id=""/>
                    <span className="filter-desc">Women's clothing</span>
                </label>
                <label className="filter-input">
                    <input type="checkbox" name="" id=""/>
                    <span className="filter-desc">Kid's clothing</span>
                </label>
              </div>
          </div>

          <div className="filter-sort">
              <h4 className="filter-heading">Sort by</h4>
              <div className="filter-checkbox">
                <label className="filter-input">
                    <input type="checkbox" name="" id=""/>
                    <span className="filter-desc">Price - Low to High</span>
                </label>
                <label className="filter-input">
                  <input type="checkbox" name="" id=""/>
                  <span className="filter-desc">Price - High to Low</span>
              </label>
              </div> 
          </div>
        </aside>
        </div>
    )
}