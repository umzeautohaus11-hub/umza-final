'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HowToReadAuctionSheetClient() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="bg-carbon">
            {/* Hero Section */}
            <section className="relative text-white min-h-[80vh] flex items-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0">
                    <img
                        src="/images/blog/wp9328703.jpg"
                        alt="How to read Japanese auction sheet"
                        className="w-full h-full object-cover animate-ken-burns"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-3 bg-[#25614F]/20 rounded-full px-6 py-3 mb-8 border border-[#25614F]/30 backdrop-blur-sm"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <svg className="w-5 h-5 text-[#25614F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Beginner Guide</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
                            How to Read a Japanese Auction Sheet
                        </h1>
                        <div className="flex justify-center gap-4 mb-8">
                            <div className="w-20 h-1 bg-[#25614F] rounded-full"></div>
                            <div className="w-20 h-1 bg-[#25614F]/50 rounded-full"></div>
                            <div className="w-20 h-1 bg-[#25614F]/30 rounded-full"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-6 text-[#BDB6AD]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>December 24, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>10 min read</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-16 bg-[#0F1614]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-[#BDB6AD]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="prose prose-invert prose-lg max-w-none"
                    >
                        <p className="text-xl leading-relaxed mb-8">
                            If you're new to importing cars from Japan, auction sheets can look intimidating. The codes, grades, and diagrams seem like a foreign language designed to confuse rather than inform. But here's the good news: once you understand the system, it becomes straightforward.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">The 4 Key Sections of an Auction Sheet</h2>
                        <div className="space-y-6 mb-8">
                            {[
                                { title: 'Overall Condition', desc: "The main grade that summarises the vehicle's overall state" },
                                { title: 'Interior Condition', desc: 'How the inside of the car looks and feels' },
                                { title: 'Vehicle Features & Options', desc: 'What equipment and extras the car has' },
                                { title: 'Vehicle Diagram', desc: 'A map showing where damage or repairs are located' }
                            ].map((item, index) => (
                                <div key={index} className="bg-[#1a2420] rounded-xl p-6 border border-[#25614F]/20">
                                    <h3 className="text-xl font-bold text-[#EAE2D6] mb-3">{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">Overall Condition Grades Explained</h2>
                        <div className="grid gap-4 mb-8">
                            {[
                                { grade: 'Grade 6', desc: 'Showroom condition. Like new, often with very low kilometres.' },
                                { grade: 'Grade 5', desc: 'Excellent condition. Minimal wear, well-maintained.' },
                                { grade: 'Grade 4', desc: 'Good used condition. Normal wear for age and kilometres.' },
                                { grade: 'Grade 3', desc: 'Heavily used. Significant wear but still driveable.' }
                            ].map((item, index) => (
                                <div key={index} className="bg-[#1a2420] rounded-xl p-4 border border-[#25614F]/20">
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl font-bold text-[#25614F]">{item.grade}</span>
                                        <span>{item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#25614F]/10 p-10 rounded-3xl border border-[#25614F]/30 my-16">
                            <h2 className="text-3xl font-bold text-[#EAE2D6] mb-6">Ready to Import?</h2>
                            <p className="mb-8">Our team handles all the auction paperwork for you, ensuring a smooth and transparent import process.</p>
                            <Link
                                href="/import-now"
                                className="inline-block bg-[#25614F] text-[#EAE2D6] px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#1e4f3f] transition-all duration-300"
                            >
                                Start Your Import
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
