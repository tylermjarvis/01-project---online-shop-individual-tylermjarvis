const SortBy = ({ setSortBy }) => {
  const onChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="sort-by-container">
      <label className="sort-by-label" htmlFor="sort">
        Sort By{" "}
      </label>
      <select id="sort" onChange={onChange}>
        <option value="low">Price: Low</option>
        <option value="high">Price: High</option>
      </select>
    </div>
  );
};

export default SortBy;
