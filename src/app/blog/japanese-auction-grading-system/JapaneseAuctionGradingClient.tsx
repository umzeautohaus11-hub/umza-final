'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function JapaneseAuctionGradingClient() {
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
                        src="/images/blog/wp12190157.webp"
                        alt="Japanese auction grading system"
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
                            <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Buyer Education</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
                            Japanese Auction Grading System Explained
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
                            <span>12 min read</span>
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
                            Japanese auctions can feel confusing to first-time importers. Auction sheets look complex with codes, grades, and diagrams that seem like a foreign language. However, understanding these documents is crucial before you bid on any vehicle.
                        </p>
                        <p className="leading-relaxed mb-8">
                            At UMZE Autohaus, we've helped hundreds of buyers navigate Japanese auctions. We've seen costly mistakes made when people bid without properly reading auction sheets. This guide will help you understand what you're looking at and avoid those expensive errors.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">Understanding Overall Grades</h2>
                        <div className="grid gap-4 mb-8">
                            {[
                                { grade: 'S / 6 / 5', desc: 'Near-new condition. Minimal wear, often low kilometres.' },
                                { grade: '4.5 / 4 / 3.5', desc: 'Good used condition. Normal wear for age and kilometres.' },
                                { grade: '3', desc: 'Heavily used. Significant wear but still driveable.' },
                                { grade: 'RA', desc: 'Minor accident repair. Structural work completed to standard.' },
                                { grade: 'R', desc: 'Major accident or structural damage. Requires careful assessment.' }
                            ].map((item, index) => (
                                <div key={index} className="bg-[#1a2420] rounded-xl p-4 border border-[#25614F]/20">
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl font-bold text-[#25614F]">{item.grade}</span>
                                        <span>{item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">Interior Grades Explained</h2>
                        <div className="grid gap-4 mb-8">
                            {[
                                { grade: 'Grade A', desc: 'Like new. Minimal wear, clean, no stains or damage.' },
                                { grade: 'Grade B', desc: 'Good condition. Normal wear for kilometres, minor scuffs.' },
                                { grade: 'Grade C', desc: 'Noticeable wear. Some stains, worn seats, but functional.' },
                                { grade: 'Grade D', desc: 'Heavy wear. Significant damage, tears, or smells.' }
                            ].map((item, index) => (
                                <div key={index} className="bg-[#1a2420] rounded-xl p-4 border border-[#25614F]/20">
                                    <div className="flex items-center gap-4">
                                        <span className="text-xl font-bold text-[#25614F]">{item.grade}</span>
                                        <span>{item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">Common Exterior Codes</h2>
                        <ul className="space-y-4 mb-8">
                            <li><strong>A1–A3:</strong> Scratches (A1 light, A3 noticeable)</li>
                            <li><strong>U1–U3:</strong> Dents (U1 small, U3 larger dents)</li>
                            <li><strong>W:</strong> Paint waves or panel misalignment</li>
                            <li><strong>S:</strong> Rust spots or rust-related issues</li>
                            <li><strong>X:</strong> Panel replacement</li>
                        </ul>

                        <div className="bg-[#25614F]/10 p-10 rounded-3xl border border-[#25614F]/30 my-16">
                            <h2 className="text-3xl font-bold text-[#EAE2D6] mb-6">Need Expert Verification?</h2>
                            <p className="mb-8">Don't risk your money on a misread auction sheet. Our team provides professional translation and verification services for all Japanese imports.</p>
                            <Link
                                href="/contact-us"
                                className="inline-block bg-[#25614F] text-[#EAE2D6] px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#1e4f3f] transition-all duration-300"
                            >
                                Contact Our Team
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
