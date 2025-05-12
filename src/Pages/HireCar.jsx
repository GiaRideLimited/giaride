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
    title: 'Wide Selection of Vehicles',
    description: 'Choose from economy cars to luxury rides.',
  },
  {
    icon: Vector,
    alt: 'Scheduled Rides',
    title: 'Flexible Rental Periods',
    description: 'Hourly, daily, or long-term rentals available.',
  },
  {
    icon: drop_arrow,
    alt: 'Inter/Intra-City Rides',
    title: 'Competitive Pricing',
    description: 'Affordable rates with no hidden fees.',
  },
  {
    icon: Sparkle,
    alt: 'AI-Optimized Routes',
    title: 'Easy Booking Process',
    description: 'Rent a car with just a few clicks.',
  },
];


const button_text = 'Book your rental today!';


const heroComponentData = [
    {
        img: hire_car_hero_img,
        alt: 'hire car image',
        title: 'Find the Perfect Ride for Any Occasion',
        description:
            'Rent a car, truck, or SUV effortlessly with GiaRide’s car rental service.',
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
