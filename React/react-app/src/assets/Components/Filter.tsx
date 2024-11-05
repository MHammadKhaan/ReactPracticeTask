import React from "react";
import { Categories } from "../../App";
interface CategoryProps {
  onSelect: (category: string) => void;
}
function Filter({ onSelect }: CategoryProps) {
  return (
    <select
      className="form-select mt-3 mb-3"
      onChange={(event) => onSelect(event.target.value)}
    >
      <option value="">All Categories</option>
      {Categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default Filter;
