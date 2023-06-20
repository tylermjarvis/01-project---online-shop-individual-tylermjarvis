import { React, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FilterBy from "./components/FilterBy";
import ImageBanner from "./components/ImageBanner";
import Products from "./components/Products";
import Footer from "./components/Footer";

// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";
// The function filters products by category
import { filterByCategory } from "./services/filterByCategory";

function App() {
  // use the products variable to read all of your products
  // and display them on your page
  // const [filterBy, setFilterBy] = useState("all");
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState(getProducts());

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      console.log(products);
      setProducts(products);
      // const filtered = filterByCategory(products, filterBy);
    };

    loadData();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="toolbar">
        {/* <FilterBy setFilterBy={setFilterBy} /> */}
      </div>
      <ImageBanner />
      <Products products={products} />
      <Footer />
    </div>
  );
}

export default App;
