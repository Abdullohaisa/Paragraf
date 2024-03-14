import { useDispatch, useSelector } from "react-redux";
import "./Basket.css";
import React from "react";
import BasicTable from "./Product-Table";
import { useEffect } from "react";
import {
  addToCart,
  orderTotalCost,
  removeSingleOrder,
} from "../../../Redux/cartSlice";
import trues from "../../../assets/true.svg";
import Footer from "../../UI/Footer";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from '@mui/icons-material/Clear';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


function Basket() {
  const products = useSelector((state) => state?.basket?.items);
  const mode = useSelector((state) => state.darkMode.mode);
  const totalPrice = useSelector((state) => state?.basket?.totalCost);
  const [checked, setChecked] = React.useState([]);
  const dispatch = useDispatch();

  const addItem = (product) => {
    dispatch(addToCart(product));
  };

  const removeSingleItem = (productId) => {
    dispatch(removeSingleOrder(productId));
  };

  const removeCheckedItems = () => {
    checked.forEach((productId) => {
      dispatch(removeOrder(productId));
    });
    setChecked([]);
  };

  const handleCheck = (productId) => {
    if (checked.includes(productId)) {
      setChecked(checked.filter((id) => id !== productId));
    } else {
      setChecked([...checked, productId]);
    }
  };

  useEffect(() => {
    dispatch(orderTotalCost());
  }, [addItem, removeSingleItem]);

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
                <div className="basket-table">
                  <ul className="table-clear-all">
                    <li>Hammasi: 2 ta tovar</li>
                    <li>
                      <DeleteIcon />
                    </li>
                  </ul>

                  {products.map((product, i) => (
                    <div className="basket-table-item">

                      <div className="table-img-box">

                        <div className="table-img-boxes">
                        <img className="b-table-img" src={product.item.thumbnail}/> 
                              <div>
                                <p>{product.item.title}</p>
                                 <ul>
                                  <li><FavoriteBorderOutlinedIcon/></li>  |
                                  <li><ClearIcon/></li>
                                 </ul>
                              </div>
                        </div>

                        <ul>
                          <li>${product.item.price}.00</li>
                          <li>

                            <div className="t-counter-btn">
                              <button
                                onClick={() =>
                                  removeSingleItem(product.item.id)}>
                                <RemoveIcon />
                              </button>

                              <h2>{product.quantity}</h2>

                              <button onClick={() => addItem(product.item)}>
                                <AddIcon />
                              </button>
                            </div>

                          </li>
                        </ul>
                      </div>

                {/* awdawdawdawdw */}

                     <div className="table-box-res">

                         <div>
                         <img className="b-table-img" src={product.item.thumbnail}/> 
                         <ul>
                          <li>{product.item.title}</li>
                          <li>
                            <div className="res-counter-btn">
                              <button
                                onClick={() =>
                                  removeSingleItem(product.item.id)}>
                                <RemoveIcon />
                              </button>

                              <h2>{product.quantity}</h2>

                              <button onClick={() => addItem(product.item)}>
                                <AddIcon />
                              </button>
                            </div>

                          </li>
                        </ul>

                         </div>
                         <p>${product.item.price}.00</p>

                      <div className="res-like-btn">
                        <button><FavoriteBorderOutlinedIcon/></button>
                        <button><ClearIcon/></button>
                      </div>

                      </div>                   

                {/* awdawdawdawdw */}

                    </div>
                  ))}
                </div>
              </div>
              <div className={`cart-price-box ${mode ? "home" : "home-dark"}`}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"10px"}}>
                <h1>Price</h1>
                <h2>${totalPrice}</h2>
                </div>
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
                      {product.item.title} -{" "}
                      <span>{product.quantity} dona</span>
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
