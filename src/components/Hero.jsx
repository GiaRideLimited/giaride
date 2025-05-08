import React from 'react';
import taxi_pickup from '../assets/taxi_pickup.jpg';
import qr_code from '../assets/qr_code.png';
import google_play from '../assets/google_play.png';
import appstore from '../assets/appstore.png';


export default function Hero() {
  return (
    <section className="bg-black text-white pt-[30px] md:pt-[50px] h-full md:h-screen">
      <div className="max-w-[90%] md:max-w-[85%] mx-auto flex flex-col-reverse md:flex-row md:items-center md:justify-between">
        {/* Image with polygon border */}
        <div className="md:w-[512px] my-[50px] md:mt-0">
          <div
            className="relative w-full overflow-hidden"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 80%)' }}
          >
            <img
              src={taxi_pickup}
              alt="Taxi pickup"
              className="w-full md:h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div className=" md:w-1/2 ">
          <h1 className="hidden md:block text-[36px] md:text-5xl md:font-bold leading-tight">
            Where you need to be <br /> when you need to be
          </h1>
          <h1 className="md:hidden text-[36px] md:text-5xl font-bold leading-tight">
            Where you need to be, when you need to be
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Let us get you where you want to be without the stress of thinking and planning, we are safe and fast
          </p>

          {/* QR Download box */}
          <div>
            <div className='flex'>
              <img src={google_play} alt="googleplay" className=''/>
              <img src={appstore} alt="appstore" className='object-contain' />
            </div>
            <div className="hidden mt-8 md:inline-flex items-center border border-[#373737] p-4 rounded-lg">
              <img
                src={qr_code}
                alt="QR code"
                className="w-20 h-20 flex-shrink-0"
              />
              <div className="ml-4 text-left">
                <p className="font-semibold">Download the GiaRide app</p>
                <p className="mt-1 text-sm text-gray-400">Scan the QR code to download</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}