import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Thumbs } from "swiper/modules";
import {
  burritoBowl2Img,
  burritoBowl3Img,
  burritoBowlImg,
} from "@/assets/data";

// styles
import "swiper/css";

const DishDetailsSwiperItem = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const dishImages = images || [
    { url: "https://placehold.jp/150x150.png", title: "image" },
  ];

  return (
    <div className="grid grid-cols-1">
      <div>
        <Swiper
          modules={[Navigation, Thumbs, Controller]}
          spaceBetween={24}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className="cart-swiper"
          loop
        >
          {dishImages?.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                width={500}
                height={430}
                alt={img.title}
                src={img.url}
                className="mx-auto h-full max-w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        className="cart-swiper-pagination justify-center"
        wrapperClass="flex-wrap justify-center gap-2 w-full"
        loop={false}
        spaceBetween={10}
        slidesPerView={4}
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs]}
        watchSlidesProgress
      >
        {dishImages?.map((img, idx) => (
          <SwiperSlide
            key={idx}
            className={"!h-24 !w-24 cursor-pointer lg:!h-32 lg:!w-32"}
          >
            <img
              width={124}
              height={124}
              alt={img.title}
              src={img.url}
              className="h-full w-full rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DishDetailsSwiperItem;
