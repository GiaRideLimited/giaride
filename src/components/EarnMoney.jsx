import React, { useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import gia_ride_img from '../assets/gia_ride_img.png'; // Ensure this path is correct
import renters_img from '../assets/renters_img.png';   // Ensure this path is correct

const EarnMoney = () => {
    const [activeTab, setActiveTab] = useState('drivers'); // 'drivers' or 'renters'

    const driverFeatures = [
        {
            title: 'Drive more, earn more',
            description: 'Our 200+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.'
        },
        {
            title: 'Set your schedule',
            description: 'Drive for as long and as often as you like. Weekdays, weekends, mornings — it’s driving around your lifestyle.'
        },
        {
            title: 'Get paid each week',
            description: 'You’ll receive your earnings at the end of each week — no need to wait around for payday.'
        }
    ];

    // For renters, we will use the same content as driversFeatures
    // but with different styling (centering and yellow checkmark)
    const featuresToDisplay = driverFeatures; // Renters will display the same feature content as Drivers

    const imageForDriversTab = activeTab === 'drivers' ? gia_ride_img : null;

    return (
        // Outermost div: This will have the conditional background
        <div
            className={`bg-cover bg-center w-full min-h-screen transition-all duration-500 ease-in-out ${
                activeTab === 'renters' ? '' : '' // Apply a default light bg for drivers/non-renters tab
            }`}
            style={{
                backgroundImage: activeTab === 'renters' ? `url(${renters_img})` : 'none',
            }}
        >
            {/* Content Wrapper */}
            <div className="sm:px-6 lg:px-8 max-w-[90%] md:max-w-[85%] mx-auto py-10 md:py-16">
                {/* Header Section */}
                <section className="text-center pb-8 md:pb-12">
                    <h2 className={`text-3xl sm:text-4xl md:text-[56px] font-bold transition-colors duration-300
                        ${activeTab === 'renters' ? 'text-white' : 'text-black'}`}
                    >
                        Earn money with GiaRide
                    </h2>
                    <div className="mt-6 sm:mt-8 flex flex-col space-y-3 sm:space-y-0 sm:flex-row justify-center items-center sm:space-x-4">
                        <button
                            onClick={() => setActiveTab('drivers')}
                            className={`w-full max-w-xs sm:w-auto px-6 py-3 text-sm sm:text-base font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300 ease-in-out ${
                                activeTab === 'drivers'
                                    ? 'bg-black text-white shadow-md' // Active driver button
                                    : `border ${activeTab === 'renters' ? 'border-white text-white hover:bg-white hover:text-black' : 'border-gray-400 text-black hover:bg-gray-100'}`
                            }`}
                        >
                            For Drivers
                        </button>
                        <button
                            onClick={() => setActiveTab('renters')}
                            className={`w-full max-w-xs sm:w-auto px-6 py-3 text-sm sm:text-base font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300 ease-in-out ${
                                activeTab === 'renters'
                                    ? 'bg-white text-black shadow-md' // Active renters button
                                    : `border ${activeTab === 'drivers' ? 'border-gray-400 text-black hover:bg-gray-100' : 'border-white text-white hover:bg-white hover:text-black'}`
                            }`}
                        >
                            For Renters
                        </button>
                    </div>
                </section>

                {/* Features Section - This will be a white card on top of the background */}
                <section className="">
                    <div className={`flex flex-col md:flex-row md:items-start 
                        ${imageForDriversTab ? 'md:gap-[30px] lg:gap-[60px] xl:gap-[90px]' : ''}
                        ${activeTab === 'renters' ? 'items-center' : ''} /* Center content for renters */
                        `}
                    >
                        {/* Feature List */}
                        <div className={`
                            ${imageForDriversTab ? 'md:flex-1' : 'w-full'}
                            ${activeTab === 'renters' ? 'flex flex-col items-center' : ''} /* Center list items for renters */
                        `}>
                            <ul className="space-y-8 sm:space-y-10"> {/* Increased spacing for renters potentially */}
                                {featuresToDisplay.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className={`
                                            ${activeTab === 'renters'
                                                ? 'flex  flex-start' // For renters: stack icon and text, center all
                                                : 'flex items-start'                       // For drivers: icon beside text, align start
                                            }
                                        `}
                                      
                                    >
                                        <FaCircleCheck
                                            className={`
                                                w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0
                                                ${activeTab === 'renters'
                                                    ? 'text-yellow-500 mt-1' // Yellow for renters, add margin-bottom
                                                    : 'text-black mt-1'      // Black for drivers, original margin-top
                                                }
                                            `}
                                        />
                                        <div className={`
                                            ${activeTab === 'drivers' ? 'ml-3 sm:ml-4' : ''} /* Margin only for drivers */
                                            ${activeTab === 'renters' ? 'ml-3 md:ml-4 max-w-md' : ''} /* Max width for centered text for renters */
                                        `}>
                                            <h3 className={`text-lg sm:text-xl md:text-[22px] font-bold ${activeTab === "renters" ? "text-white" : "text-black"}`}>
                                                {feature.title}
                                            </h3>
                                            <p className={`mt-1 ${activeTab === "renters" ? "text-gray-300" : "text-gray-700"} text-sm sm:text-base leading-relaxed`}>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image Section - Only for drivers tab */}
                        {imageForDriversTab && (
                            <div className="mt-8 md:mt-0 md:w-2/5 lg:w-1/2 flex justify-center items-center">
                                <img
                                    src={imageForDriversTab}
                                    alt="GiaRide app interface for drivers"
                                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-lg"
                                />
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EarnMoney;