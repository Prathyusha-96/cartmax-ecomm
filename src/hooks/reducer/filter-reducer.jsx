const filterReducer = (state, action) => {
    
     const {mensClothing, womensClothing, womenAccessories, kidsClothing, ratingValue, inStock,  rangeValue } = action.payload;
   switch (action.type) {
        case "LOW_TO_HIGH":
            return { ...state, sortBy: action.type};

        case "HIGH_TO_LOW":
            return { ...state, sortBy: action.type };

            case "MENS_CLOTHING":
                return { ...state, mensClothing: mensClothing };
    
            case "WOMENS_CLOTHING":
                return { ...state, womensClothing: womensClothing };
    
            case "WOMEN_ACCESSORIES":
                return { ...state, womenAccessories: womenAccessories };
    
            case "KIDS_CLOTHING":
                return { ...state, kidsClothing: kidsClothing };
    
        case "RANGE_FILTER":
            return { ...state, rangeValue: rangeValue };

        case "RATING":
            return { ...state, ratingValue: ratingValue };

        case "IN_STOCK":
             return { ...state, inStock: inStock };

         case "RESET":
             return {
                sortBy: "",
                mensClothing: false,
                womensClothing: false,
                womenAccessories: false,
                kidsClothing: false,
                ratingValue: "",
                inStock: false,
                rangeValue: 3000
            };

            default:
                return { ...state };
        }
    };
    
    export { filterReducer };
    


        

 




            