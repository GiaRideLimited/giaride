import React from 'react'
import qr_code from '../assets/qr_code.png';
import about_hero_img from '../assets/about_hero_img.png';
import our_mission_img from '../assets/our_mission_img.png';
import DownloadApp from '../components/DownloadApp';
import KeyFeatures from '../components/KeyFeatures'
import HeroComponent from '../components/HeroComponent'



import truck from '../assets/truck.png';
import Calendar from '../assets/Calendar.png';
import HourglassMedium from '../assets/HourglassMedium.png';
import Sparkle from '../assets/Sparkle.png';

const features = [
    {
        icon: truck,
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
        img: about_hero_img,
        alt: 'Xend hero image',
        title: 'Revolutionizing Transportation in Africa',
        description:
            'GiaRide is a smart mobility platform designed to optimize transportation for individuals and businesses. By leveraging AI and data-driven technology, we provide cost-effective ride-sharing, logistics, and rental solutions that improve convenience and affordability.',
        qrImage: qr_code,
        qrDesc1: 'Download the GiaRide app',
        qrDesc2: 'Scan the QR code to download',
    },
];

const About = () => {
    return (
        <div>
            <HeroComponent heroComponentData={heroComponentData} />
            <div className='max-w-[77%] mx-auto'>
                <section className="pt-[30px] md:pt-[80px] h-full ">
                    <div className=" flex  md:items-center md:justify-between gap-[90px]">
                        {/* Image with polygon border */}
                        <div className="md:w-[512px]">
                            <div
                                className="relative w-full overflow-hidden"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 80%)' }}
                            >
                                <img
                                    src={our_mission_img}
                                    alt="Xend hero image"
                                    className="w-full md:h-[500px] object-cover"
                                />
                            </div>
                        </div>

                        {/* Text content */}
                        <div className=" md:flex-1">
                            <h1 className="hidden md:block text-[36px] md:text-[40px] md:font-bold leading-tight">
                                Our Mission
                            </h1>
                            {/* <h1 className="md:hidden text-[36px] md:text-5xl font-bold leading-tight">
                                Where you need to be, when you need to be
                            </h1> */}
                            <p className="mt-4 text-sm text-gray-600">
                                To create a seamless, affordable, and efficient transportation ecosystem powered by technology.
                            </p>

                        </div>
                    </div>
                </section>
                <section className="pt-[30px] md:pt-[80px] h-full ">
                    <div className=" flex flex-row-reverse  md:items-center md:justify-between gap-[90px]">
                        {/* Image with polygon border */}
                        <div className="md:w-[512px]">
                            <div
                                className="relative w-full overflow-hidden"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 80%)' }}
                            >
                                <img
                                    src={our_mission_img}
                                    alt="Xend hero image"
                                    className="w-full md:h-[500px] object-cover"
                                />
                            </div>
                        </div>

                        {/* Text content */}
                        <div className=" md:flex-1 ">
                            <h1 className="hidden md:block text-[36px] md:text-[40px] md:font-bold leading-tight">
                                Our Vision
                            </h1>
                            {/* <h1 className="md:hidden text-[36px] md:text-5xl font-bold leading-tight">
                                Where you need to be, when you need to be
                            </h1> */}
                            <p className="mt-4 text-sm text-gray-600">
                                To be the leading AI-powered transportation network, redefining mobility across Africa.
                            </p>

                            <button className='py-3 px-4 bg-[#FFE500] rounded-full text-sm mt-8 font-medium'>Join us in transforming transportation!</button>
                        </div>
                    </div>
                </section>
            </div>


            <DownloadApp />
        </div>
    );
};

export default About;




