const sortProducts = (products, sortBy) => {
  return [...products].sort((a, b) => {
    const priceOfA = a.prices[0].unit_amount;
    const priceOfB = b.prices[0].unit_amount;
    return sortBy === "low" ? priceOfA - priceOfB : priceOfB - priceOfA;
  });
};

export { sortProducts };
