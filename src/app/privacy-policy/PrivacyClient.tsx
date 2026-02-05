'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyClient() {
    return (
        <div className="bg-carbon">
            {/* Hero Section */}
            <section className="relative text-white min-h-[80vh] flex items-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Privacy Policy"
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
                            Privacy Policy
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#BDB6AD] leading-relaxed drop-shadow-lg">
                            Your privacy is important to us
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
                        <p>This Privacy Policy describes how Umze Autohaus collects, uses, and discloses your personal information when you use our services.</p>
                        <h2 className="text-[#EAE2D6]">Information We Collect</h2>
                        <p>We collect information you provide directly to us, such as your name, email address, phone number, and any other information you choose to provide.</p>
                        <h2 className="text-[#EAE2D6]">How We Use Your Information</h2>
                        <p>We use the information we collect to provide, maintain, and improve our services, to respond to your inquiries, and to communicate with you.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
