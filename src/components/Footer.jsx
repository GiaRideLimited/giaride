import React from 'react';
import Logo from '../assets/logo.png';
import download_app_qr_code from '../assets/download_app_qr_code.png';
import google_play from '../assets/google_play.png';
import appstore from '../assets/appstore.png';


const Footer = () => {
    return (
        <footer className="bg-black text-white py-[80px]">
            <div className='max-w-[85%] mx-auto'>
                <div className=" flex flex-col md:flex-row justify-between items-start">
                    {/* First Column: Placeholder */}
                    <div className="md:w-1/2 md:mb-0">
                        <div className='mb-[50px]'>
                            <img src={Logo} alt="logo" />
                        </div>
                        <div>
                            <div className="flex items-center space-x-4 my-[20px] mt-0 md:hidden">
                                <div className="flex-1">
                                    <img
                                        src={google_play}
                                        alt="Google Play"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="flex-1">
                                    <img
                                        src={appstore}
                                        alt="App Store"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="hidden md:block">
                            <img src={download_app_qr_code} alt="qr code" />
                            </div>
                        </div>

                    </div>

                    {/* Second Column: Content from Image */}
                    <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-8 mt-2 md:mt-0">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Services</h3>
                            <ul className="text-gray-300 space-y-3">
                                <li>Drop</li>
                                <li>Xend</li>
                                <li>Travel Booking</li>
                                <li>Hire Car</li>
                                <li>Drivers App</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                            <ul className="text-gray-300 space-y-3">
                                <li>Twitter</li>
                                <li>Facebook</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Connect with us</h3>
                            <ul className="text-gray-300 space-y-3">
                                <li>Office GF-06, Mathis Plaza, Kanozou, Lagos, Nigeria.</li>
                                <li>hello@giaride.app</li>
                                <li>+2340000000000</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-gray-400 mt-[60px] flex flex-col md:flex-row justify-between md:items-center text-[14px]">
                    <p>&copy; GiaRide App LTD. | All Rights Reserved 2024</p>
                    <div className="flex gap-4">
                        <p>Terms</p>
                        <p>Privacy Notice</p>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
