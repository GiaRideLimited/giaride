import React from 'react'
import qr_code from '../assets/qr_code.png';
import drop_hero_img from '../assets/drop_hero_img.png';
import DownloadApp from '../components/DownloadApp';
import KeyFeatures from '../components/KeyFeatures'


import Truck from '../assets/Truck.png';
import Calendar from '../assets/Calendar.png';
import HourglassMedium from '../assets/HourglassMedium.png';
import Sparkle from '../assets/Sparkle.png';

import HeroComponent from '../components/HeroComponent';

const features = [
    {
        icon: Truck,
        alt: 'Shared Deliveries',
        title: 'Shared Deliveries',
        description: 'Reduce costs by combining multiple deliveries along the same route.',
    },
    {
        icon: HourglassMedium,
        alt: 'Same-Day Delivery',
        title: 'Same-Day Delivery',
        description: 'Get your package delivered within hours.',
    },
    {
        icon: Calendar,
        alt: 'Scheduled Pickups',
        title: 'Scheduled Pickups',
        description: 'Book deliveries in advance for better planning.',
    },
    {
        icon: Sparkle,
        alt: 'AI-Powered Routing',
        title: 'AI-Powered Routing',
        description: 'Optimized delivery routes for faster drop-offs.',
    },
];


const heroComponentData = [
    {
        img: drop_hero_img,
        alt: 'Xend hero image',
        title: ' Your Ride, Your Way',
        description: 'Book a ride instantly or schedule a trip in advance. Whether solo or shared, GiaRide ensures you travel conveniently at the best price.',
        qrImage: qr_code,
        qrDesc1: 'Download the GiaRide app',
        qrDesc2: 'Scan the QR code to download',
    }
];

const Drop = () => {
    return (
        <div>
            {/* <section className="bg-black text-white pt-[30px] md:pt-[50px] h-full md:h-screen ">
                <div className="max-w-[85%] mx-auto flex flex-row-reverse  md:items-center md:justify-between">
                    <div className="md:w-[512px]">
                        <div
                            className="relative w-full overflow-hidden"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 80%)' }}
                        >
                            <img
                                src={drop_hero_img}
                                alt="Xend hero image"
                                className="w-full md:h-[500px] object-cover"
                            />
                        </div>
                    </div>

                    <div className=" md:w-1/2 ">
                        <h1 className="hidden md:block text-[36px] md:text-5xl md:font-bold leading-tight">
                            Your Ride, Your Way
                        </h1>
                     
                        <p className="mt-4 text-lg text-gray-300">
                            Book a ride instantly or schedule a trip in advance. Whether solo or shared, GiaRide ensures you travel conveniently at the best price.
                        </p>

                        <div className="mt-8 inline-flex items-center border border-[#373737] p-4  pr-[50px] rounded-lg">
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
            </section> */}
            <HeroComponent heroComponentData={heroComponentData} />
            <KeyFeatures features={features} />
            <DownloadApp />
        </div>
    )
}

export default Drop