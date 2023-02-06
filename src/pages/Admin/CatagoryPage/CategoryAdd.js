import React from "react";

const CategoryAdd = () => {
  const categoryList = [];
  for (let i = 0; i < 3; i++) {
    const category = (
      <ol>
        <input type="text" placeholder="CATEGORY 이름" />
        <button>수정하기</button>
        <button>삭제하기</button>
      </ol>
    );
    categoryList.push(category);
  }
  return (
    <>
      <form>
        <div>
          <p>카테고리</p>
          <div>
            <input
              type="text"
              id="create"
              placeholder="CATEGORY를 추가하세요."
            />
            <button>추가</button>
          </div>
        </div>
        <div>
          <ul>{categoryList}</ul>
        </div>
      </form>
    </>
  );
};

export default CategoryAdd;
