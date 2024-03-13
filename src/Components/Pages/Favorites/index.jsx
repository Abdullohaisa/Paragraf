import { useSelector } from "react-redux"
import CardTwo from "../../UI/Product/card.2";
import Footer from "../../UI/Footer";
import './style.css'


const Favorite = () => {
  const mode = useSelector((state) => state.darkMode.mode);
   const pro = useSelector((state) => state.favourite.likeCard)
     
   console.log(pro)
    
   const singleProduct = (id) => {

   }

  return (
    <div  className={mode?"home":"home-dark"}>
    <div className="container">
     {pro.length === 0 ? (
     <div id={mode === false ? 'dark':'light'} className="free-like">
          <div>
          <p>Hali tanlangan mahsulotlar yo'q :)</p>
           <h5>Sevimli mahsulotlaringizni sevimlilar roʻyxatiga saqlash orqali ularni tezkor qidirish bilan oʻzingizni xursand qiling</h5>
           <button id={mode === false ? 'dark':'light'} >Katalogga o'tish</button>
          </div>
     </div>
     ):(
       <div className="product-box">
       <div className="product2-box">
       { pro.map((product, i) => (
                    <CardTwo
                      key={i}
                      img={product.thumbnail}
                      title={product.title}
                      category={product.category}
                      product={product}
                      onClick={() => singleProduct(product.id)}
                    />
                  ))}
        </div>
       </div>
     )}
  </div>
  <Footer/>
  </div>
  )
}

export default Favorite
