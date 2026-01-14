import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules"; 
import "./carrousel.css";
export default function Carousel() {
  return (
    <div className="carrousel">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img src="/lacuenta2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/flores2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/corazon-roto.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/navidad.jpg" />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
