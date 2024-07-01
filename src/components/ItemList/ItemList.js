import React from "react";
import "./ItemList.css";
import ItemDate from "./ItemDate";

const ItemList = () => {
  return (
    <div className="item-list">
      <div className="items">
        <div className="items-type"></div>
        <div className="items-name"></div>
        <ItemDate />
        <div className="items-price"></div>
        <div className="items-repurchase"></div>
        <div className="items-memo"></div>
      </div>
    </div>
  );
};

export default ItemList;
