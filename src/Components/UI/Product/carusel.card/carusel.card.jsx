import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { Autoplay } from 'swiper/modules';

export default function CaruselCard1({ children }) {
  return (
    <div className="carusel-card-1">
      <Swiper
        modules={[Autoplay]} // Modulni modules propi orqali o'rnatish
        autoplay={{ delay: 100 }} // Autoplay o'rnatingan joyda to'g'ri ishlatish
        speed={100}
        spaceBetween={30}
        loop={true}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </div>
  );
}
