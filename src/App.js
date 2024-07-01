import React, { useState } from "react";
import "./App.css";
import PurchaseForm from "./components/PurchaseForm/PurchaseForm";
import SortList from "./components/SortList/SortList";
import ItemList from "./components/ItemList/ItemList";

function App() {
  const [purchases, setPurchases] = useState([
    {
      id: "i1",
      item: "햇반",
      price: 9900,
      type: "식료품",
      date: new Date(2024, 6, 29),
      memo: {
        isChecked: true,
        memoText: "3개입",
      },
      repurchase: true,
    },
  ]);

  const getFormData = (data) => {
    setPurchases([
      {
        id: Math.random().toString(),
        item: data.name,
        price: data.price,
        type: data.type,
        date: new Date(data.date),
        isChecked: data.isChecked,
        memoText: data.memoText,
        repurchase: data.repurchase,
      },
    ]);
  };

  return (
    <>
      <PurchaseForm getFormData={getFormData} />
      <SortList />
      <ItemList getFormData={getFormData} items={purchases} />
    </>
  );
}

export default App;
