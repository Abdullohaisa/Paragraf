import React, { useState, useEffect } from "react";
import Caursel from "./Carusel";
import "./Home.css";
import CardOne from "../../UI/Product/card.1";
import axios from "axios";
import CardTwo from "../../UI/Product/card.2";
import banner from "../../../assets/public/images/main/banner.png";
import Brend from "../../UI/Brend";
import News from "../../UI/News";
import Footer from "../../UI/Footer";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";


export const api = "https://dummyjson.com/products";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [loading1, setLoading1] = useState(true); 
  const mode = useSelector((state) => state.darkMode.mode);
  const navigate = useNavigate()
  const pro = useSelector((state) => state.favourite.likeCard)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setProduct(response.data.products);
        setLoading1(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);



  const singleProduct = (id) => {
    navigate(`/product/${id}`);
  }


 

  return (
    <div className={mode === false ? "home-dark" : "home"}>
      <Caursel />
      <div className="container">
        <div className="product-box">
          <p>Bo'lib to'lashga</p>
          <div className="product1-box">
            {loading1 ? (
              <div className="product1-box1">
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  className="skeleton"
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  className="skeleton"
                  color
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ) : (
              product.slice(0, 6).map((product, i) => (
                <CardOne
                  key={i}
                  img={product.thumbnail}
                  title={product.title}
                  onClick={() => singleProduct(product.id)}
                />
              ))
            )}
          </div>
        </div>
        <img className="banner" src={banner} alt="" />
        <div className="product-box">
          <p>Qimmatbaho buyumlar</p>
          <div className="product1-box">
            {loading1 ? (
              <div  className="product1-box1 ">
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  className="skeleton"
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{ backgroundColor: "rgba(37, 60, 81, 0.599)", borderRadius: "10px" }}
                />
                <Skeleton
                  className="skeleton"
                  color
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{ backgroundColor: "rgba(37, 60, 81, 0.599)", borderRadius: "10px" }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ) : (
              product.slice(0, 6).map((product, i) => (
                <CardOne
                  key={i}
                  img={product.thumbnail}
                  title={product.title}
                  onClick={() => singleProduct(product.id)}
                />
              ))
            )}
          </div>
        </div>
        <div className="product-box">
          <p>Yangi texnikalar</p>
          <div className="product2-box">
            {loading1 ? (
              <div className="product1-box1">
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  variant="rectangular"
                  width={275}
                  height={410}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={275}
                  height={410}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={275}
                  height={410}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={275}
                  height={410}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ) : (
              product.slice(0, 4).map((products, i) => (
                <CardTwo
                  key={i}
                  img={products.thumbnail}
                  title={products.title}
                  category={product.scategory}
                  products={product.slice(0, 4)}
                  product={products}
                  onClick={() => singleProduct(products.id)}
                />
              ))
            )}
          </div>
        </div>
        <img className="banner" src={banner} alt="" />
        <div className="product-box">
          <p>Qimmatbaho buyumlar</p>
          <div className="product1-box">
            {loading1 ? (
              <div id={Skeleton} className="product1-box1">
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={222}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ) : (
              product.slice(0, 6).map((products, i) => (
                <CardOne
                  key={i}
                  img={products.thumbnail}
                  title={products.title}
                  onClick={() => singleProduct(product.id)}
                />
              ))
            )}
          </div>
        </div>
        <News />
        <Brend />
        <div className="product-box">
          <p>Ko'rilgan mahsulotlar</p>
          <div className="product2-box">
            {loading1 ? (
              <div className="product1-box1">
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  variant="rectangular"
                  width={275}
                  height={410}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={275}
                  height={410}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={275}
                  height={410}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
                <Skeleton
                  variant="rectangular"
                  width={275}
                  height={410}
                  style={{
                    backgroundColor: "rgba(37, 60, 81, 0.599)",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ) : (
              product.slice(0, 4).map((product, i) => (
                <CardTwo
                  key={i}
                  img={product.thumbnail}
                  title={product.title}
                  category={product.category}
                  product={product}
                  onClick={() => singleProduct(product.id)}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
