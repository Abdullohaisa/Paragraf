import React from "react";
import './SideBar.css'
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArticleIcon from '@mui/icons-material/Article';
import { darkLight } from "../../../Redux/darkModeSlice";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";




const SideBar = ({open, close}) => {
  const dispatch = useDispatch()

  const mode = useSelector(state => state.darkMode.mode)

  return (

      <div   className={open ?  "side-bar bar-open" : "side-bar"}>
        <div id={!mode ? "dark":"light"}  className="sideBar">
          <div  className="bar-close-btn">
          <button style={!mode ? {color:"white"} : {color:"black"}} onClick={() => close()}><CloseIcon/></button>
          </div>
          <ul className="sideBar-item">
            <li onClick={() => dispatch(darkLight())}><span>{mode?"Light":"Dark"}</span> <div className={mode ? "side-dark-btn" : "side-dark-btn side-light-btn"}><button>{ !mode ? <DarkModeIcon/>:<LightModeIcon/>}</button></div></li>
            <li><span>Kategory</span><ArticleIcon/></li>
           <Link to="/cart" id={mode === false ? "dark":"light"}>
            <li ><span>Savatcha</span><ShoppingCartIcon/></li>
           </Link>
           <Link to="/favorites" id={mode === false ? "dark":"light"}>
             <li><span>Sevimlilar</span><FavoriteIcon/></li>
           </Link>
           
          </ul>
        </div>
      </div>

  );
};

export default SideBar;
