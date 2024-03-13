import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { useSelector } from "react-redux";
import { Rating } from "@mui/material";
import Slider from "react-slick";


const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const mode = useSelector((state) => state.darkMode.mode);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [productId]);

  const settings = {
    customPaging: function() {
      return (
        <div className="aaa">
            <img className="slider-btn" src={product.thumbnail} />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dot",
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div className={mode === false ? "home-dark" : "home"}>
      <div className="main-product-box">
        <div className="container">
          <p className="product-title">
            Asosiy / Smartfonlar / {product.title}
          </p>
          <br />
          <div className={mode === false ? "single-product-dark" : "single-product"}>
            <h2>{product.title}</h2>
            <div className="star-vote">
              <p>Артикул: 35174913</p>
              <h4 className="star-vote-text">Отзывов:21</h4>
              <Rating
                name="simple-controlled"
                // value={value}
                onChange={(event, newValue) => {
                  // setValue(newValue);
                }}
              />
            </div>
            <div className="product-info">
              <div>
             
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <img className="slider-img" src={product.thumbnail} /> 
                </div>
                <div>
                  <img className="slider-img" src={product.thumbnail} />
                </div>
                <div>
                  <img className="slider-img" src={product.thumbnail} />
                </div>
                <div>
                  <img className="slider-img"  src={product.thumbnail}/>.
                </div>
              </Slider>
            </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
