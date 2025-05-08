import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import gia_ride_img from '../assets/gia_ride_img.png';

const EarnMoney = () => {
    return (
        <div className="sm:px-6 lg:px-8 max-w-[90%] md:max-w-[85%] mx-auto">
            {/* Header Section */}
            <section className=" py-12">
                <h2 className="text-3xl sm:text-4xl md:text-[56px] font-bold text-center text-black">
                    Earn money with GiaRide
                </h2>
                <div className="mt-6 flex flex-row justify-center items-center sm:space-y-0 space-x-4">
                    <button className="w-full sm:w-auto px-5 py-2 bg-black text-white rounded-full focus:outline-none">
                        Drivers
                    </button>
                    <button className="w-full sm:w-auto px-5 py-2 border border-black text-black rounded-full focus:outline-none">
                        Renters
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-white py-8">
                <div className="flex flex-col md:flex-row md:items-center md:gap-[90px]">
                    {/* Feature List */}
                    <div className="flex-1">
                        <ul className="space-y-6">
                            {['Drive more, earn more','Set your schedule','Get paid each week'].map((title, idx) => (
                                <li key={idx} className="flex items-start">
                                    <FaCircleCheck className="mt-1 text-black w-6 h-6 flex-shrink-0" />
                                    <div className="ml-4">
                                        <h3 className="text-xl md:text-[22px] font-bold text-black">
                                            {title}
                                        </h3>
                                        <p className="mt-1 text-gray-900 text-base">
                                            {idx === 0 && 'Our 200+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.'}
                                            {idx === 1 && 'Drive for as long and as often as you like. Weekdays, weekends, mornings — it’s driving around your lifestyle.'}
                                            {idx === 2 && 'You’ll receive your earnings at the end of each week — no need to wait around for payday.'}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Section */}
                    <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                        <img
                            src={gia_ride_img}
                            alt="GiaRide service"
                            className="w-full max-w-md h-auto object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EarnMoney;
