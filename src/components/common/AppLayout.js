import React from "react"
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
const AppLayout = (props) => {
  const { children } = props;
  return (
    <div className="shop">
      <AppHeader />
      {children} 
      {/* = ./index.js 의 createBrowserRouter 모든 페이지에서 칠드런으로 공통으로 한번에 적용 */}
      <AppFooter />
    </div>
  );
}

export default AppLayout

// props의 children 이 AppLayout을 감싸고 있던 녀석들 
//  1.Header, main, Footer 공통구조