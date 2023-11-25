import React from "react";
import SearchBar from "./searchBar";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./productsDetails";

export default function App (){

  return (
    <>
      <h1>Our product list</h1>
      <Routes>
        <Route path="/" element={<SearchBar/>}/>
        <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>

    </>
  );
}
