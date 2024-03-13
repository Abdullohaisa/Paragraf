import caruselImg from '../../../../assets/carusel-img.svg'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/scrollbar';
import './Carusel.css'
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { useSelector } from "react-redux";



import { Scrollbar } from 'swiper/modules';

export default function Caursel() {
  const mode = useSelector((state) => state.darkMode.mode);
  return (
    <div className='container'>
      <Swiper
      //  loop={true}
      //  spaceBetween={10}
       modules={[Scrollbar, Navigation]}
       navigation={{
        nextEl:".button-next-slide",
        prevEl:".button-prev-slide"
    }}
        scrollbar={{
          hide: true,
        }}
       
        className="mySwiper"

      >
        <SwiperSlide id={ mode === false ? "carusel-dark" : "carusel"}>
        
            <div className='carusels-box'>
              <p>Smartfonlar bo'lib to'lashga</p>
              <h5>Sevimli smartfoningizni bo'lib to'lashga sotib oling</h5>
              <button>Barchasini ko'rish</button>
            </div>
            <img src={caruselImg} alt="" />

        </SwiperSlide>
        <SwiperSlide id={ mode === false ? "carusel-dark" : "carusel"}>
        
            <div className='carusels-box'>
              <p>Smartfonlar bo'lib to'lashga</p>
              <h5>Sevimli smartfoningizni bo'lib to'lashga sotib oling</h5>
              <button>Barchasini ko'rish</button>
            </div>
            <img src={caruselImg} alt="" />

        </SwiperSlide>
        <SwiperSlide id={ mode === false ? "carusel-dark" : "carusel"}>
        
            <div className='carusels-box'>
              <p>Smartfonlar bo'lib to'lashga</p>
              <h5>Sevimli smartfoningizni bo'lib to'lashga sotib oling</h5>
              <button>Barchasini ko'rish</button>
            </div>
            <img src={caruselImg} alt="" />

        </SwiperSlide>
       
        <button className="button-next-slide">awdaw</button>
        <button className="button-prev-slide">awdwad</button>
      </Swiper>
    </div>
  );
}
