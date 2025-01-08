import React, { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
const data = [
  "https://cdn.shopify.com/s/files/1/0512/3489/8105/files/lQDPJyD9anxfGenNBrjNDwCwAJTBTI51kDwHXIbBPMGmAA_3840_1720_a7702849-a2f3-44ce-8543-8fd088088f12.jpg?v=1735902067&width=1400&height=627&crop=center",
  "https://cdn.shopify.com/s/files/1/0512/3489/8105/files/banner-p_52d205b9-d25d-4022-8119-09f43e2f48c6.jpg?v=1735267719&width=1400&height=627&crop=center",
  "https://cdn.shopify.com/s/files/1/0512/3489/8105/files/TV_Home_Theater_3a78400e-f625-4f10-8617-db4e06b8cc09.jpg?v=1735902472&width=1400&height=627&crop=center",
  "https://cdn.shopify.com/s/files/1/0512/3489/8105/files/lQLPKIIyeEr8NIHNBrjNDwCwsIaBSk5o1hYHXI08yOebAA_3840_1720.png?v=1735901154&width=1400&height=627&crop=center",
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setCurrent((prev) => (prev === 3 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(id);
  });

  const previousSlide = () => {
    if (current === 0) setCurrent(data.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === data.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {data.map((ele, idx) => (
          <div className="flex-shrink-0 w-full h-full" key={idx}>
            <img src={ele} alt="" />
            {idx === 0 && (
              <div className="absolute top-32 left-48 text-white">
                <h1 className="text-[23px] font-normal">
                  December 27, 2024 - January 06, 2025 PST
                </h1>
                <p className="font-semibold text-[34px]/[30px] text-[#ffaf2e]">
                  New Year Sale
                </p>
                <p className="text-[50px]  font-semibold">UP TO 40% OFF</p>
                <p className="text-[22px] font-black">
                  Light Up 2025 with Govee
                </p>
                <div className="flex gap-2 mt-3">
                  <p className="flex flex-col justify-center items-center bg-[#fd9d02] w-14 h-16 rounded-lg">
                    <span className="font-black text-[36px]/[33px]">14</span>
                    <span className="text-[12px]/[20px]">Hours</span>
                  </p>
                  <p className="flex flex-col justify-center items-center bg-[#fd9d02] w-14 h-16 rounded-lg">
                    <span className="font-black text-[36px]/[33px]">30</span>
                    <span>Min</span>
                  </p>
                  <p className="flex flex-col justify-center items-center bg-[#fd9d02] w-14 h-16 rounded-lg">
                    <span className="font-black text-[36px]/[33px]">60</span>
                    <span className="text-[12px]/[20px]">Sec</span>
                  </p>
                </div>
                <button className="py-1 text-[#ffaf2e] mt-2 rounded-3xl px-5 bg-white">
                  Shop Now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex  px-10 text-3xl">
        <button
          onClick={previousSlide}
          className="bg-[#0004] w-10 h-10 rounded-full"
        >
          <GrFormPrevious className="m-auto" color="#fff" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#0004] w-10 h-10 rounded-full"
        >
          <GrFormNext className="m-auto" color="#fff" />
        </button>
      </div>
      <div className="absolute bottom-2 flex justify-center items-center w-full">
        {data.map((ele, idx) => (
          <div className={` bg-[#fff5] h-1 rounded-full w-28 m-3`} key={idx}>
            <div
              className={`${
                idx === current ? "bg-white h-full w-full rounded-full" : ""
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
