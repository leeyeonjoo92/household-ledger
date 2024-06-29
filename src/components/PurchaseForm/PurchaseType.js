import React from "react";

const PurchaseType = () => {
  return (
    <>
      <select name="types" className="purchase__input">
        <option value="식료품">식료품</option>
        <option value="의류">의류</option>
        <option value="가전제품">가전제품</option>
        <option value="기타">기타</option>
      </select>
    </>
  );
};

export default PurchaseType;
