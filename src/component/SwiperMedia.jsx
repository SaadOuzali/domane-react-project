import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import im from './certix.png'
import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import MediaCard from "./Mediacard";
import { arr2 } from "../arrayImages";
export default function SwiperMedia({ data }) {
  console.log("1", data);
  const [images, setImages] = useState(data);

  console.log("2", images);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((img) => {
          return (
            <SwiperSlide>
              <MediaCard img={`/${img.img}`} name={img.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
