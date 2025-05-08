import React from 'react';
import qr_code from '../assets/qr_code.png';
import errand_hero_img from '../assets/errand_hero_img.png';
import DownloadApp from '../components/DownloadApp';
import KeyFeatures from '../components/KeyFeatures';
import HeroComponent from '../components/HeroComponent';

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
        img: errand_hero_img,
        alt: 'Xend hero image',
        title: 'Let Us Run Your Errands!',
        description:
            'Need to pick up groceries, documents, or any essentials? Need a driver for airport pickup, special pickup for old or people with disabilities. GiaRide Errand service saves you time by handling your tasks.',
        qrImage: qr_code,
        qrDesc1: 'Download the GiaRide app',
        qrDesc2: 'Scan the QR code to download',
    },
];

const ErrandPage = () => {
    return (
        <div>
            <HeroComponent heroComponentData={heroComponentData} />
            <KeyFeatures features={features} />
            <DownloadApp />
        </div>
    );
};

export default ErrandPage;
