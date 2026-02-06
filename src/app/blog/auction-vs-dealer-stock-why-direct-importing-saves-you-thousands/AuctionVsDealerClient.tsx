'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AuctionVsDealerClient() {
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
                        src="/images/Lexus-Collecting-Cars-22-08-2025-Ari-Gelgec25.avif"
                        alt="Japanese car auction vs dealer stock"
                        className="w-full h-full object-cover animate-ken-burns"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/9 dynamics via-black/70 to-black/90"></div>
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Buyer Education</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
                            Auction vs. Dealer Stock: Why Direct Importing Saves You Thousands
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
                            <span>February 5, 2026</span>
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
                            The dream of owning a Japanese Domestic Market (JDM) icon—be it a pristine Toyota Crown, a rugged Mitsubishi Delica, or a high-performance Nissan Skyline—is a staple for Australian car enthusiasts. However, once you decide to pull the trigger, you face a critical fork in the road: do you buy a car already sitting on an Australian dealer’s lot, or do you import one directly from the Japanese auctions?
                        </p>

                        <p className="leading-relaxed mb-8">
                            While the convenience of a local dealer is tempting, the financial and qualitative benefits of direct importing are overwhelming. If you are looking for <Link href="/" className="text-[#25614F] hover:underline">Japanese car imports Australia</Link> enthusiasts recommend or browsing the best <Link href="/vehicles-for-import" className="text-[#25614F] hover:underline">JDM cars for sale in Australia</Link>, at UMZE Autohaus, we believe in transparency. In this guide, we’ll break down why the "long way around" is actually the smartest shortcut to your dream car.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">1. The Reality of the "Dealer Markup"</h2>
                        <p className="leading-relaxed mb-6">
                            When you walk onto a local JDM dealership in Australia, the price tag you see isn’t just the cost of the car. It is a sum of the auction price, shipping, compliance, and—most significantly—the dealer’s overhead.
                        </p>
                        <p className="leading-relaxed mb-6">
                            Dealers have to pay for physical showrooms, staff, floor plan interest, and marketing. To stay profitable, they often add a margin of $5,000 to $15,000 (or more for rare models) on top of the actual cost of the vehicle. When you import directly with a broker like UMZE Autohaus, you bypass this retail markup. You pay the actual costs of the car and a fixed service fee, keeping that $5k–$15k in your own pocket.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">2. The Power of the Auction Grade System</h2>
                        <p className="leading-relaxed mb-6">
                            One of the biggest risks of buying "locally arrived" stock is the lack of history. Often, the original Japanese auction sheets—the "birth certificate" of a JDM import—mysteriously disappear once the car reaches a local car yard.
                        </p>
                        <p className="leading-relaxed mb-6">In Japan, auction houses use a strict, unbiased grading system:</p>
                        <ul className="space-y-4 mb-8">
                            <li><strong className="text-[#25614F]">Grade S/6:</strong> Brand new.</li>
                            <li><strong className="text-[#25614F]">Grade 5:</strong> As close to new as possible.</li>
                            <li><strong className="text-[#25614F]">Grade 4.5/4:</strong> Excellent condition with minor imperfections.</li>
                            <li><strong className="text-[#25614F]">Grade 3.5/3:</strong> Average to poor condition, potentially needing work.</li>
                            <li><strong className="text-[#25614F]">Grade R/RA:</strong> Accident history or repaired.</li>
                        </ul>
                        <p className="leading-relaxed mb-6">
                            When you import directly, you see the original auction sheet before you bid. You know if the car had a Grade 4 exterior but a Grade B interior. You know if there is a tiny rust bubble on the undercarriage or if the mileage has been verified. Buying local stock often means taking the dealer's word for it; importing means having the facts in black and white.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">3. Unrivalled Selection: Japan is Your Showroom</h2>
                        <p className="leading-relaxed mb-6">
                            A local dealer might have 20 or 30 cars in stock. On any given week, Japanese auctions (like USS, JAA, and HAA) list over 150,000 vehicles.
                        </p>
                        <p className="leading-relaxed mb-6">
                            If you want a Toyota Vellfire with specific cream leather seats, a sunroof, and under 60,000km, the chances of finding it in a suburban Australian car yard are slim. By importing, you aren’t limited to what someone else decided to buy; you have access to the entire Japanese market. Whether it’s a specific color, a rare factory option, or a particular modifications list, we source exactly what you want.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">4. You Become the First Australian Owner</h2>
                        <p className="leading-relaxed mb-6">
                            Resale value is a major factor in car ownership. A car that has been in Australia for five years, through three different owners, and serviced at various workshops will never hold its value as well as a "Fresh Import."
                        </p>
                        <p className="leading-relaxed mb-6">
                            When you import through UMZE Autohaus, you are the first person to registered the car in Australia. You have the Japanese de-registration certificate, the export certificates, and a clean slate for the service history. To a future buyer, a "One Australian Owner, Freshly Imported" vehicle is worth a significant premium.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">5. Total Price Transparency</h2>
                        <p className="leading-relaxed mb-6">
                            One of the most common complaints about buying JDM cars is "hidden costs." At UMZE Autohaus, we use a dedicated Import Cost Calculator to remove the guesswork.
                        </p>
                        <p className="leading-relaxed mb-6">When you import, you see the breakdown:</p>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#25614F] rounded-full"></div><span>The Hammer Price: What the car actually cost at auction.</span></li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#25614F] rounded-full"></div><span>FOB Fees: The Japanese side handling.</span></li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#25614F] rounded-full"></div><span>Freight & Insurance: Getting it across the ocean.</span></li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#25614F] rounded-full"></div><span>GST & Duties: Paying the Australian government.</span></li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#25614F] rounded-full"></div><span>Compliance: Meeting Australian safety standards.</span></li>
                        </ul>
                        <p className="leading-relaxed mb-6">
                            There are no "surprise" dealer delivery fees. You see where every dollar goes.
                        </p>

                        <div className="bg-gradient-to-br from-[#25614F]/20 to-transparent rounded-3xl p-8 border border-[#25614F]/30 my-12">
                            <h3 className="text-2xl font-bold text-[#EAE2D6] mb-4">Conclusion: Take the Driver’s Seat</h3>
                            <p className="leading-relaxed">
                                Buying from a dealer is a passive experience—you take what you’re given. Importing is an active, rewarding process where you remain in control of your budget and the quality of your vehicle.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 mt-12">
                            <Link
                                href="/vehicles-for-import"
                                className="bg-[#25614F] text-[#EAE2D6] px-10 py-4 rounded-xl font-bold text-center hover:bg-[#1e4f3f] transition-all duration-300"
                            >
                                Explore Vehicles
                            </Link>
                            <Link
                                href="/import-now"
                                className="border-2 border-[#25614F] text-[#25614F] px-10 py-4 rounded-xl font-bold text-center hover:bg-[#25614F]/10 transition-all duration-300"
                            >
                                Start Your Journey
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Related Posts */}
            <section className="py-16 bg-carbon">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold font-heading text-center mb-12 text-[#EAE2D6]">Continue Reading</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link
                            href="/blog/japanese-auction-grading-system"
                            className="group bg-[#0F1614] rounded-2xl overflow-hidden border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
                        >
                            <div className="relative h-48">
                                <img
                                    src="/images/blog/wp12190157.webp"
                                    alt="Japanese auction grading system"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#EAE2D6] mb-3 group-hover:text-[#25614F] transition-colors">
                                    Japanese Auction Grading System Explained
                                </h3>
                                <p className="text-sm">
                                    Learn how to decode Japanese auction sheets and understand grading codes.
                                </p>
                            </div>
                        </Link>

                        <Link
                            href="/calculator"
                            className="group bg-[#0F1614] rounded-2xl overflow-hidden border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
                        >
                            <div className="relative h-48 bg-gradient-to-br from-[#25614F]/20 to-[#25614F]/10 flex items-center justify-center">
                                <svg className="w-20 h-20 text-[#25614F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#EAE2D6] mb-3 group-hover:text-[#25614F] transition-colors">
                                    Import Cost Calculator
                                </h3>
                                <p className="text-sm">
                                    Estimate your total landed costs with full transparency.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
