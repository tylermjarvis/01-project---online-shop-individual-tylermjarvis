const FilterBy = () => {
  return (
    <div className="filter-by">
      <label htmlFor="category">Filter by </label>
      <select id="category" defaultValue="all">
        <option value="all">All</option>
        <option value="bread">Pastry</option>
        <option value="chocolate">Chocolate</option>
        <option value="packet-chips">Packet Chips</option>
        <option value="drink">Drinks</option>
      </select>
    </div>
  );
};

export default FilterBy;
