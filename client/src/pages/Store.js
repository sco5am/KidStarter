import React from "react";
import StoreList from "../components/StoreList/StoreList"
import Cart from "../components/Cart";

const Store = () => {
    return (
      <div className="container">
        <StoreList/>
        <Cart />
      </div>
    );
  };
  export default Store;