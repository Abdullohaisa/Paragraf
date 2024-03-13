import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { addToCart } from "../../../../Redux/cartSlice";
import { favourite } from "../../../../Redux/favouriteSlice";
import "./style.css";

const CardTwo = ({ img, product, onClick }) => {
  const mode = useSelector((state) => state.darkMode.mode);
  const like = useSelector((state) => state.favourite.like);
  const dispatch = useDispatch();

  const prevent = (event) => {
    event.stopPropagation();
  };


  const likeItem = () => {
    dispatch(favourite(product));
  };

  const addBasket = () => {
    dispatch(addToCart(product));
  };

  return (
    <div onClick={onClick} id={mode === false ? "dark" : "light"} className="card-2">
      <img src={img} />
      <div>
        <ul>
          <li className="card-2-text-1">Smartfonlar</li>
          <li className="card-2-text-2">Смартфон Apple iPhone 14 Pro 512Gb Black</li>
        </ul>

        <ul className="card-2-ul-2">
          <li className="card-2-text-4">1 000 000 so`m</li>
          <li className="card-2-text-5">x 12 oy</li>
        </ul>

        <ul>
          <li className="card-2-text-6">1200 650 000 so`m</li>
          <li className="card-2-text-7">120 650 000 so`m</li>
        </ul>
      </div>

      <div className="card-2-like">
        <span>20%</span>
        <ul>
        <li onClick={(event => event.stopPropagation())}>
            <FavoriteIcon 
            onClick={() => likeItem(product) }
            className="like-icon"
            style={like === true ? {color:"red"}:{color:"black"}} />
          </li>
        </ul>
      </div>
      <button
        onClick={(event) => {
          prevent(event);
          addBasket();
        }}
        className={mode === false ? "add-basket-btn-dark" : "add-basket-btn"}>
        <AddShoppingCartIcon />
      </button>
    </div>
  );
};

export default CardTwo;
