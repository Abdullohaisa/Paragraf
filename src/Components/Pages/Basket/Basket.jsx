import { useDispatch, useSelector } from "react-redux";
import "./Basket.css";
import BasicTable from "./Product-Table";
import { useEffect } from "react";
import { orderTotalCost } from "../../../Redux/cartSlice";
import trues from  '../../../assets/true.svg';
import Footer from "../../UI/Footer";

function Basket() {
  const products = useSelector((state) => state?.basket?.items);
  const mode = useSelector((state) => state.darkMode.mode);
  const totalPrice = useSelector((state) => state?.basket?.totalCost);
  const dispatch = useDispatch();
  
  // console.log('awd' ,products.item.title)

  useEffect(() => {
    dispatch(orderTotalCost());
  }, [dispatch]);

  return (
    <div className={`basket-box ${mode ? "home" : "home-dark"}`}>
      <div className="container">
        <div className="basket-page">
          <p className="basket-title">Savat</p>
          {products.length === 0 ? (
            
            <div className="free-basket">
              <p>Savatcha hali bo'sh</p>
              <h3>Yana nimadir qo'shishni hohlaysizmi !?</h3>
            </div>
          ) : (
            <div className="cart-main-box">
              <div className="cart-list-box">
                <BasicTable mode={mode} products={products} />
              </div>

              <div className={`cart-price-box ${mode ? "home" : "home-dark"}`}>
                <h1>Price</h1>
                <h2>${totalPrice}</h2>
                <div className="trues">
                  <img src={trues} alt="True" />
                  <div className="zakaz">
                    <p>Buyurtmangizni bepul yetkazib beramiz</p>
                    <h4>Yana 488 000 so'm xaridingiz evaziga</h4>
                  </div>
                </div>
                <ul className="jami">
                  <li>Jami</li>
                  <li>${totalPrice}.00</li>
                </ul>
                {products.map((product, i) => (
                  <ul key={i} className="special-price">
                    <li>
                      {product.item.title}  - <span>{product.quantity} dona</span>
                    </li>
                    <li>${product.quantity * product.item.price}.00</li>
                  </ul>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Basket;
