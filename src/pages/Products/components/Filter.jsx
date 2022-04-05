

export default function Filter() {
    return (

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
                    <span className="filter-desc">Women accessories</span>
                </label>
                <label className="filter-input">
                    <input type="checkbox" name="" id=""/>
                    <span className="filter-desc">Kid's clothing</span>
                </label>
              </div>
          </div>
          <div class="filter-rating">
              <h4 class="filter-heading">Rating</h4>
              <div class="filter-checkbox">
                <label class="filter-input">
                    <input type="radio" name="" id=""/>
                    <span class="filter-desc">4 Star & above</span>
                </label>
                <label class="filter-input">
                  <input type="radio" name="" id=""/>
                  <span class="filter-desc">3 Star & above</span>
              </label>
              <label class="filter-input">
                  <input type="radio" name="" id=""/>
                  <span class="filter-desc">2 star & above</span>
              </label>
              <label class="filter-input">
                <input type="radio" name="" id=""/>
                <span class="filter-desc">1 star & above</span>
            </label>
          </div>
          </div>

          <div className="filter-sort">
              <h4 className="filter-heading">Sort by</h4>
              <div className="filter-checkbox">
                <label className="filter-input">
                    <input type="radio" name="" id=""/>
                    <span className="filter-desc">Price - Low to High</span>
                </label>
                <label className="filter-input">
                  <input type="radio" name="" id=""/>
                  <span className="filter-desc">Price - High to Low</span>
              </label>
              </div> 
          </div>
        </aside>

    )
}
export {Filter}