import Navbar from "../UI/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Category from "../UI/CategoryBar";
import Footer from "../UI/Footer";

const MainLayout = () => {
  
  const [backPanel, setBackPanel ] = useState(false)
  const [searchModalPanel, setSearchModalPanel] = useState(false);
  const [category, setCategory] = useState(false)


  const openCategory = () => {
    setCategory(!category)
  }

 const closeCategory = () => {
    setCategory(false)
  }
  

 

  const closePanels = () => {
     setBackPanel(false)
     setSearchModalPanel(false)
  }

  

  return (
    <>
     {category && <Category setCategory={setCategory}/>}
     {backPanel && <div onClick={closePanels}  className="close-panel-box"></div>}
      <Navbar 
      openCategory={openCategory} 
      setSearchModalPanel={setSearchModalPanel}  
      searchModalPanel={searchModalPanel}  
      setBackPanel={setBackPanel}
      closeCategory={closeCategory} 
      closePanels={closePanels}
      />
      
      <Outlet />
      {/* <Footer/> */}
    </>
  );
};

export default MainLayout;
