import React from 'react';
import qr_code from '../assets/qr_code.png';
import xend_hero_img from '../assets/xend_hero_img.png';
import KeyFeatures from '../components/KeyFeatures';
import DownloadApp from '../components/DownloadApp';

import truck from '../assets/truck.png';
import Calendar from '../assets/Calendar.png';
import HourglassMedium from '../assets/HourglassMedium.png';
import Sparkle from '../assets/Sparkle.png';
import HeroComponent from '../components/HeroComponent';

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
        img: xend_hero_img,
        alt: 'Xend hero image',
        title: 'Fast, Affordable, and Reliable Deliveries',
        description: 'GiaRide Xend helps businesses and individuals send packages quickly and affordably.',
        qrImage: qr_code,
        qrDesc1: 'Download the GiaRide app',
        qrDesc2: 'Scan the QR code to download',
    }
];

const Xend = () => {
    return (
        <div>
            <HeroComponent heroComponentData={heroComponentData} />
            <KeyFeatures features={features} />
            <DownloadApp />
        </div>
    );
};

export default Xend;
