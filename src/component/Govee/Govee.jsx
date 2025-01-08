import React, { useEffect, useState } from "react";
import image from "../../assets/govee.svg";
import { amazing } from "../Data/data";
import "./Govee.css";
function Govee() {
  const [items, setItems] = useState(amazing);

  useEffect(() => {
    setItems((prevItems) => [...prevItems, ...prevItems]);
  }, []);
  return (
    <div>
      <img
        src={image}
        alt=""
        className="w-[200px] mx-auto my-auto pt-14 pb-3"
      />
      <h1 className="text-[#00a2e4] text-[20px] font-semibold text-center">
        Chosen by Millions for Smart Homes
      </h1>
      <div className="flex justify-between items-center w-[90%] m-auto">
        <div className="flex justify-between items-center flex-col w-[200px]">
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/app_users_count-BeOUu5h_.png"
            alt=""
            className="w-20 h-20"
          />
          <p className="text-[#00a2e4] text-[30px]/[60px] font-semibold">
            30M+
          </p>
          <p className="text-[15px] ">30M+ App Installation</p>
        </div>
        <div className="flex justify-between items-center flex-col w-[200px]">
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/top_5-DVJtEl80.png"
            alt=""
            className="w-20 h-20 mt-10"
          />
          <p className="text-[#00a2e4] text-[30px]/[60px] font-semibold">
            TOP 5
          </p>
          <p className="text-[15px] mt-2 w-[150px] text-center">
            Fastest Growing Electronics Brands in North America
          </p>
        </div>
        <div className="flex justify-between items-center flex-col w-[200px]">
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/share_percent-Bozwajo7.png"
            alt=""
            className="w-20 h-20 mt-5"
          />
          <p className="text-[#00a2e4] text-[30px]/[60px] font-semibold">90%</p>
          <p className="text-[15px] w-[180px] text-center">
            RGBIC strip light market share on Amazon
          </p>
        </div>
        <div className="flex justify-between items-center flex-col w-[200px]">
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/countries-7P6795NP.png.png"
            alt=""
            className="w-20 h-20 mb-2"
          />
          <p className="text-[#00a2e4] text-[30px]/[60px] font-semibold">80+</p>
          <p className="text-[15px]">Available in 80+ Countries</p>
        </div>
        <div className="flex justify-between items-center flex-col w-[200px]">
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/patent-DEQTSJ72.png"
            alt=""
            className="w-20 h-20 mt-14"
          />
          <p className="text-[#00a2e4] text-[30px]/[60px] font-semibold">
            870+
          </p>
          <p className="text-[15px] w-[180px] text-center">
            Company Owns 870+ Patents (including Utility & Design)
          </p>
          <p className="text-[13px] text-[#5679]">*As of December 2024</p>
        </div>
      </div>

      {/*  */}

      <h1 className="font-semibold text-[40px] text-center pt-14 pb-7">
        The Amazing Things Our Users Are Up To
      </h1>

      {/*  */}

      {/* <div className="scroller" data-direction="left" data-speed="slow">
        <div className="scroller__inner">
          {items.map((ele, idx) => (
            <div
              key={idx}
              className="card relative w-[200px] h-auto overflow-hidden"
            >
              <img
                src={ele.image}
                alt={`Avatar ${idx + 1}`}
                className="main-image w-[200px] block"
                aria-hidden={idx >= items.length / 2 ? "true" : "false"}
              />
              <img
                src={ele.hoverImage}
                alt=""
                className="hover-image absolute top-0 left-0 w-1/2 h-1/2 object-cover opacity-0 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div> */}

      <img
        src="https://cdn.shopify.com/s/files/1/0512/3489/8105/files/lQDPJxI9MZ4x4MbNBLDNDICwroNp_MHR2uoEH0J1bEB1AA_3200_1200.jpg?v=1680248790&width=1400&crop=center"
        alt=""
      />
    </div>
  );
}

export default Govee;
