'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BenefitsClient() {
    return (
        <div className="bg-carbon">
            {/* Hero Section */}
            <section className="relative text-white min-h-[80vh] flex items-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/blog/wp3486288.jpg"
                        alt="Japanese luxury import vehicle"
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
                            Benefits of Importing from Japan
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#BDB6AD] leading-relaxed drop-shadow-lg">
                            Why Japanese imports are the smart choice for Australian buyers
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
                            Importing vehicles from Japan offers numerous advantages for Australian buyers. From better condition to unique models, Japanese imports provide excellent value and quality. Whether you are searching for <Link href="/" className="text-[#25614F] hover:underline">Japanese car imports Australia</Link> buyers trust or browsing <Link href="/vehicles-for-import" className="text-[#25614F] hover:underline">JDM cars for sale in Australia</Link>, the benefits are undeniable.
                        </p>

                        <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                            Lower Kilometers and Better Condition
                        </h2>
                        <p className="leading-relaxed mb-8">
                            Japanese vehicles are known for their low mileage and excellent maintenance. Strict inspection standards and a culture of regular servicing ensure that cars from Japan are often in better condition than their local equivalents.
                        </p>

                        <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                            Transparent Auction History
                        </h2>
                        <p className="leading-relaxed mb-8">
                            The Japanese auction system provides complete documentation and grading, giving buyers clear information about a vehicle's history. This transparency helps in making informed purchasing decisions.
                        </p>

                        <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                            Access to Unique Models
                        </h2>
                        <p className="leading-relaxed mb-8">
                            Japan offers a wide selection of models, special editions, and specifications that are rare or not available in the Australian market. This includes JDM classics, performance vehicles, and collector cars.
                        </p>

                        <div className="bg-[#25614F]/10 rounded-3xl p-10 border border-[#25614F]/20 mt-12 text-center">
                            <h3 className="text-2xl font-bold font-heading mb-4 text-[#EAE2D6]">
                                Ready to Start?
                            </h3>
                            <p className="mb-8">
                                Let us help you navigate the import process and find the right vehicle for you.
                            </p>
                            <Link
                                href="/contact-us"
                                className="inline-block bg-[#25614F] text-[#EAE2D6] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#1e4f3f] transition-all duration-300"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
