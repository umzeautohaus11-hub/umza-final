'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogContent() {
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
                        alt="Japanese Car Imports Australia Guide"
                        className="w-full h-full object-cover animate-ken-burns"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/9 via-black/70 to-black/90"></div>
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
                            <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Complete Guide</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
                            Japanese Car Imports Australia: The Complete Guide to Buying JDM Cars with Confidence
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
                            <span>15 min read</span>
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
                            Japanese car imports in Australia have evolved from a niche enthusiast market into a mainstream choice for drivers who value reliability, performance, and unique styling. From iconic JDM sports cars to practical, high-quality daily drivers, Japanese imports offer Australians access to vehicles that often outperform local equivalents in condition, features, and long-term value.
                        </p>

                        <p className="leading-relaxed mb-8">
                            If you’re searching for <Link href="/" className="text-[#25614F] hover:underline">Japanese car imports Australia</Link> buyers trust or exploring <Link href="/vehicles-for-import" className="text-[#25614F] hover:underline">JDM cars for sale in Australia</Link>, this in-depth guide will help you understand the market, benefits, legal process, and how to choose the right importer—so you can buy with complete confidence.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">Why Japanese Car Imports Are So Popular in Australia</h2>
                        <p className="leading-relaxed mb-6">
                            Australia has a long-standing love affair with Japanese vehicles. Brands like Toyota, Nissan, Honda, Subaru, and Mazda have earned reputations for engineering excellence and longevity. Importing directly from Japan takes this one step further by giving buyers access to models and trims never officially released in Australia.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10">
                            <div className="bg-[#1a2420] p-6 rounded-2xl border border-[#25614F]/20">
                                <h3 className="text-[#25614F] font-bold text-xl mb-3">1. Superior Vehicle Condition</h3>
                                <p className="text-sm">Japanese domestic market vehicles are typically maintained to a very high standard. Strict roadworthiness rules, regular servicing, and Japan’s culture of meticulous care mean many imported cars arrive in excellent mechanical and cosmetic condition.</p>
                            </div>
                            <div className="bg-[#1a2420] p-6 rounded-2xl border border-[#25614F]/20">
                                <h3 className="text-[#25614F] font-bold text-xl mb-3">2. Access to Exclusive JDM Models</h3>
                                <p className="text-sm">Some of the most iconic JDM cars were never sold locally. Importing opens the door to legendary models, limited editions, and performance variants that simply don’t exist in the Australian new-car market.</p>
                            </div>
                            <div className="bg-[#1a2420] p-6 rounded-2xl border border-[#25614F]/20">
                                <h3 className="text-[#25614F] font-bold text-xl mb-3">3. Better Value for Money</h3>
                                <p className="text-sm">In many cases, Japanese car imports in Australia offer better specifications at a more competitive price. Buyers often get advanced features, higher trims, or turbocharged engines for less.</p>
                            </div>
                            <div className="bg-[#1a2420] p-6 rounded-2xl border border-[#25614F]/20">
                                <h3 className="text-[#25614F] font-bold text-xl mb-3">4. Proven Reliability</h3>
                                <p className="text-sm">Japanese manufacturers design vehicles for longevity. When properly imported, complied, and serviced, JDM vehicles are known for exceptional durability and dependable performance.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">Understanding JDM Cars: What Makes Them Special?</h2>
                        <p className="leading-relaxed mb-6">
                            JDM stands for Japanese Domestic Market—vehicles originally built for sale and use in Japan. These cars often differ from export versions in meaningful ways.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-[#25614F] font-bold mt-1">•</span>
                                <span><strong>Higher specifications:</strong> Premium interiors, advanced safety features, and cutting-edge technology.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#25614F] font-bold mt-1">•</span>
                                <span><strong>Performance tuning:</strong> Sportier suspension setups, turbocharged engines, and limited-slip differentials.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#25614F] font-bold mt-1">•</span>
                                <span><strong>Unique design:</strong> Body kits, factory options, and trims exclusive to Japan.</span>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">The Legal Process of Importing</h2>
                        <div className="space-y-8 my-10">
                            <div className="relative pl-8 border-l-2 border-[#25614F]">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#25614F]"></div>
                                <h3 className="text-xl font-bold text-[#EAE2D6] mb-2">Step 1: Import Approval</h3>
                                <p>Before a vehicle can be shipped, it must be approved under Australia’s import regulations. Eligibility depends on factors such as age, model type, and compliance pathway.</p>
                            </div>
                            <div className="relative pl-8 border-l-2 border-[#25614F]">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#25614F]"></div>
                                <h3 className="text-xl font-bold text-[#EAE2D6] mb-2">Step 2: Shipping and Arrival</h3>
                                <p>Vehicles are shipped from Japan to Australia using secure roll-on/roll-off or container shipping. Upon arrival, they undergo quarantine inspection and customs clearance.</p>
                            </div>
                            <div className="relative pl-8 border-l-2 border-[#25614F]">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#25614F]"></div>
                                <h3 className="text-xl font-bold text-[#EAE2D6] mb-2">Step 3: Compliance and Registration</h3>
                                <p>The car must be modified (if required) to meet Australian Design Rules (ADR). Once compliant, it can be registered and legally driven on Australian roads.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">Popular Japanese Car Imports in Australia</h2>
                        <div className="grid md:grid-cols-3 gap-6 my-10">
                            <div className="bg-[#1a2420] p-6 rounded-2xl border border-[#25614F]/20 text-center">
                                <div className="text-4xl mb-4">🏁</div>
                                <h4 className="font-bold text-[#EAE2D6] mb-2">Performance</h4>
                                <p className="text-xs">Turbocharged coupes, legendary RWD platforms, and collector classics.</p>
                            </div>
                            <div className="bg-[#1a2420] p-6 rounded-2xl border border-[#25614F]/20 text-center">
                                <div className="text-4xl mb-4">💎</div>
                                <h4 className="font-bold text-[#EAE2D6] mb-2">Luxury</h4>
                                <p className="text-xs">High-spec luxury sedans, advanced hybrids, and refined interiors.</p>
                            </div>
                            <div className="bg-[#1a2420] p-6 rounded-2xl border border-[#25614F]/20 text-center">
                                <div className="text-4xl mb-4">🚗</div>
                                <h4 className="font-bold text-[#EAE2D6] mb-2">Daily Drivers</h4>
                                <p className="text-xs">Fuel-efficient hatchbacks, reliable sedans, and compact SUVs.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">What to Check Before Buying</h2>
                        <ul className="space-y-4 mb-8">
                            <li><strong>Vehicle History:</strong> Verified auction sheets and history reports.</li>
                            <li><strong>Compliance Quality:</strong> Ensure mods meet Australian Design Rules (ADR).</li>
                            <li><strong>After-Sales Support:</strong> Choose importers offering warranties and servicing guidance.</li>
                        </ul>

                        <div className="bg-[#25614F]/10 p-10 rounded-3xl border border-[#25614F]/30 my-16 text-center">
                            <h2 className="text-3xl font-bold text-[#EAE2D6] mb-6">The Umze Autohaus Approach</h2>
                            <p className="mb-8">We handle Japanese car imports with precision, transparency, and a deep understanding of the market. Every vehicle is carefully selected, inspected, and prepared to meet strict Australian standards.</p>
                            <Link
                                href="/import-now"
                                className="inline-block bg-[#25614F] text-[#EAE2D6] px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#1e4f3f] transition-all duration-300"
                            >
                                Start Your Import
                            </Link>
                        </div>

                        <p className="italic text-center text-sm">
                            Final Thoughts: The demand for Japanese car imports in Australia continues to grow for good reason. With superior build quality, exclusive models, and excellent value, JDM vehicles offer something truly special.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Related Posts */}
            <section className="py-16 bg-carbon">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold font-heading text-center mb-12 text-[#EAE2D6]">Continue Reading</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link
                            href="/blog/auction-vs-dealer-stock-why-direct-importing-saves-you-thousands"
                            className="group bg-[#0F1614] rounded-2xl overflow-hidden border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
                        >
                            <div className="relative h-48">
                                <img
                                    src="/images/WhatsApp Image 2025-12-26 at 17.11.4722.jpeg"
                                    alt="Auction vs Dealer"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#EAE2D6] mb-3 group-hover:text-[#25614F] transition-colors">
                                    Auction vs. Dealer Stock
                                </h3>
                                <p className="text-[#BDB6AD] text-sm">
                                    Why direct importing saves you thousands compared to local dealers.
                                </p>
                            </div>
                        </Link>

                        <Link
                            href="/blog/the-compliance-headache-how-new-sevs-rules-affect-your-next-import"
                            className="group bg-[#0F1614] rounded-2xl overflow-hidden border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
                        >
                            <div className="relative h-48">
                                <img
                                    src="/images/WhatsApp Image 2025-12-26 at 17.11.464444.jpeg"
                                    alt="SEVS Rules"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#EAE2D6] mb-3 group-hover:text-[#25614F] transition-colors">
                                    Understanding SEVS Rules
                                </h3>
                                <p className="text-[#BDB6AD] text-sm">
                                    How the new compliance rules affect your Japanese car import.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
