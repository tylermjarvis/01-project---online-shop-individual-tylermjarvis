import { React, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ImageBanner from "./components/ImageBanner";
import FilterBy from "./components/FilterBy";
import SortBy from "./components/SortBy";
import Products from "./components/Products";
import Footer from "./components/Footer";

// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";
// The functions to filter and sort products by category
import { filterByCategory } from "./services/filterByCategory";
import { sortProducts } from "./services/sortProducts";

function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const onFilterProducts = (filterBy) =>
    setFilteredProducts(filterByCategory(products, filterBy));

  const onSortProducts = (sortBy) =>
    setFilteredProducts(sortProducts(products, sortBy));

  // const onSearchProducts = useCallback(async (searchTerm) => {
  //   const searchTermLowerCase = lowerCaseString(searchTerm);
  //   const products = await getProducts();
  //   const searchedProducts = products.filter(({ name }) =>
  //     lowerCaseString(name).includes(searchTermLowerCase)
  //   );
  //   setProducts(searchedProducts);
  //   setCategories([
  //     ...new Set(searchedProducts.map(({ metadata }) => metadata.category)),
  //   ]);
  // }, []);

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      console.log(products);
      setProducts(products);
      setFilteredProducts(products);
    };

    loadData();
  }, []);

  return (
    <div className="container">
      <Header />
      <ImageBanner />
      <h2 className="special-title">Popular Products</h2>
      <div className="toolbar">
        <FilterBy setFilterBy={onFilterProducts} />
        <SortBy setSortBy={onSortProducts} />
      </div>
      <Products products={filteredProducts} />
      <Footer />
    </div>
  );
}

export default App;
