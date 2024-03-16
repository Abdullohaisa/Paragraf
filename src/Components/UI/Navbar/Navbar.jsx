import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import SearchPanel from "./Search.panel";
import PlaceIcon from '@mui/icons-material/Place';
import { useNavigate } from "react-router-dom";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ScaleIcon from '@mui/icons-material/Scale';
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import { darkLight } from "../../../Redux/darkModeSlice";
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SideBar from "../SideBar";







const Navbar = ({searchModalPanel,  setBackPanel,closeCategory,   setSearchModalPanel, openCategory, closePanels}) => {

  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const navigate = useNavigate()
 

  const dispatch = useDispatch();
  const mode = useSelector((state) => state.darkMode.mode);
  const count = useSelector((state) => state.basket.items.length);
  const favourite = useSelector((state) => state.favourite.likeCard.length);
  // console.log(favourite)


  



  useEffect(() => {

    const fetchSearchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${searchValue}`
        );
        const data = await response.json();
        setSearchData(data.products);
      } catch (error) {
        console.error("Error fetching search data:", error);
      } finally {
        setLoading(false)
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchSearchData();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchValue]);

  
  const panels = () => {
     setBackPanel(true)
     setSearchModalPanel(true)
  }

  const DarkMode = () => {
    dispatch(darkLight());
  }

  const clearInput = () => {
    setSearchValue('')
  }

  const barOpen = () => {
    setSideBarOpen(prev => !prev)
  }

  



  return (
    <div className="navbar">

       <SideBar close={barOpen} open={sideBarOpen}/>

       <div id={mode === false ? "dark":"light"} className="top-navbar">
         <div className="container">
          <div className="top-navabrs">
          <ul>
            <li>Info</li>
            <li>Kontaktlar</li>
            <li>Yetkazib berish</li>
           </ul>
           <ul>
            <li>
              <button id={mode === false ? "dark":"light"} className="dark-mode" onClick={DarkMode}>{ mode === false ?<DarkModeIcon/>:<LightModeIcon/>}</button>
            </li>
            <li>
              <select id={mode === false ? "dark":"light"} className="lang" name="lang" >
                <option value="O’zbekcha">Uz</option>
                <option value="Русскый">Ru</option>
                <option value="English">Eng</option>
                </select>
            </li>
            <li className="PlaceIcon">Toshkent <PlaceIcon/></li>
           </ul>
         </div>
          </div>
       </div>

         <div id={mode === false ? "dark":"light"} className="main-outside-navbar">
      <div className="container">
          <div className="main-navbar">
          <img className={mode === false ? "navbar-logo-dark":"navbar-logo"} onClick={() => {navigate('/'), closeCategory()}}  src={logo} alt="" />
          <ul>
            <li>
              <button onClick={() => openCategory()} className="category-btn">Kategorya</button>
            </li>
            <li>
            <button onClick={() => barOpen()} className="res-top-navbar-btn">
             <MenuIcon/>
           </button>
            </li>
            <li>
              <div className="search-box">

                <input
                  id={mode === false ? "dark":"light"}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onClick={panels}
                  placeholder="qidirish..."
                  type="text"
                  value={searchValue}
                />
                <button onClick={panels}>
                 {loading?  <CircularProgress /> : <Search/>}
                </button>

                {searchModalPanel && <SearchPanel clearInput={clearInput} closePanels={closePanels} searchData={searchData} />}
              </div>
            </li>
            <li className="main-navbar-icon">

              <ScaleIcon onClick={() => closeCategory()} />

              <Link id={mode === false ? "dark":"light"} className="product-counter" to='/favorites'>
               <FavoriteIcon onClick={() => closeCategory()}  style={favourite !== 0 ? {color:"red"}:{}}/>
              </Link>

                <Link id={mode === false ? "dark":"light"} className="product-counter" to={"/cart"}>
                 { count !== 0 && <div className={mode === false ? "product-counters-dark":"product-counters"}>{count}</div>}
                  <ShoppingCartIcon onClick={() => closeCategory()}  />
                </Link>
                
            </li>
          </ul>
          <Link className="enter-link" to="/register/phone">
            <button  className={mode === false ? "enter dark-btn":"enter"}>Kirish</button>
          </Link>
         

          {/* res */}

          <Link className="res-enters" to="/register/phone">
            <button className={mode === false ? "res-enter dark-btn":"res-enter"} >
              <PersonIcon/>
          </button>
          </Link>

          {/* res */}


        </div>
      </div>
    </div>
     
     <div id={mode === false ? "dark":"light"}  className="bottom-navbar">
        <div className="container">
        <ul>
          <li>Aksiya</li>
          <li>Yangiliklar</li>
          <li>Smartfonlar</li>
          <li>Krossovkalar</li>
         </ul>
        </div>

      </div>

     

    </div>
  );
};

export default Navbar;
