import './style.css'
import news from '../../../assets/news.svg'
import { useSelector } from 'react-redux';


const News = () => {
  const mode = useSelector((state) => state.darkMode.mode);
  return (
    <div  className='news-box'>
        <p>Yangiliklar</p>
          
          <div  className='news-boxes'>
          <div id={mode === false ? "dark":"light"} className="news">
          <div>
            <img src={news} alt="" />
          </div>
          <div className='news-text'>
              <h3>Moskvada tishni davolash</h3>
              <h5>Odamlarning 80% dan ortig'i tish shifokoriga borishdan qo'rqishadi. Bu ma'lumotlar asossiz emas...</h5>
              <button className={mode=== false?'btn-news dark-btn':'btn-news'}>Batafsil o'qish</button>
          </div>
        </div>
        <div id={mode === false ? "dark":"light"} className="news">
          <div>
            <img src={news} alt="" />
          </div>
          <div className='news-text'>
              <h3>Moskvada tishni davolash</h3>
              <h5>Odamlarning 80% dan ortig'i tish shifokoriga borishdan qo'rqishadi. Bu ma'lumotlar asossiz emas...</h5>
              <button className={mode=== false?'btn-news dark-btn':'btn-news'}>Batafsil o'qish</button>
          </div>
        </div>
        <div id={mode === false ? "dark":"light"} className="news">
          <div>
            <img src={news} alt="" />
          </div>
          <div className='news-text'>
              <h3>Moskvada tishni davolash</h3>
              <h5>Odamlarning 80% dan ortig'i tish shifokoriga borishdan qo'rqishadi. Bu ma'lumotlar asossiz emas...</h5>
              <button className={mode=== false?'btn-news dark-btn':'btn-news'}>Batafsil o'qish</button>
          </div>
        </div>
          </div>
    </div>
  )
}

export default News
