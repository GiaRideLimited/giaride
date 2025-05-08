import React from 'react';

const KeyFeatures = ({ features }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">Key Features</h1>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4">
            <img
              src={feature.icon}
              alt={feature.alt}
              className="w-16 h-16 sm:w-20 sm:h-20 mb-4"
            />
            <h2 className="font-semibold text-xl sm:text-2xl mb-2">
              {feature.title}
            </h2>
            <p className="text-base sm:text-sm md:text-base text-gray-700">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="px-6 py-3 bg-yellow-400 text-sm sm:text-base font-semibold text-black rounded-full hover:bg-yellow-500 transition-colors">
          Request an errand service now!
        </button>
      </div>
    </div>
  );
};

export default KeyFeatures;
