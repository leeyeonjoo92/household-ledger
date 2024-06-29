import React from "react";
import PurchaseType from "../PurchaseForm/PurchaseType";

const SortList = () => {
  return (
    <div className="sort-list">
      <PurchaseType />
      <select name="orders">
        <option>최신순</option>
        <option>오래된순</option>
        <option>가격 높은순</option>
        <option>가격 낮은순</option>
      </select>
      <div>
        <div>
          <input type="date" />
          <input type="date" />
        </div>
      </div>
    </div>
  );
};

export default SortList;
