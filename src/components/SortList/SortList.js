import React from "react";
import "./SortList.css";
import PurchaseType from "../PurchaseForm/PurchaseType";

const SortList = () => {
  return (
    <div className="sort-lists">
      <PurchaseType />
      <select name="orders" className="sort-list">
        <option>최신순</option>
        <option>오래된순</option>
        <option>가격 높은순</option>
        <option>가격 낮은순</option>
      </select>
      <div className="sort-list sort-period">
        <input type="date" />
        <input type="date" />
      </div>
    </div>
  );
};

export default SortList;
