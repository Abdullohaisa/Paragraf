import caruselImg from "../../../../assets/carusel-img.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "./Carusel.css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import "swiper/css/keyboard";
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  Thumbs,
  Keyboard,
} from "swiper/modules";
import { useSelector } from "react-redux";

export default function Caursel() {
  const mode = useSelector((state) => state.darkMode.mode);
  return (
    <div className="container">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          Scrollbar,
          Thumbs,
          Keyboard,
        ]}
        autoplay={{ delay: 0 }}
        keyboard={true}
        speed={4000}
        loop={true}
        spaceBetween={30}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination={{
          el: ".swiper-pagination", // Pagination yordamchisi
          clickable: true, // Pagination tugmalarini bosish orqali slaydlarni o'tkazish
        }}
        scrollbar={{
          el: ".swiper-scrollbar", // Scrollbar yordamchisi
          hide: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide id={mode === false ? "carusel-dark" : "carusel"}>
          <div className="carusel-box">
            <p>Smartfonlar bo'lib to'lashga</p>
            <h5>Sevimli smartfoningizni bo'lib to'lashga sotib oling</h5>
            <button>Barchasini ko'rish</button>
          </div>
          {/* <img src={caruselImg} alt="" /> */}
        </SwiperSlide>
        <SwiperSlide id={mode === false ? "carusel-dark" : "carusel"}>
          <div className="carusel-box">
            <p>Smartfonlar bo'lib to'lashga</p>
            <h5>Sevimli smartfoningizni bo'lib to'lashga sotib oling</h5>
            <button>Barchasini ko'rish</button>
          </div>
          {/* <img src={caruselImg} alt="" /> */}
        </SwiperSlide>
        <SwiperSlide id={mode === false ? "carusel-dark" : "carusel"}>
          <div className="carusel-box">
            <p>Smartfonlar bo'lib to'lashga</p>
            <h5>Sevimli smartfoningizni bo'lib to'lashga sotib oling</h5>
            <button>Barchasini ko'rish</button>
          </div>
          {/* <img src={caruselImg} alt="" /> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
