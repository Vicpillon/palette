import React, { useState } from "react";

const ProductForm = () => {
  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCompany, setProductCompany] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [products, setProducts] = useState([]);

  const handleCreate = () => {
    setProducts([
      ...products,
      {
        image: productImage,
        name: productName,
        price: productPrice,
        company: productCompany,
        description: productDescription,
      },
    ]);
  };

  const handleUpdate = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].image = productImage;
    updatedProducts[index].name = productName;
    updatedProducts[index].name = productPrice;
    updatedProducts[index].name = productCompany;
    updatedProducts[index].description = productDescription;
    setProducts(updatedProducts);
  };

  const handleDelete = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input type="file" onChange={(e) => setProductImage(e.target.files[0])} />
      <p>
        <input
          type="text"
          value={productName}
          placeholder="상품명"
          onChange={(e) => setProductName(e.target.value)}
        />
      </p>
      <input
        type="text"
        value={productPrice}
        placeholder="상품가격"
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <p></p>
      <input
        type="text"
        value={productCompany}
        placeholder="제조사"
        onChange={(e) => setProductCompany(e.target.value)}
      />
      <p></p>
      <textarea
        type="text"
        value={productDescription}
        placeholder="상품설명"
        onChange={(e) => setProductDescription(e.target.value)}
      />
      <p>
        <button onClick={handleCreate}>상품등록</button>
      </p>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <img src={URL.createObjectURL(product.image)} alt={product.name} />
            <h3>{product.name}</h3>

            <p>{product.description}</p>
            <button onClick={() => handleUpdate(index)}>Update</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductForm;



{/* <select></select> 카테고리
상품등록할 폼을 만들고 폼에 잇는 데이터를 전송해야 한다. 그걸 백앤드가  
누르전 값들은 프론트가 가지고 있어야 한다.

1) 폼에 글자를 입력하는 순간 프론트가 이 데이터를 가지고 있어야함.
2) 버튼을 누르는 순간 프론트가 가지고 있떤 데이터를 전송
1-2번 연결하는 것이 프론트가 데이터를 가지고 있어야하는 부분


1) 구현
const [] = useState<any>({type:""</any>

2) axios.post("url", {,})
  if(result) {
  alert("상품등록")}
  
3) 흐름 이해하슈


*/}