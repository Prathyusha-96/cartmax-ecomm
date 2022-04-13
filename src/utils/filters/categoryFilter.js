// const categoryFilter = (data, { category }) => {
//     const categoryFilteredData = data.filter((item) =>
//       category.includes(item.categoryName)
//     );
//     if (categoryFilteredData.length > 0) {
//       return categoryFilteredData;
//     }
//     return data;
//   };
  
//   export { categoryFilter };









const categoryFilter = (data, { mensClothing, womensClothing, womenAccessories, kidsClothing }) => {

    if (!mensClothing && !womensClothing && !womenAccessories && !kidsClothing) {
        return data;
    }

    const filteredData = [];

    if (mensClothing) {
       
        let newData = data.filter((item) => item.categoryName === "mens-clothing");
        filteredData.push(...newData);
    }
    if (womensClothing) {
        
        let newData = data.filter((item) => item.categoryName === "womens-clothing");
        filteredData.push(...newData);
    }
    if (womenAccessories) {
        
        let newData = data.filter((item) => item.categoryName === "women-accessories");
        filteredData.push(...newData);
    }
    
    if (kidsClothing) {
      
        let newData = data.filter((item) => item.categoryName === "kids-clothing");
        filteredData.push(...newData);
    }

    return filteredData;
};

export { categoryFilter };