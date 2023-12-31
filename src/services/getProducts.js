const getProducts = async () => {
  // Fetch products and prices from the Stripe API
  // Use the following URL for your fetch request
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/products`;
  const response = await fetch(url);
  const products = await response.json();
  return products;
  /*
  try {
    const response = await fetch(url);

    if (response.ok) {
      const result = await response.json();
      console.log(result.data);
    } else {
      throw new Error("Could not fetch products.");
    }
  } catch (error) {
    console.log("There was an error fetching the products: ", error);
  }

  const products = [];

  return products;
  */
};

export { getProducts };
