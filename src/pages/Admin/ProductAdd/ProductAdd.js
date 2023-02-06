import React from "react";
const ProductAdd = () => {
  return (
    <>
      <h1>상품 등록</h1>
      <p>제품사진</p>
      <p>
        <input type="file" placeholder="사진파일"></input>
      </p>
      <p>제품 이름</p>
      <p>
        <input type="text" placeholder="상품명"></input>
      </p>
      <p>카테고리</p>
      <p>
        <select name="category">
          <option value="category">카테고리를 선택해주세요</option>
          <option value="Floral">Floral</option>
          <option value="Woody">Woody</option>
          <option value="Cotton">Cotton</option>
        </select>
      </p>
      <p>
        <input type="text" placeholder="가격"></input>
      </p>
      <p>제조사</p>
      <p>
        <input type="text" placeholder="제조사"></input>
      </p>
      <p>상세설명</p>
      <p>
        <textarea placeholder="상세설명"></textarea>
      </p>
      <button>등록하기</button>
    </>
  );
};

export default ProductAdd;
