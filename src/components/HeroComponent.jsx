import React from 'react';
import google_play from '../assets/google_play.png';
import appstore from '../assets/appstore.png';

const HeroComponent = ({ heroComponentData }) => {
    return (
        <div>
            {heroComponentData.map((item, index) => (
                <section
                    key={index}
                    className="bg-black text-white pt-[30px] pb-[50px] md:py-[70px] h-full"
                >
                    <div className=" max-w-[90%] md:max-w-[85%] mx-auto flex flex-col-reverse md:flex-row-reverse md:items-center md:justify-between md:gap-[50px]">
                        {/* Image with polygon border */}
                        <div className="md:w-[512px]">
                            <div
                                className="relative w-full overflow-hidden"
                                style={{
                                    clipPath:
                                        'polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 80%)',
                                }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.alt}
                                    className="w-full md:h-[500px] object-cover"
                                />
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="md:w-1/2 mb-[40px] md:mb-0">
                            <h1 className=" text-[36px] md:text-5xl md:font-bold leading-tight">
                                {item.title}
                            </h1>
                            <p className="mt-4  text-[#A6A6A6] ">{item.description}</p>

                            {/* QR Download box */}
                            <div>
                                <div className="flex items-center space-x-4 my-[20px] md:hidden">
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
                                <div className="hidden mt-8 md:inline-flex items-center border border-[#373737] p-2 pr-[50px]">
                                    <img
                                        src={item.qrImage}
                                        alt="QR code"
                                        className="w-20 h-20 flex-shrink-0"
                                    />
                                    <div className="ml-4 text-left">
                                        <p className="font-semibold">{item.qrDesc1}</p>
                                        <p className="mt-1 text-sm text-[#A6A6A6]">{item.qrDesc2}</p>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default HeroComponent;
