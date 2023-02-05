import React from "react"

const Category = () => {
  return (
    <select name="category">
      <option value="category">카테고리를 선택해주세요</option>
      <option value="Floral">Floral</option>
      <option value="Woody">Woody</option>
      <option value="Cotton">Cotton</option>
    </select>
  );
};
export default Category;