'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CommonMistakesClient() {
    return (
        <div className="bg-carbon">
            {/* Hero Section */}
            <section className="relative text-white min-h-[80vh] flex items-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/blog/wp3159130.jpg"
                        alt="Japanese car import process and common mistakes"
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
                            Common Mistakes When Importing Cars
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#BDB6AD] leading-relaxed drop-shadow-lg">
                            Avoid these pitfalls for a smoother import experience
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
                            Importing a car from Japan can be a rewarding experience, but it's also an area where small misunderstandings can lead to frustration, delays, or unexpected costs.
                        </p>

                        <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                            Relying Only on Auction Grades
                        </h2>
                        <p className="leading-relaxed mb-8">
                            Auction grades are often treated as the final word on a vehicle's condition. While they provide a useful snapshot, they are only one part of the assessment. Context matters more than the number itself.
                        </p>

                        <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAE2D6]">
                            Chasing the Cheapest Quote
                        </h2>
                        <p className="leading-relaxed mb-8">
                            Low upfront quotes can be appealing, but they often exclude important elements such as inspections or realistic allowances for condition-related issues.
                        </p>

                        <div className="bg-[#25614F]/10 rounded-3xl p-10 border border-[#25614F]/20 mt-12 text-center">
                            <h3 className="text-2xl font-bold font-heading mb-4 text-[#EAE2D6]">
                                Need Professional Guidance?
                            </h3>
                            <p className="mb-8">
                                Avoid common pitfalls by working with an experienced import partner.
                            </p>
                            <Link
                                href="/contact-us"
                                className="inline-block bg-[#25614F] text-[#EAE2D6] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#1e4f3f] transition-all duration-300"
                            >
                                Help Me Import
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
