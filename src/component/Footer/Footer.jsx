import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { RiTiktokFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";

function Footer() {
  return (
    <div className="bg-[#252525]">
      <h1 className="font-semibold text-[35px] text-center text-white pt-14 pb-7">
        GET $5 OFF YOUR FIRST ORDER
      </h1>

      <div className="w-[80%] m-auto">
        <div className="flex justify-center items-center m-auto gap-2 w-[100%]">
          <div className="w-[70%] bg-white py-2 rounded-sm">
            <input
              type="email"
              placeholder="Email"
              required
              className="outline-none border-none placeholder:text-[20px] ml-4"
            />
          </div>
          <div className="w-[30%] bg-[#18a2e4] py-1 flex justify-center rounded-sm items-center">
            <button className="text-white text-[20px]/[32px]">
              Get $5 Off Now!
            </button>
          </div>
        </div>
        {/*  */}

        <div className="flex justify-between text-[20px] items-center text-[#fff] w-[70%] pt-10">
          <p className="">Support</p>
          <p>Explore</p>
          <p>Products</p>
          <p>Programs</p>
        </div>

        <div className="flex justify-between text-[17px] text-[#fff5] w-[70%] pt-5">
          {/*  */}
          <div className="space-y-[6px]">
            <p>Contact us</p>
            <p>FAQ</p>
            <p>Returns & Refunds</p>
            <p>Privacy Policy</p>
            <p>Shipping Policy</p>
            <p>Terms of Service</p>
            <p>Intellectual Property Rights</p>
            <p>Help Center</p>
            <p>Security Reporting</p>
          </div>
          {/*  */}
          <div className="space-y-[6px]">
            <p>About Govee</p>
            <p>About goveeLife</p>
            <p>Govee Rewards Program</p>
            <p>Buying Guides</p>
            <p>Blogs</p>
            <p>Technology</p>
            <p>Pay with klarna</p>
            <p>Where to Buy</p>
          </div>
          {/*  */}
          <div className="space-y-[6px]">
            <p>Outdoor Lights</p>
            <p>Home Decor Lights</p>
            <p>Gaming Lights</p>
            <p>TV Lights</p>
            <p>Smart Aplliances</p>
            <p>Deals</p>
          </div>
          {/*  */}
          <div className="space-y-[6px]">
            <p>Affiliate Program</p>
            <p>Corporate Purchase</p>
            <p>Education Discount</p>
            <p>Key Worker Discount</p>
            <p>Referral Program</p>
          </div>
          {/*  */}
        </div>

        <div className="flex justify-between items-center w-[100%] m-auto pt-10 pb-8 border-b-[1px] border-b-[#888]">
          <div className="flex justify-between items-center w-[30%] m-auto">
            <div className="bg-[#888] w-8 h-8 rounded-full  flex justify-center items-center">
              <ImFacebook size={20} color="#0009" />
            </div>
            <div className="bg-[#888] w-8 h-8 rounded-full flex justify-center items-center">
              <TiSocialTwitter size={20} color="#0009" />
            </div>
            <div className="bg-[#888] w-8 h-8 rounded-full flex justify-center items-center">
              <BsInstagram size={20} color="#0009" />
            </div>
            <div className="bg-[#888] w-8 h-8 rounded-full flex justify-center items-center">
              <AiFillYoutube size={20} color="#0009" />
            </div>
            <div className="bg-[#888] w-8 h-8 rounded-full flex justify-center items-center">
              <RiTiktokFill size={20} color="#0009" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-5 m-auto w-[50%] pt-8">
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/paypal-uZ9oH1ii.png"
            alt=""
            className="w-10 h-6"
          />
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/master-Di2Efg8H.png"
            alt=""
            className="w-10 h-6"
          />
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/visa-CPMu500o.png"
            alt=""
            className="w-10 h-6"
          />
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/applepay-BjsTZe9L.png"
            alt=""
            className="w-10 h-6"
          />
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/klarna-CF-kLrxH.png"
            alt=""
            className="w-10 h-6"
          />
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/afterpay-DnbuyWSd.png"
            alt=""
            className="w-10 h-6"
          />
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/googlepay-BTVe47k1.png"
            alt=""
            className="w-10 h-6"
          />
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/amex-DIOdYb4g.png"
            alt=""
            className="w-10 h-6"
          />
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/discover-IzaUcfiQ.png"
            alt=""
            className="w-10 h-6"
          />
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/national_pet_day-CMPzhnBp.png"
            alt=""
            className="w-10 h-6"
          />
        </div>

        <p className="text-center text-[#888] py-8 text-[17px] font-medium">© 2025 Govee</p>

        <br />
      </div>
    </div>
  );
}

export default Footer;
