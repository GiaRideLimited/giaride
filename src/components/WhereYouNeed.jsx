import React from 'react'
import where_you_need_img from '../assets/where_you_need_img.png';
import qr_code from '../assets/qr_code.png';
import google_play from '../assets/google_play.png';
import appstore from '../assets/appstore.png';

const WhereYouNeed = () => {
  return (
    <section className="bg-black text-white py-[50px] md:pt-[70px] h-full md:h-screen">
      <div className="max-w-[90%] md:max-w-[85%] mx-auto flex flex-col-reverse md:flex-row  items-center justify-between">
        {/* Image with polygon border */}
        <div className="md:w-[512px]">
          <div
            className="relative w-full overflow-hidden"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 80%)' }}
          >
            <img
              src={where_you_need_img}
              alt="bus image"
              className="w-full md:h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="mt-12 md:mt-0 md:w-1/2 ">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Where you need to be when you need to be
          </h1>
          <p className="mt-4 text-[18px] text-gray-300 font-[300]">
            Let us get you where you want to be without the stress of thinking and planning, we are safe and fast
          </p>

          {/* QR Download box */}
          <div>
            <div className="flex items-center space-x-4 my-[40px] md:hidden">
              {/* Wrap each in a flex-1 container if you need padding/margins */}
              <div className="flex-1">
                <img
                  src={google_play}
                  alt="Google Play"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <img
                  src={appstore}
                  alt="App Store"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="hidden bg-[#0D0D0D] mt-8 md:inline-flex items-center p-2 rounded-sm pr-[100px]">
              <img
                src={qr_code}
                alt="QR code"
                className="w-20 h-20 flex-shrink-0"
              />
              <div className="ml-4 text-left">
                <p className="font-semibold">Download the GiaRide app</p>
                <p className="mt-1 text-[14px] text-[#A6A6A6]">Scan the QR code to download</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhereYouNeed