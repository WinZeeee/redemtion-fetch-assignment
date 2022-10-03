import React from "react";
import { ReactComponent as LeftArrow } from "../../assets/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";
import {
  FOOD_AND_BEVERAGE_ITEMS,
  PETROL_ITEMS,
  RENTAL_REBATE_ITEMS,
} from "../../common/CONSTANTS";
import Footer from "../../components/Footer/Footer";
import Carousel from "./Carousel/Carousel";

export default function Home() {
  return (
    <div>
      <div className="bg-gray-01 text-white h-[428px] mb-[216px] p-6">
        <button className="w-[40px] h-[40px] mb-4 bg-white rounded-full flex justify-center items-center">
          <LeftArrow />
        </button>
        <h1 className="font-semibold text-[2.375rem]">Silver Tier</h1>
        <p className="font-normal leading-6 tracking-tight text-gray-05">
          In Silver Tier, every 1$ in rental fee paid, you get 2 coins to redeem
          exclusive rewards
        </p>
        <div className="bg-scattered_shapes h-[416px] p-6 mt-[20px] rounded-lg shadow-custom bg-white">
          <p className="font-normal text-sm leading-6 text-gray-05">
            Available Coin balance
          </p>
          <p className="font-normal text-5xl text-gray-01 leading-[56px] mt-2">
            340
          </p>
          <div className="w-full bg-[#E2E2EA] rounded-full h-1 mt-[32px] mb-[33px]">
            <div
              className="bg-[#0062FF] h-1 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
          <p className="font-normal text-base text-gray-04">
            You have paid rental fee for $1,200. Pay more $800 to achieve Gold
            Tier.
          </p>
          <button className="text-blue-dark text-base font-normal mt-4 flex items-center">
            View tier benefits <RightArrow className="ml-[9px]" />
          </button>
          <button className="bg-button-black w-full text-white font-semibold text-lg rounded py-[14px] mt-6">
            My Coupons
          </button>
          <p className="text-center text-gray-05 font-normal text-sm mt-4">
            Updated: 02/11/2021
          </p>
        </div>
      </div>

      <Carousel title="Petrol" items={PETROL_ITEMS} />
      <Carousel title="Rental Rebate" items={RENTAL_REBATE_ITEMS} />
      <Carousel title="Food and Beverage" items={FOOD_AND_BEVERAGE_ITEMS} />

      <Footer />
    </div>
  );
}
