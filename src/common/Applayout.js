import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authStatusAtom } from "../recoil/atoms/authStatus.atom";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

const AppLayout = ({ children }) => {
  const { isLogin } = useRecoilValue(authStatusAtom);
  useEffect(() => {
    console.log("AppLayout Mounted...");
  }, []);
  return (
    <>
      <AppHeader isLogin={isLogin} />
      <main className={"app-main-wrapper"}>{children}</main>
      <AppFooter />
    </>
  );
};
export default AppLayout;
