import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as LIcon } from "../../../assets/coins-L-vector.svg";

export default function Carousel(props) {
  const CarouselItems = props.items;
  const availableCoins = 25;

  const renderCarousel = () => {
    return CarouselItems.map((item) => {
      return (
        <SwiperSlide className="w-[200px] h-[240px] rounded-[4px] shadow-custom">
          <img alt="deals showcase" src={item.img} />
          <div className="p-[16px]">
            {renderCoins(item.coinAmount)}
            <p className="font-normal text-base text-gray-04">
              {item.description}
            </p>
          </div>
        </SwiperSlide>
      );
    });
  };

  const renderCoins = (coinAmount) => {
    if (availableCoins > coinAmount) {
      return (
        <p className="mb-[8px] font-semibold text-base text-blue-dark">
          {coinAmount} Coins
        </p>
      );
    }
    return (
      <div className="flex items-center">
        <LIcon />
        <p className="font-semibold text-base text-gray-03 ml-[4px]">
          {coinAmount}
        </p>
      </div>
    );
  };

  return (
    <div className="mt-[24px]">
      <h1 className="text-2xl font-semibold ml-[24px] mb-[26px]">
        {props.title}
      </h1>
      <Swiper
        className="pl-[24px] pb-[24px]"
        slidesPerView={"auto"}
        spaceBetween={30}
      >
        {renderCarousel()}
      </Swiper>
    </div>
  );
}
