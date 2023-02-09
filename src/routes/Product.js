import React from "react";
import { useRecoilValue } from "recoil";
import { authStatusAtom } from "../recoil/atoms/authStatus.atom";

const prefixCls = "app-product";
const wrapperCls = (type) => {
  const mapTypeToCls = {};
  return `${prefixCls}-${mapTypeToCls[type]}`;
};

const ProductItem = () => {
  return <></>;
};

const ProductPage = () => {
  const { isAdmin } = useRecoilValue(authStatusAtom);
  return <div className={""}>asd</div>;
};

export default ProductPage;
