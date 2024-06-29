import React from "react";
import PurchaseForm from "./components/PurchaseForm/PurchaseForm";
import SortList from "./components/SortList/SortList";
import ItemList from "./components/ItemList";

function App() {
  return (
    <>
      <PurchaseForm />
      <SortList />
      <ItemList />
    </>
  );
}

export default App;
