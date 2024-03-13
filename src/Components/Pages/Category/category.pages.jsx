import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardTwo from "../../UI/Product/card.2";
import { useSelector } from "react-redux";

function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const mode = useSelector((state) => state.darkMode.mode);

  // console.log(categoryName)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${categoryName}`
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [categoryName]);

  // console.log(products);

  return (
    <div style={{paddingBottom:"100px"}} className={mode?"home":"home-dark"}>
      <div className="container">
      <h2> {categoryName}</h2>
     <div className="product-box">
     <div className="product2-box">
        {products.length > 0 &&
          products.map((product, i) => (
            <CardTwo 
            key={i} 
            img={product.thumbnail} 
            title={product.title} 
            category={product.category}
            />
          ))}
      </div>
     </div>
    </div>
    </div>
  );
}

export default CategoryPage;
