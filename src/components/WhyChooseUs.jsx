import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import why_choose_us from '../assets/why_choose_us.png'; // Adjust the path as necessary

const features = [
  {
    id: 'cost-efficient',
    title: 'Cost-Efficient Ride-Sharing',
    content: 'Share moving trips with others moving or traveling the same route, significantly reducing your expenses.',
  },
  {
    id: 'ai-logistics',
    title: 'AI-Powered Logistics',
    content: 'Our intelligent algorithms optimize routes and schedules, ensuring your deliveries are faster and more cost-effective.',
  },
  {
    id: 'scheduled-trips',
    title: 'Scheduled Trips & Group Commutes',
    content: 'Plan ahead by booking solo or shared rides. Enjoy discounted rates for pre-scheduled journeys and group travel.',
  },
  {
    id: 'car-rentals',
    title: 'Convenient Car Rentals',
    content: 'Access a diverse fleet of vehicles perfect for any occasion, from business trips to leisurely drives, all at your fingertips.',
  },
  {
    id: 'seamless-planning',
    title: 'Seamless Travel Planning',
    content: 'Explore, compare, and book your travel with unparalleled ease. We offer multiple options to suit your preferences.',
  },
  {
    id: 'affordable-pricing',
    title: 'Affordable Pricing',
    content: 'Benefit from competitive rates across all our services, with extra savings through shared rides and deliveries.',
  },
  {
    id: 'ai-optimization',
    title: 'AI-Driven Optimization',
    content: 'Experience efficiency like never before. Our AI tailors routes and schedules to minimize travel time and costs.',
  },
  {
    id: 'safety-first',
    title: 'Safety First',
    content: 'Your safety is our priority. We ensure all drivers are verified, and all transactions are secure for peace of mind.',
  },
  {
    id: 'multiple-services',
    title: 'Multiple Service Options',
    content: 'From daily commutes and logistics to car rentals and planned trips, GiaRide is your one-stop mobility solution.',
  },
];

const WhyChooseUs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-[90%] md:max-w-[85%] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Why Choose GiaRide?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the benefits of choosing GiaRide for your transportation and logistics needs. We're committed to providing reliable, efficient, and affordable solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Accordion Section */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="space-y-4">
              {features.map((item, idx) => (
                <div key={item.id} className="rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
                  <button
                    type="button"
                    className="w-full flex justify-between items-center text-left focus:outline-none focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-75 cursor-pointer"
                    onClick={() => toggleExpand(idx)}
                    aria-expanded={expandedIndex === idx}
                    aria-controls={`feature-content-${item.id}`}
                  >
                    <span className="text-md font-semibold text-slate-700">
                      {item.title}
                    </span>
                    {expandedIndex === idx ? (
                      <FaChevronUp className="text-teal-500 h-4 w-4 transform transition-transform" />
                    ) : (
                      <FaChevronDown className="text-slate-400 h-4 w-4 transform transition-transform" />
                    )}
                  </button>
                  <div
                    id={`feature-content-${item.id}`}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ maxHeight: expandedIndex === idx ? '200px' : '0px' }}
                  >
                    <p className="px-3 md:px-5 pb-5 pt-2 text-slate-600 text-sm">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-3/5 mt-4 md:mt-0">
            <div className="relative flex items-center justify-center">
              <img
                src={why_choose_us}
                alt="Illustrative graphic showcasing GiaRide's services and benefits"
                className="w-full max-w-md lg:max-w-full h-auto object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;