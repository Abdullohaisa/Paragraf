import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import Home from "./Components/Pages/Home/Home";
import RegisterName from "./Components/UI/Register/RegisterName";
import RegisterPassword from "./Components/UI/Register/RegisterPassword";
import RegisterPhone from "./Components/UI/Register/RegisterPhone";
import Category from "./Components/Pages/Category";
import CategoryPage from "./Components/Pages/Category/category.pages";
import ProductPage from "./Components/Pages/Product.page.jsx";
import Basket from "./Components/Pages/Basket/Basket.jsx";
import Favorite from "./Components/Pages/Favorites";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register/phone" element={<RegisterPhone />} />
        <Route path="/register/password" element={<RegisterPassword />} />
        <Route path="/cart" element={<Basket/>} />
        <Route path="/register/name" element={<RegisterName />} />

        <Route path="/category/:categoryName" element={<CategoryPage/>} />
        <Route path="/product/:productId" element={<ProductPage/>} />
        <Route path="/category" element={<Category />} />

        <Route path="/favorites" element={<Favorite />} />
        <Route path="/category/:categoryName" element={<CategoryPage/>} />
        <Route path="/product/:productId" element={<ProductPage/>} />
        <Route path="/category" element={<Category />} />
        

      </Route>
    </Routes>
  );
};

export default App;
