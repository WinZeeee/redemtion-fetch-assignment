import React from "react";
import { ReactComponent as Bell } from "../../assets/bell-icon.svg";
import { ReactComponent as Card } from "../../assets/card-icon.svg";
import { ReactComponent as Home } from "../../assets/home-icon.svg";
import { ReactComponent as User } from "../../assets/user-icon.svg";

export default function Footer() {
  return (
    <div className="flex justify-around mt-[14px] py-[24px] border-t-[2px] border-t-gray-07">
      <Home />
      <span className="relative inline-block">
        <Bell />
        <span class="absolute top-1 left-6 inline-block w-3 h-3 transform bg-[#FC5A5A] rounded-full"></span>
      </span>
      <Card />
      <User />
    </div>
  );
}
