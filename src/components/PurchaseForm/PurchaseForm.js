import React from "react";
import PurchaseType from "./PurchaseType";
import "./PurchaseForm.css";

const PurchaseForm = () => {
  return (
    <>
      <form id="purchase-form">
        <div className="purchase__labels">
          <label className="purchase__label">이름</label>
          <label className="purchase__label">가격</label>
          <label className="purchase__label">유형</label>
          <label className="purchase__label">날짜</label>
          <label className="purchase__label">메모</label>
          <label className="purchase__label">재구매 의사</label>
        </div>
        <div className="purchase__inputs">
          <input type="text" className="purchase__input" />
          <input type="number" className="purchase__input" />
          <PurchaseType />
          <input type="date" className="purchase__input" />
          <div className="purchase__input purchase-memo__inputs">
            <input type="checkbox" />
            메모 작성
            <input type="text" className="purchase-memo__input" />
          </div>
          <div className="purchase__input purchase-repurchase__inputs">
            <input type="radio" />
            있음
            <input type="radio" />
            없음
          </div>
        </div>
      </form>
    </>
  );
};

export default PurchaseForm;
