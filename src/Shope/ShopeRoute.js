import Home from "./pages/home/home";
import PorductDetails from "./pages/details/product-details"
import Product from "./pages/products/product";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Cart from "./pages/cart/cart";
import {Route, Routes} from "react-router-dom";

export default function ShopeRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/details" element={<PorductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  );
}

