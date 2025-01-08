import React, { useState } from "react";
import { review, voices } from "../Data/data";
import "./index.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { IoMdStar } from "react-icons/io";
function Productreview() {
  const [index, setIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0); // Tracks the first visible appliance
  const itemsPerView = 4; // Number of items visible at a time

  // Handler for navigating to the previous item
  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 < 0 ? 0 : prevIndex - 1));
  };

  // Handler for navigating to the next item
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsPerView < voices.length ? prevIndex + 1 : prevIndex
    );
  };
  console.log(index);
  return (
    <div className="bg-[#f5f5f7] mt-10">
      <h1 className="font-semibold text-[40px] text-center pt-14 pb-7">
        What They're Saying
      </h1>
      <div className="flex justify-center items-center gap-4">
        {review.map((ele, idx) => (
          <div
            key={idx}
            className={`w-40 h-40 rounded-2xl ${
              idx === index && "hover-image border-black border-[1px]"
            }`}
            onMouseOver={() => setIndex(idx)}
          >
            <div className="">
              <img
                src={ele.image}
                alt=""
                className="mx-auto my-auto rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-[80%] m-auto h-40">
        {index !== null && (
          <div className="text-center mt-5">
            <p className="text-2xl font-normal text-center">
              {review[index].name}
            </p>
          </div>
        )}
      </div>

      <h1 className="font-semibold text-[40px] text-center pt-14 pb-7">
        The Voices of Our Users
      </h1>
      <div className="w-[90%] m-auto relative">
        <div className="flex gap-3 w-[100%] m-auto overflow-hidden">
          {/* Render visible items based on the startIndex */}
          {voices
            .slice(startIndex, startIndex + itemsPerView)
            .map((ele, idx) => (
              <div
                className="flex justify-between p-3 flex-col transition-transform bg-white w-[800px] h-[400px] rounded-lg border-gray-300 border-[1px] hover:border-black duration-300"
                key={startIndex + idx} // Ensure unique keys
                style={{
                  transform: `translateX(-${startIndex * (8 / itemsPerView)}%)`,
                }}
              >
                <div className="flex gap-3 flex-col h-[300px] border-b-2">
                  <div className="flex items-center gap-3">
                    <p className="text-[#00a2e4] text-center py-3 w-[50px] font-medium rounded-full h-[50px] bg-[#00a2e433]">
                      {ele.name.slice(0, 2)}
                    </p>
                    <div>
                      <p>{ele.name}</p>
                      <p className="flex text-[#FFD700]">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                      </p>
                    </div>
                  </div>
                  <p className="">{ele.text}</p>
                </div>
                <div className="flex w-full h-[100px] mt-2 gap-3">
                  <img src={ele.image} className="w-16 h-16" alt="" />
                  <div className="flex justify-between flex-col">
                    <p>{ele.product_name}</p>
                    <button className="text-[#00a2e4]">Show more &gt;</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* Navigation Arrows */}
        <GrFormPrevious
          className={`absolute top-[160px] left-2 cursor-pointer text-xl bg-[#0004] w-10 h-10 rounded-full ${
            startIndex === 0 ? "pointer-events-none hidden" : ""
          }`}
          onClick={handlePrevious}
          color="#fff"
        />
        <GrFormNext
          className={`absolute top-[160px] right-10 cursor-pointer text-xl w-10 h-10 bg-[#0004] rounded-full ${
            startIndex + itemsPerView >= voices.length
              ? "opacity-50 pointer-events-none hidden"
              : ""
          }`}
          color="#fff9"
          onClick={handleNext}
        />
      </div>

      <div>
        <h1 className="font-semibold text-[40px] text-center pt-14 pb-7">
          Available At
        </h1>

        <div className="flex justify-center items-center w-[90%] m-auto">
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1277808/assets/available_at-CwO2OBiT.png"
            alt=""
          />
        </div>
      </div>
      <br />
    </div>
  );
}

export default Productreview;
