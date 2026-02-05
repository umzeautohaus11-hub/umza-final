'use client';

import { motion } from 'framer-motion';

export default function ViewAuctionsClient() {
    const auctions = [
        { name: 'USS Auctions', description: "Japan's largest auction network", logo: 'USS', url: 'https://www.uss-auction.jp' },
        { name: 'TAA Auctions', description: 'Premium vehicle selection', logo: 'TAA', url: 'https://www.taauctions.com' },
        { name: 'JU Auctions', description: 'JDM performance specialists', logo: 'JU', url: 'https://www.ju-auction.jp' },
        { name: 'Aucnet Auctions', description: 'Comprehensive inventory platform', logo: 'Aucnet', url: 'https://www.aucnet.co.jp' },
        { name: 'CAA Auctions', description: 'Reliable export network', logo: 'CAA', url: 'https://www.caa-auction.jp' }
    ];

    return (
        <div className="bg-carbon">
            {/* Hero Section */}
            <section className="relative text-white min-h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/images/hero-bg.jpg" alt="Japanese auction houses" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1614] via-transparent to-transparent"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight text-white drop-shadow-2xl">
                            Live Japanese Auctions
                        </h1>
                        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white leading-relaxed drop-shadow-lg">
                            Browse vehicles currently available across Japan's major auction networks.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Auction List */}
            <section className="py-20 bg-[#0F1614]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {auctions.map((auction) => (
                            <div key={auction.name} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-[#25614F] transition-all">
                                <div className="w-20 h-20 bg-[#25614F] rounded-2xl flex items-center justify-center mb-6">
                                    <span className="text-3xl font-bold text-white">{auction.logo}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{auction.name}</h3>
                                <p className="text-gray-300 mb-8">{auction.description}</p>
                                <a href={auction.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25614F] text-white px-8 py-4 rounded-xl font-bold">Visit Auctions →</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
