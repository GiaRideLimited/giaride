import React from 'react';
import qr_code from '../assets/qr_code.png';
import errand_hero_img from '../assets/errand_hero_img.png';
import DownloadApp from '../components/DownloadApp';
import KeyFeatures from '../components/KeyFeatures';
import HeroComponent from '../components/HeroComponent';

import errand_clock from '../assets/errand_clock.png';
import errand_user from '../assets/errand_user.png';
import path from '../assets/path.png';
import Coins from '../assets/Coins.png';

const features = [
  {
    icon: errand_clock,
    alt: 'Shared Deliveries',
    title: 'On-Demand or Scheduled Errands',
    description: 'Request a pickup anytime.',
  },
  {
    icon: path,
    alt: 'Same-Day Delivery',
    title: 'Multi-Stop Support',
    description: 'Get multiple errands done in one trip.',
  },
  {
    icon: errand_user,
    alt: 'Scheduled Pickups',
    title: 'Trusted Runners',
    description: 'Verified personnel for safe and reliable service.',
  },
  {
    icon: Coins,
    alt: 'AI-Powered Routing',
    title: 'Cost-Effective Pricing',
    description: 'Affordable rates to make life easier.',
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

const button_text = 'Request an errand service now!';

const ErrandPage = () => {
    return (
        <div>
            <HeroComponent heroComponentData={heroComponentData} />
            <KeyFeatures features={features} button_text={button_text} />
            <DownloadApp />
        </div>
    );
};

export default ErrandPage;
