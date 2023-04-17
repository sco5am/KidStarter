import React from "react";
import StoreList from "../components/StoreList/StoreList"
import Cart from "../components/Cart";
import Map from "../components/MapComponent";

const Store = () => {
    return (
      <div className="container">
        {/* <Map/> */}
        <StoreList/>
        <Cart />
      </div>
    );
  };
  export default Store;