import React from 'react';
import qr_code from '../assets/qr_code.png';
import hire_car_hero_img from '../assets/hire_car_hero_img.png';
import DownloadApp from '../components/DownloadApp';
import KeyFeatures from '../components/KeyFeatures';
import HeroComponent from '../components/HeroComponent';

import drop_car from '../assets/drop_car.png';
import drop_arrow from '../assets/drop_arrow.png';
import Vector from '../assets/Vector.png';
import Sparkle from '../assets/Sparkle.png';

const features = [
  {
    icon: drop_car,
    alt: 'Shared Deliveries',
    title: 'Travel Discounts',
    description: 'Save money with a travel deal list based on organization and prize.',
  },
  {
    icon: Vector,
    alt: 'Scheduled Rides',
    title: 'Flexible Travel Options',
    description: 'Customize your itinerary.',
  },
  {
    icon: drop_arrow,
    alt: 'Inter/Intra-City Rides',
    title: 'AI-Powered Trip Planning',
    description: 'Get recommendations tailored to your preferences.',
  },
    {
      icon: Sparkle,
      alt: 'AI-Optimized Routes',
      title: 'Easy Booking Process',
      description: 'Rent a car with just a few clicks.',
    },
];



const button_text = 'Start your journey with GiaRide Travel!';


const heroComponentData = [
    {
        img: hire_car_hero_img,
        alt: 'hire car image',
        title: 'Explore, Plan, and Travel with Ease',
        description:
            'Planning a trip has never been easier. With GiaRide Travel, you can book travel deals, through road, air, water, rail.',
        qrImage: qr_code,
        qrDesc1: 'Download the GiaRide app',
        qrDesc2: 'Scan the QR code to download',
    },
];

const HireCar = () => {
    return (
        <div>
            <HeroComponent heroComponentData={heroComponentData} />
            <KeyFeatures features={features} button_text={button_text} />
            <DownloadApp />
        </div>
    );
};

export default HireCar;
