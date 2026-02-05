'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ComplianceRulesClient() {
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
                        src="/images/WhatsApp Image 2025-12-26 at 17.11.464444.jpeg"
                        alt="Australian vehicle compliance rules"
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Import Rules</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
                            The "Compliance" Headache: How the New SEVS Rules Affect Your Next Import
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
                            If you’ve been researching how to bring a Japanese car into Australia, you’ve likely run into a wall of acronyms: RVSA, SEVS, RAWs, and VASS. To the uninitiated, it looks like a "compliance headache." However, understanding these rules is the difference between owning a road-legal JDM masterpiece and owning a very expensive paperweight that you can’t register.
                        </p>

                        <p className="leading-relaxed mb-8">
                            In 2021, Australia fully transitioned to the Road Vehicle Standards Act (RVSA), changing the landscape for imports. Whether you are navigating the rules for <Link href="/" className="text-[#25614F] hover:underline">Japanese car imports Australia</Link> or searching for compliant <Link href="/vehicles-for-import" className="text-[#25614F] hover:underline">JDM cars for sale in Australia</Link>, here is everything you need to know about the current state of Japanese car compliance in Australia.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">1. What is SEVS? (The Golden Ticket)</h2>
                        <p className="leading-relaxed mb-6">
                            The Specialist and Enthusiast Vehicles Scheme (SEVS) is the gateway for most JDM imports. For a car to be eligible for import, it generally must meet one of several criteria:
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li><strong className="text-[#25614F]">Performance:</strong> The vehicle has high power-to-weight ratios.</li>
                            <li><strong className="text-[#25614F]">Environmental:</strong> The vehicle uses alternative fuel sources (Hybrids/EVs).</li>
                            <li><strong className="text-[#25614F]">Technical:</strong> The vehicle has unique features not found in the Australian market.</li>
                            <li><strong className="text-[#25614F]">Rarity:</strong> Only a few thousand were made globally.</li>
                        </ul>
                        <p className="leading-relaxed mb-8">
                            If a car isn't on the "SEVS Register," you generally cannot import it for road use unless it is over 25 years old. This is why you see plenty of Toyota Crowns (Hybrid/Performance) but very few standard Toyota Corollas being imported—the Corolla is already sold here, so it doesn't qualify as "specialist."
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">2. The 25-Year Rule: The "Classic" Loophole</h2>
                        <p className="leading-relaxed mb-6">
                            For many enthusiasts, the 25-year rule is the ultimate win. Any vehicle manufactured 25 years or more before the date of import can be brought into Australia with significantly fewer restrictions than newer models. This is why the market for R32/R33 Skylines and early Supras remains so strong. These vehicles don't need to meet modern SEVS criteria, though they still require a safety inspection and basic compliance to ensure they are roadworthy by Australian standards.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">3. What Actually Happens During Compliance?</h2>
                        <p className="leading-relaxed mb-6">
                            "Compliance" isn’t just a paperwork exercise; it’s a physical transformation of the car to meet Australian Design Rules (ADRs). When your car arrives from Japan, it is sent to a Registered Automotive Workshop (RAW).
                        </p>
                        <p className="leading-relaxed mb-6">Key steps usually include:</p>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-[#25614F] rounded-full mt-2.5"></div><span><strong>Child Restraint Anchorages:</strong> Most Japanese cars don't meet Australian standards for child seat points. These must be installed.</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-[#25614F] rounded-full mt-2.5"></div><span><strong>Tyre Inspection:</strong> Ensuring the tyres have the correct load rating and tread for Aussie roads.</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-[#25614F] rounded-full mt-2.5"></div><span><strong>Software Updates:</strong> For modern hybrids or EVs, systems may need to be updated or language-converted where possible.</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-[#25614F] rounded-full mt-2.5"></div><span><strong>Safety Checks:</strong> Ensuring the braking system, lights, and seatbelts meet ADR specifications.</span></li>
                        </ul>
                        <p className="leading-relaxed mb-6">
                            The "Compliance Plate": Once the RAW is satisfied, they apply for a "concessional RAV entry," which officially adds your car to the Australian government's database of road-legal vehicles.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">4. The Risks of Going Alone</h2>
                        <p className="leading-relaxed mb-6">
                            The internet is full of "bargains" on Japanese auction sites, but buying a car before checking its eligibility is a massive risk. If you buy a car that doesn't have an approved "Model Report" or doesn't fit a SEVS category, Australian Border Force will not allow it to clear customs for road use. You could be forced to re-export the car or sell it for parts at a massive loss.
                        </p>
                        <p className="leading-relaxed mb-6">
                            This is where UMZE Autohaus steps in. We vet every single vehicle for eligibility before a bid is ever placed. We ensure there is a workshop ready to take the car and a Model Report available for that specific VIN.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">5. Financing Your Import</h2>
                        <p className="leading-relaxed mb-6">
                            A common misconception is that you can’t get a loan for an import because it doesn't have an Australian "Redbook" value yet. This is no longer true. Because the RVSA has made the process more regulated and transparent, many lenders are now comfortable financing JDM imports. At UMZE Autohaus, we offer Finance Options specifically tailored for the import process, covering everything from the auction price to the compliance costs.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-[#EAE2D6] mt-12 mb-6">6. Planning Your Timeline</h2>
                        <p className="leading-relaxed mb-6">
                            Compliance takes time. Between shipping from Japan (3–6 weeks) and the workshop process (2–4 weeks depending on parts availability), you should plan for a 3-month journey from auction win to driving on the road. Patience is the price of entry for a high-quality, unique vehicle that stands out from the crowd.
                        </p>

                        <div className="bg-[#25614F]/10 rounded-3xl p-8 border border-[#25614F]/30 my-12">
                            <h3 className="text-2xl font-bold text-[#EAE2D6] mb-4">Summary: Let Us Handle the Red Tape</h3>
                            <p className="leading-relaxed mb-6">
                                Compliance doesn't have to be a headache. By partnering with a trusted importer, you turn a complex legal process into a simple, step-by-step journey. We handle the applications, the shipping, the RAW coordination, and the final delivery.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link
                                    href="/faqs"
                                    className="text-[#25614F] font-bold hover:underline"
                                >
                                    Check our FAQs
                                </Link>
                                <Link
                                    href="/import-process"
                                    className="text-[#25614F] font-bold hover:underline"
                                >
                                    Learn about our Process
                                </Link>
                            </div>
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
                            href="/blog/what-cars-can-be-imported-into-australia-rules-restrictions-common-confusion"
                            className="group bg-[#0F1614] rounded-2xl overflow-hidden border border-[#25614F]/30 hover:border-[#25614F]/60 transition-all duration-500"
                        >
                            <div className="relative h-48">
                                <img
                                    src="/images/blog/thumb-1920-700305.jpg"
                                    alt="Import eligibility"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#EAE2D6] mb-3 group-hover:text-[#25614F] transition-colors">
                                    What Cars Can Be Imported into Australia?
                                </h3>
                                <p className="text-sm">
                                    Understanding vehicle import eligibility and SEVS requirements.
                                </p>
                            </div>
                        </Link>

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
                                <p className="text-sm">
                                    Why direct importing saves you thousands compared to local dealers.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
