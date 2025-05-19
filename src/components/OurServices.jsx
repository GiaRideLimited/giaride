import React from 'react'
import { FaCar } from 'react-icons/fa'
import our_services_img from '../assets/our_services_img.png'

const OurServices = () => {
    return (
        <div className=" py-12 max-w-[90%]  md:max-w-[85%] mx-auto">
            <div className='md:max-w-[50%] mx-auto text-center'>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Our services
                </h2>
                <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Let us get you where you want to be without the stress of thinking and planning, we are safe and fast
                </p>
            </div>

            {/* Service placeholders */}
            <div className="mt-8 flex flex-col gap-[24px] md:flex-row justify-center md:items-start space-y-1 md:space-y-0">

                {/* First service cards wrapper */}
                <div className="flex flex-col gap-[24px] md:flex-1">
                    <div className="bg-white p-[16px] md:p-[24px] rounded-[16px] border border-[#E0E0E0] tracking-tight">
                        <div className="w-12 h-12 bg-[#FFE500] rounded-full flex items-center justify-center mb-4">
                            <FaCar className="text-black text-xl" />
                        </div>
                        <h3 className="text-[16px] font-semibold mb-2">
                            Drop
                        </h3>
                        <p className="text-gray-600 text-[14px] mb-1">
                            Plan description and the benefit it gives goes here
                        </p>
                        <p className="text-gray-600 text-[14px]">
                            Plan description and the benefit it gives goes here
                        </p>
                    </div>
                    <div className="bg-white p-[16px] md:p-[24px] rounded-[16px] border border-[#E0E0E0] tracking-tight">
                        <div className="w-12 h-12 bg-[#FFE500] rounded-full flex items-center justify-center mb-4">
                            <FaCar className="text-black text-xl" />
                        </div>
                        <h3 className="text-[16px] font-semibold mb-2">
                            Xend
                        </h3>
                        <p className="text-gray-600 text-[14px] mb-1">
                            Plan description and the benefit it gives goes here
                        </p>
                        <p className="text-gray-600 text-[14px]">
                            Plan description and the benefit it gives goes here
                        </p>
                    </div>


                </div>

                {/* Second service graphic */}
                <div className="hidden flex-1 bg-[#FFE500] pt-[40px] rounded-[16px] md:flex items-center justify-center">
                    <img
                        src={our_services_img}
                        alt="Driver arrival tracker"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>

                {/* Third placeholder */}
                <div className="flex flex-col gap-[24px] md:flex-1">
                    <div className="bg-white p-[16px] md:p-[24px] rounded-[16px] border border-[#E0E0E0] tracking-tight">
                        <div className="w-12 h-12 bg-[#FFE500] rounded-full flex items-center justify-center mb-4">
                            <FaCar className="text-black text-xl" />
                        </div>
                        <h3 className="text-[16px] font-semibold mb-2">
                            Hire Car
                        </h3>
                        <p className="text-gray-600 text-[14px] mb-1">
                            Plan description and the benefit it gives goes here
                        </p>
                        <p className="text-gray-600 text-[14px]">
                            Plan description and the benefit it gives goes here
                        </p>
                    </div>
                    <div className="bg-white p-[16px] md:p-[24px] rounded-[16px] border border-[#E0E0E0] tracking-tight">
                        <div className="w-12 h-12 bg-[#FFE500] rounded-full flex items-center justify-center mb-4">
                            <FaCar className="text-black text-xl" />
                        </div>
                        <h3 className="text-[16px] font-semibold mb-2">
                           Errand
                        </h3>
                        <p className="text-gray-600 text-[14px] mb-1">
                            Plan description and the benefit it gives goes here
                        </p>
                        <p className="text-gray-600 text-[14px]">
                            Plan description and the benefit it gives goes here
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default OurServices
