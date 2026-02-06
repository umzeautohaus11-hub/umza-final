'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsClient() {
    return (
        <div className="bg-carbon">
            {/* Hero Section */}
            <section className="relative text-white min-h-[80vh] flex items-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Terms of Service"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight text-[#EAE2D6] drop-shadow-2xl">
                            Terms of Service
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#BDB6AD] leading-relaxed drop-shadow-lg">
                            Please read these terms carefully
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 bg-[#0F1614]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-[#BDB6AD]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="prose prose-invert prose-lg max-w-none"
                    >
                        <p className="text-[#BDB6AD] leading-relaxed mb-8">
                            These Terms of Service govern your use of Umze Autohaus services. By using our services, you agree to these terms.
                        </p>

                        <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                            Our Services
                        </h2>
                        <p className="text-[#BDB6AD] leading-relaxed mb-8">
                            We provide vehicle import services from Japan to Australia. Our services include vehicle sourcing, bidding, shipping, customs clearance, compliance, and delivery.
                        </p>

                        <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                            Your Responsibilities
                        </h2>
                        <p className="text-[#BDB6AD] leading-relaxed mb-8">
                            You are responsible for providing accurate information, making timely payments, and complying with all applicable laws and regulations.
                        </p>

                        <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                            Payment Terms
                        </h2>
                        <p className="text-[#BDB6AD] leading-relaxed mb-8">
                            Payment is due as specified in our agreement. Late payments may incur additional fees.
                        </p>

                        <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                            Limitation of Liability
                        </h2>
                        <p className="text-[#BDB6AD] leading-relaxed mb-8">
                            We are not liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
                        </p>

                        <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                            Changes to These Terms
                        </h2>
                        <p className="text-[#BDB6AD] leading-relaxed mb-8">
                            We may update these Terms of Service from time to time. If we make changes, we will notify you by revising the date at the top of the terms.
                        </p>

                        <div className="bg-[#25614F]/10 rounded-xl p-6 border border-[#25614F]/20 mt-12">
                            <h3 className="text-2xl font-bold font-heading mb-4 text-[#EAE2D6]">
                                Contact Us
                            </h3>
                            <p className="text-[#BDB6AD] leading-relaxed">
                                If you have any questions about these Terms of Service, please contact us at <a href="mailto:info@umzeautohaus.com.au" className="text-[#EAE2D6] hover:text-[#25614F] transition-colors">info@umzeautohaus.com.au</a>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
