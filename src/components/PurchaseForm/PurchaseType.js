import React from "react";

const PurchaseType = () => {
  return (
    <>
      <select name="types" className="purchase__input sort-list">
        <option onChange={inputTypeHandler} value="">
          유형선택
        </option>
        <option onChange={inputTypeHandler} value="식료품">
          식료품
        </option>
        <option onChange={inputTypeHandler} value="의류">
          의류
        </option>
        <option onChange={inputTypeHandler} value="가전제품">
          가전제품
        </option>
        <option onChange={inputTypeHandler} value="기타">
          기타
        </option>
      </select>
    </>
  );
};

export default PurchaseType;
