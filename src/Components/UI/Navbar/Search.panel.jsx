import "./Search.panel.css";
import { Search } from "@mui/icons-material";
import { Clear } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchPanel = ({ searchData, closePanels, clearInput }) => {
  const navigate = useNavigate()

  
  const singleProduct = (id) => {
    navigate(`/product/${id}`);
    console.log(id)
    closePanels()
  }

  const okey = (id) => {
    clearInput()
    singleProduct(id)
  }



  
    if (!(searchData.length === 30 || searchData.length === 0)) {
      return (
        <div className="search-panel">
     <div className="search-panel-box">
      <div className="search-panel-p"><p>Ommabop so'rovlar</p><span>Tozalash</span></div>
       {searchData.slice(0, 8).map((item, i) => (
         <div  onClick={() => okey(item.id)} className="search-panel-item" key={i}><span><Search className="search-icon"/>{item.title}</span><Clear className="search-icon"/></div>
       ))}
     </div>
   </div>
     )   
    }
   

};

export default SearchPanel;
