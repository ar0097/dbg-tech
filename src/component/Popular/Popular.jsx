import React, { useState } from "react";
import { data, appliances } from "../Data/data";
import { GrFormNext, GrFormPrevious} from "react-icons/gr";
function Popular() {
  const [index, setIndex] = useState(null);
  const [startIndex, setStartIndex] = useState(0); // Tracks the first visible appliance
  const itemsPerView = 7; // Number of items visible at a time

  // Handler for navigating to the previous item
  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 < 0 ? 0 : prevIndex - 1));
  };

  // Handler for navigating to the next item
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsPerView < appliances.length ? prevIndex + 1 : prevIndex
    );
  };
  return (
    <div className="bg-[#f5f5f7]">
      <h1 className="font-semibold text-[40px] text-center pt-14 pb-7">
        What's Popular Now
      </h1>
      <div className="flex justify-center gap-5 items-center flex-wrap">
        {data.map((ele, idx) => (
          <div
            key={idx}
            className={`w-72 h-[450px]  bg-white rounded-lg hover-image relative`}
            onMouseOver={() => setIndex(idx)}
            onMouseOut={() => setIndex(null)}
          >
            <img
              src={idx === index ? ele.hoverImage : ele.image}
              className={`w-full h-[60%] mx-auto my-auto ${
                idx !== 1 && "px-10"
              } rounded-t-lg`}
              alt=""
            />
            <h1 className="text-[20px]/[30px] h-[60px] px-4 w-[20] tracking-tight">
              {ele.name}
            </h1>
            <p className="flex gap-1 px-4 pt-5 items-baseline">
              <span className="text-[20px] font-medium">{ele.price}</span>
              <span className="text-[12px] line-through text-gray-400">
                {ele.oldPrice}
              </span>
            </p>
            <button className="text-[#18a2e4] mt-3 border-[1px] border-[#18a2e4] hover:bg-[#18a2e4] hover:text-white duration-300 py-1 w-[90%] block m-auto rounded-full">
              Shop Now
            </button>
            <img
              src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1276940/assets/corner_mark-DL9SQTCC.svg"
              alt=""
              className="absolute top-0 right-5"
            />
            <p className="absolute top-0 right-7 flex text-center flex-col font-medium text-white">
              <span className="text-[15px] font-semibold">{ele.off}</span>
              <span className="text-[15px]/[10px]">OFF</span>
            </p>
          </div>
        ))}
      </div>
      {/*  */}
      {/* <h1 className="font-semibold text-[40px] text-center pt-14 pb-7">
        Watch & Shop Related Products
      </h1> */}
      {/*  */}

      <h1 className="font-semibold text-[40px] text-center py-14">
        Shop By Category
      </h1>
      <div className="w-[90%] m-auto relative mb-14">
        <div className="flex justify-center items-center gap-3 w-[90%] m-auto overflow-hidden">
          {/* Render visible items based on the startIndex */}
          {appliances
            .slice(startIndex, startIndex + itemsPerView)
            .map((ele, idx) => (
              <div
                className="flex justify-center items-center flex-col transition-transform bg-white w-72 h-36 rounded-lg border-gray-300 border-[1px] hover:border-black duration-300"
                key={startIndex + idx} // Ensure unique keys
                style={{
                  transform: `translateX(-${
                    startIndex * (8 / itemsPerView)
                  }%)`,
                }}
              >
                <img src={ele.image} alt={ele.name} className="w-24 h-24" />
                <p className="mt-2">{ele.name}</p>
              </div>
            ))}
        </div>
        {/* Navigation Arrows */}
        <GrFormPrevious
          className={`absolute top-[55px] left-2 cursor-pointer text-xl bg-[#0001] w-10 h-10 rounded-full ${
            startIndex === 0 ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={handlePrevious}
          color="#0003"
        />
        <GrFormNext
          className={`absolute top-[55px] right-2 cursor-pointer text-xl w-10 h-10 bg-[#0001] rounded-full ${
            startIndex + itemsPerView >= appliances.length
              ? "opacity-50 pointer-events-none"
              : ""
          }`}
          color="#0003"
          onClick={handleNext}
        />
      </div>
      

      <br />
    </div>
  );
}

export default Popular;
