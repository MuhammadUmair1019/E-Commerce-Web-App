import React from "react";
import Annocument from "../../component/annocument";
import Categories from "../../component/category";
import Navbar from "../../component/navbar";
import Products from "../../component/products";
import Slider from "../../component/slider";
import NewsLetter from "../../component/newsletter";
import Footer from "../../component/footer";

export default function Home() {
  return (
    <React.Fragment>
      <Annocument />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer/>
    </React.Fragment>
  );
}
