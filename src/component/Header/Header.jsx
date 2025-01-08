import React from "react";
import govee from "../../assets/govee.svg";
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { PiShoppingCart } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
function Header() {
  return (
    <div className="">
      <div className="flex text-[16px] font-normal tracking-wider	 text-white justify-center items-center gap-8 bg-[#18a2e4] h-10">
        <p>🎉Light Up 2025 with Govee!🎉</p>
        <p className="underline decoration-[1px]">End in: 19H 46M 60S</p>
        <button className="bg-white text-[13px] py-[1px] px-3 rounded-xl text-[#18a2e4]">
          Shop now
        </button>
      </div>
      {/*  */}

      <div className="font-normal text-[14px] flex justify-between px-16 w-[100%] bg-[#f5f5f7] items-center h-9 mt-[1px]">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.shopify.com/s/files/1/0512/3489/8105/files/shipping_2x_700b8ffc-0152-4385-9ee1-d504e6817a92.png?v=1730950687&width=200&crop=center"
            alt=""
            className="w-5 h-5"
          />
          <p>Fast Free Shipping</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.shopify.com/s/files/1/0512/3489/8105/files/Safe_Secure_2x_df80510e-b6ee-4ff0-9a95-c24c7f17a13e.png?v=1730950687&width=200&crop=center"
            alt=""
            className="w-5 h-5"
          />
          <p>30 Day Money Back Guarantee</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.shopify.com/s/files/1/0512/3489/8105/files/support_2x_1391fcf5-cb62-41ee-8946-bd05d4b65085.png?v=1730950686&width=200&crop=center"
            alt=""
            className="w-5 h-5"
          />
          <p>Lifetime Customer Support</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.shopify.com/s/files/1/0512/3489/8105/files/recall_2x_229b74f5-e2f6-4132-91ee-1a2d835f2eff.png?v=1730950687&width=200&crop=center"
            alt=""
            className="w-5 h-5"
          />
          <p className="hover:text-[#18a2e4]">Recall Information</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.shopify.com/s/files/1/0512/3489/8105/files/education_discount_2x_36e0dd91-d643-40b4-b503-21b34e062631.png?v=1730950686&width=200&crop=center"
            alt=""
            className="w-5 h-5"
          />
          <p className="hover:text-[#18a2e4]">Education Discount</p>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between font-normal pl-16 pr-10 items-center h-12 sticky top-[0px]">
        <div>
          <img src={govee} alt="" className="w-[100px]" />
        </div>
        <div className="flex text-[14px] justify-between gap-10 items-center">
          <p>SMART LIGHTS</p>
          <p>SMART APPLIANCES</p>
          <p>DEALS</p>
          <p>ABOUT US</p>
          <p>SUPPORT</p>
          <p>COMMUNITY</p>
        </div>
        <div className="flex gap-3">
          <CiSearch size={30} color="grey" />
          <RxAvatar size={30} color="grey" />
          <PiShoppingCart size={28} color="grey" />
          <div className="flex">
            <img
              src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1273037/assets/icon_language-C2iG23Nq.svg"
              alt=""
              className="w-8 h-8 -mr-2"
            />
            <RiArrowDropDownLine
              size={30}
              className="hover:-rotate-180 duration-500"
              color="grey"
            />
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default Header;
