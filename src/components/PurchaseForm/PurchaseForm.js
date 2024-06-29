import React from "react";
import PurchaseType from "./PurchaseType";

const PurchaseForm = () => {
  return (
    <>
      <form id="purchase-form">
        <div className="purchase__inputs">
          <label className="purchase__label">이름</label>
          <input type="text" className="purchase__input" />
        </div>
        <div className="purchase__inputs">
          <label className="purchase__label">가격</label>
          <input type="number" className="purchase__input" />
        </div>
        <div className="purchase__inputs">
          <label className="purchase__label">유형</label>
          <PurchaseType />
        </div>
        <div className="purchase__inputs">
          <label className="purchase__label">날짜</label>
          <input type="date" className="purchase__input" />
        </div>
        <div className="purchase__inputs">
          <label className="purchase__label">메모</label>
          <input type="checkbox" className="purchase__input" />
          메모 작성
          <input type="text" className="purchase__input" />
        </div>
        <div className="purchase__inputs">
          <label className="purchase__label">재구매 의사</label>
          <input type="radio" className="purchase__input" />
          있음
          <input type="radio" className="purchase__input" />
          없음
        </div>
      </form>
    </>
  );
};

export default PurchaseForm;
