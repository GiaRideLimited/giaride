import React from 'react';
import download_app_qr_code from '../assets/download_app_qr_code.png';
import download_app_iphone from '../assets/download_app_iphone.png';
import google_play from '../assets/google_play.png';
import appstore from '../assets/appstore.png';

const GiaRideAppSection = () => {
  return (
    <div className="max-w-[90%] md:max-w-[85%] mx-auto rounded-[12px] bg-black text-white flex flex-col md:flex-row items-center justify-center p-[20px] md:p-[48px] md:py-0 my-[40px] md:my-[80px]">
      {/* Left Section: Text and QR Code */}
      <div className="md:w-1/2  flex flex-col items-start gap-6">
        <h2 className="text-4xl font-bold">Download our app</h2>
        <div className="my-3 flex justify-center space-x-4">
          <button className="px-5 py-2 bg-white text-black rounded-full focus:outline-none">
            Riders
          </button>
          <button className="px-5 py-2 border border-white text-white rounded-full focus:outline-none">
            Drivers
          </button>
        </div>
        <div>
          <div className="flex items-center space-x-4 my-[30px] mt-0 md:hidden">
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
          <div className="hidden md:flex flex-col items-start gap-4">
            <img src={download_app_qr_code} />
          </div>
        </div>

      </div>

      {/* Right Section: Phone Image and Driver Info */}
      <div className="md:w-1/2 items-center justify-center hidden md:flex">
        {/* Replace this with your actual phone image */}
        <div className="relative">
          <img src={download_app_iphone} alt="Iphone" />
        </div>
      </div>
    </div>
  );
};

export default GiaRideAppSection;
