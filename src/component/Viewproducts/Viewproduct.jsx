import React from "react";
import "./index.css";
function Viewproduct() {
  return (
    <div className="relative w-[90%] m-auto">
      <h1 className="font-semibold text-[40px] text-center pt-14 pb-7">
        Make Every Part of Your Home Feel Special
      </h1>
      <div className="w-[100%] m-auto">
        <img
          src="https://cdn.shopify.com/s/files/1/0512/3489/8105/files/de_Outdoor-pc.jpg?v=1735902131&width=1400&height=630&crop=center"
          className="rounded-xl"
          alt=""
        />
        <div className="text-white absolute top-64 ml-10">
          <p className="text-[40px] font-black w-[380px]">
            Perfect Lights For Bright Nights.
          </p>
          <button className="border-[1px] text-[20px] border-[#fff8] rounded-full text-[#fff98] mt-3  px-5 py-1">
            View Products
          </button>
        </div>
      </div>

      <div className="relative flex w-[100%] m-auto gap-5 mt-5">
        <div className="w-[50%] m-auto">
          <img
            src="https://cdn.shopify.com/s/files/1/0512/3489/8105/files/TV_390f769d-bb2e-45ca-964c-7fdc054dc48c.jpg?v=1735902175&width=1400&height=630&crop=center"
            className="rounded-xl"
            alt=""
          />
          <div className="text-white absolute top-10 ml-10">
            <p className="text-[30px] font-black w-[220px]">
              View Bigger. Dive Deeper.
            </p>
            <button className="border-[1px] text-[20px] border-[#fff8] rounded-full text-[#fff98] mt-3  px-5 py-1">
              View Products
            </button>
          </div>
        </div>
        <div className="w-[50%] m-auto">
          <img
            src="https://cdn.shopify.com/s/files/1/0512/3489/8105/files/Gaming_3fe06399-2c70-40ea-9788-726d7111c508.jpg?v=1735902321&width=1400&height=633&crop=center"
            className="rounded-xl"
            alt=""
          />
          <div className="text-white absolute top-10 ml-10">
            <p className="text-[40px] font-black w-[220px]">
              Lights on. Game on.
            </p>
            <button className="border-[1px] text-[20px] border-[#fff8] rounded-full text-[#fff98] mt-3  px-5 py-1">
              View Products
            </button>
          </div>
        </div>
      </div>

      {/* <h1 className="font-semibold text-[40px] text-center pt-14 pb-7">
        Change Your Space's Style With The Touch Of A Button
      </h1> */}

      <h1 className="font-semibold text-[40px] text-center pt-14 pb-7">
        Amazing Tech So You Can Do More
      </h1>

      <div className="flex justify-center gap-5">
        <div className="bg-[#f5f5f7] w-[300px] h-[200px] rounded-xl show-hidden flex justify-center flex-col items-center duration-100 overflow-hidden">
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1276940/assets/rgbic-34s2zHpF.png"
            alt=""
            className="move-up w-[550px]"
          />
          <p className="hidden show-para mx-10 -mt-4 w-[83%]">
            RGBIC, Govee's innovative light displaying technology, features
            advanced IC (Independent Control) chips that make multiple colors
            show on one strip light simultaneously. See vivid colors chasing or
            flowing like a rainbow. Say goodbye...
          </p>
        </div>
        <div className="bg-[#f5f5f7] w-[300px] h-[200px] show-hidden rounded-xl flex justify-center flex-col items-center duration-100 overflow-hidden">
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1276940/assets/envisual-BnEMsza2.png"
            alt=""
            className="move-up w-[550px]"
          />
          <p className="hidden show-para mx-10 -mt-4 w-[83%]">
            Innovative zone-division color-match method enhances visuals beyond
            your screen. Calibrate and capture the content colors, delivering
            accuracy of the color matching for you.
          </p>
        </div>
        <div className="bg-[#f5f5f7] w-[300px] h-[200px] show-hidden rounded-xl flex justify-center flex-col items-center duration-100 overflow-hidden">
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1276940/assets/dreamview-5nVaxvNv.png"
            alt=""
            className="move-up w-[550px]"
          />
          <p className="hidden show-para mx-10 -mt-4 w-[83%]">
            DreamView is a smart technology based on Govee‘s IoT system. It uses
            light mapping to reflect screen information or music via a Bluetooth
            connection. It's aimed to provide users with various smart, rich,
            and cool lighting effects, so they...
          </p>
        </div>
        <div className="bg-[#f5f5f7] w-[300px] h-[200px] show-hidden rounded-xl flex justify-center flex-col items-center duration-100 overflow-hidden">
          <img
            src="https://cdn.shopify.com/oxygen-v2/29163/16464/33972/1276940/assets/cogniglow-xbmiwJj2.png"
            alt=""
            className="move-up w-[550px]"
          />
          <p className="hidden show-para mx-10 -mt-4 w-[83%]">
            CogniGlow™ is an AI intelligent algorithm developed by Govee. It has
            an industry-leading AI information recognition function and
            introduces deep learning into the ambient lighting industry. The
            algorithm aims to provide users with...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Viewproduct;
