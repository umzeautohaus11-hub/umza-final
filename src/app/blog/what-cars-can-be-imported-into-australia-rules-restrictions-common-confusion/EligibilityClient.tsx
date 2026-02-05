'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EligibilityClient() {
    return (
        <div className="bg-carbon">
            {/* Hero Section */}
            <section className="relative text-white min-h-[80vh] flex items-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/blog/thumb-1920-700305.jpg"
                        alt="Australian vehicle import rules and regulations"
                        className="w-full h-full object-cover animate-ken-burns"
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
                            What Cars Can Be Imported?
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#BDB6AD] leading-relaxed drop-shadow-lg">
                            Understanding vehicle import eligibility and avoiding common pitfalls
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-20 bg-[#0F1614]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-[#BDB6AD]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="prose prose-invert prose-lg max-w-none"
                    >
                        <p className="text-xl leading-relaxed mb-8">
                            One of the most common questions people ask when considering importing a vehicle is simple: "Am I actually allowed to import this car into Australia?" Whether you are looking for <Link href="/" className="text-[#25614F] hover:underline">Japanese car imports Australia</Link> buyers love or browsing the latest <Link href="/vehicles-for-import" className="text-[#25614F] hover:underline">JDM cars for sale in Australia</Link>, understanding eligibility is the first step.
                        </p>

                        <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                            Why Eligibility Matters
                        </h2>
                        <p className="leading-relaxed mb-8">
                            Australia's import regulations exist to ensure vehicles meet local standards for safety, emissions, and environmental impact. These standards differ from those in Japan.
                        </p>

                        <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                            The SEVS Pathway
                        </h2>
                        <p className="leading-relaxed mb-8">
                            For many specialist and enthusiast vehicles, eligibility is assessed through Australia's Specialist and Enthusiast Vehicle Scheme (SEVS).
                        </p>

                        <div className="bg-[#25614F]/10 rounded-3xl p-10 border border-[#25614F]/20 mt-12 text-center">
                            <h3 className="text-2xl font-bold font-heading mb-4 text-[#EAE2D6]">
                                Check Your Vehicle
                            </h3>
                            <p className="mb-8">
                                Unsure if your dream car is eligible? Let our experts verify it for you.
                            </p>
                            <Link
                                href="/contact-us"
                                className="inline-block bg-[#25614F] text-[#EAE2D6] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#1e4f3f] transition-all duration-300"
                            >
                                Verify Eligibility
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
