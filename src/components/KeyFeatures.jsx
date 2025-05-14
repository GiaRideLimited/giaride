import React from 'react';

const KeyFeatures = ({ features, button_text }) => {
  return (
    <div className="max-w-full md:max-w-[85%] mx-auto py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">Key Features</h1>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center md:items-start text-center md:text-start p-4">
            <img
              src={feature.icon}
              alt={feature.alt}
              className=" mb-3"
            />
            <h2 className="font-[600] text-md text-[22px] mb-2">
              {feature.title}
            </h2>
            <p className="text-sm md:text-[16px] text-black font-[300]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="px-6 py-3 bg-yellow-400 text-sm sm:text-base font-semibold text-black rounded-full hover:bg-yellow-500 transition-colors">
          {button_text}
        </button>
      </div>
    </div>
  );
};

export default KeyFeatures;
