import React, { useState, useRef } from 'react';

const privacyPolicySections = [
    {
        id: 'privacy-1',
        title: "1. Introduction",
        content: [
            "Welcome to GiaRide. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services."
        ],
    },
    {
        id: 'privacy-2',
        title: "2. Information We Collect",
        content: [
            "We collect personal information such as your name, phone number, email, payment details, and location data when you use GiaRide services. We may also collect non-personal information such as device information and usage patterns."
        ],
    },
    {
        id: 'privacy-3',
        title: "3. How We Use Your Information",
        content: [
            "We use your Information to:",
            {
                type: 'list',
                items: [
                    "Provide and improve our services.",
                    "Process transactions and payments.",
                    "Enhance user safety and security.",
                    "Communicate updates and promotions.",
                    "Comply with legal obligations."
                ]
            }
        ],
    },
    {
        id: 'privacy-4',
        title: "4. Information Sharing",
        content: [
            "We do not sell your personal data. We may share information with service providers, law enforcement (as required by law), and in the event of a business transfer."
        ],
    },
    {
        id: 'privacy-5',
        title: "5. Data Security",
        content: [
            "We implement industry-standard security measures to protect your data. However, no online transmission is 100% secure."
        ],
    },
    {
        id: 'privacy-6',
        title: "6. Your Rights and Choices",
        content: [
            "You may update or delete your account information and opt out of marketing communications at any time."
        ],
    },
    {
        id: 'privacy-7',
        title: "7. Changes to This Policy",
        content: [
            "We may update this policy periodically. Continued use of GiaRide after changes means you accept the updated terms."
        ],
    },
    {
        id: 'privacy-8',
        title: "8. Contact Us",
        content: [
            <>If you have questions, contact us at <a href="mailto:hello@giaride.com" className="text-blue-600 hover:underline">hello@giaride.com</a>.</>
        ],
    },
];

const termsOfServiceSections = [
    {
        id: 'tos-1',
        title: "1. Acceptance of Terms",
        content: [
            "By using GiaRide, you agree to comply with these Terms of Service. If you do not agree, please do not use our services."
        ]
    },
    {
        id: 'tos-2',
        title: "2. Service Description",
        content: [
            "GiaRide provides transportation, logistics, and errand services via its platform. Users may book rides, deliveries, and other services through our app."
        ]
    },
    {
        id: 'tos-3',
        title: "3. User Responsibilities",
        content: [
            "Users must:",
            {
                type: 'list',
                items: [
                    "Provide accurate registration details.",
                    "Use GiaRide for lawful purposes only.",
                    "Respect drivers, riders, and service providers.",
                    "Not engage in fraudulent activities."
                ]
            }
        ]
    },
    {
        id: 'tos-4',
        title: "4. Payments and Fees",
        content: [
            "All payments for services must be made through the GiaRide platform. Fees are subject to change, and users will be notified of any modifications."
        ]
    },
    {
        id: 'tos-5',
        title: "5. Cancellation and Refunds",
        content: [
            "Users may cancel rides and services within the permitted time frame. Refund policies vary based on the service type."
        ]
    },
    {
        id: 'tos-6',
        title: "6. Liability and Disclaimers",
        content: [
            "GiaRide is not liable for any personal injury, loss, or damage resulting from the use of our services. All users assume responsibility for their interactions on the platform."
        ]
    },
    {
        id: 'tos-7',
        title: "7. Account Termination",
        content: [
            "We reserve the right to suspend or terminate user accounts for violations of these terms."
        ]
    },
    {
        id: 'tos-8',
        title: "8. Modifications to Terms",
        content: [
            "GiaRide may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the revised terms."
        ]
    },
    {
        id: 'tos-9',
        title: "9. Governing Law",
        content: [
            "These terms are governed by the laws of Federal Republic of Nigeria."
        ]
    },
    {
        id: 'tos-10',
        title: "10. Contact Us",
        content: [
            <>For inquiries, contact <a href="mailto:hello@giaride.com" className="text-blue-600 hover:underline">hello@giaride.com</a>.</>
        ]
    }
];


const LegalPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const privacyRef = useRef(null);
    const termsRef = useRef(null);

    const handleNavClick = (ref, isMobile = false) => (e) => {
        e.preventDefault();
        if (ref.current) {
            const offset = 80; // Adjust this offset based on your fixed header height or desired spacing
            const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        if (isMobile) {
            setIsMobileMenuOpen(false);
        }
    };

    const renderSections = (sectionsData) => {
        return sectionsData.map((section) => (
            <section key={section.id} className="mb-6">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                    {section.title}
                </h2>
                {section.content.map((item, index) => {
                    if (typeof item === 'string') {
                        return (
                            <p key={index} className="text-gray-700 leading-relaxed mb-3">
                                {item}
                            </p>
                        );
                    } else if (item.type === 'list') {
                        return (
                            <ul key={index} className="list-disc list-inside pl-4 text-gray-700 leading-relaxed space-y-1 mb-3">
                                {item.items.map((listItem, listItemIndex) => (
                                    <li key={listItemIndex}>{listItem}</li>
                                ))}
                            </ul>
                        );
                    } else {
                        // This handles JSX elements like the mailto link
                        return (
                            <div key={index} className="text-gray-700 leading-relaxed mb-3">
                                {item}
                            </div>
                        );
                    }
                })}
            </section>
        ));
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className='bg-black text-white text-center py-20 md:py-24 lg:pt-[100px] lg:pb-[calc(400px+50px)]'>
                <h1 className='text-3xl sm:text-4xl lg:text-[56px] font-semibold px-4'>Privacy Policy & Terms</h1>
                <p className='text-base sm:text-lg lg:text-[19px] text-gray-200 font-light mt-2 sm:mt-3 px-4'>Updated 12th May, 2025</p>
            </div>

            {/* Content Section (White Card) */}
            <div className="bg-white font-sans text-gray-800 w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-[85%] mx-auto
                           md:rounded-[16px] md:shadow-xl
                            p-4 sm:p-6 lg:p-[30px]
                            -mt-[50px] sm:-mt-24 md:-mt-48 lg:-mt-[400px] relative z-10 mb-10">

                {/* Mobile Navigation Toggle */}
                <div className="md:hidden mb-6 flex justify-between items-center border-b pb-4">
                    <span className="text-xl font-semibold text-gray-800">Page Sections</span>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-700 hover:text-black focus:outline-none p-2"
                        aria-label="Toggle navigation"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu (Dropdown) */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden bg-gray-50 p-4 rounded-md shadow mb-6">
                        <ul>
                            <li>
                                <a href="#privacy-policy" onClick={handleNavClick(privacyRef, true)} className="block py-2 text-gray-700 hover:text-black font-medium">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#terms-of-service" onClick={handleNavClick(termsRef, true)} className="block py-2 text-gray-700 hover:text-black font-medium">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </nav>
                )}

                <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12">
                    {/* Sidebar for Medium+ Screens */}
                    <aside className="hidden md:block md:w-56 lg:w-64 md:sticky md:top-24 self-start md:h-[calc(100vh-8rem)] md:overflow-y-auto">
                        <nav>
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-semibold">Sections</p>
                            <ul>
                                <li className="mb-1">
                                    <a href="#privacy-policy" onClick={handleNavClick(privacyRef)} className="block py-2 px-3 rounded-md text-gray-700 hover:bg-gray-100 hover:text-black font-medium">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#terms-of-service" onClick={handleNavClick(termsRef)} className="block py-2 px-3 rounded-md text-gray-700 hover:bg-gray-100 hover:text-black font-medium">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 w-full mt-8 md:mt-0">
                        {/* Privacy Policy Section */}
                        <div id="privacy-policy" ref={privacyRef} className="scroll-mt-24 md:scroll-mt-28">
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                                Privacy Policy
                            </h1>
                            {renderSections(privacyPolicySections)}
                        </div>

                        <hr className="my-8 md:my-12 border-gray-200" />

                        {/* Terms of Service Section */}
                        <div id="terms-of-service" ref={termsRef} className="scroll-mt-24 md:scroll-mt-28">
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                                Terms of Service
                            </h1>
                            {renderSections(termsOfServiceSections)}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;