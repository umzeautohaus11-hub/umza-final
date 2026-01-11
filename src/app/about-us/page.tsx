'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-carbon">
      {/* Hero Section - Modern Overlay */}
      <section className="relative text-white h-screen flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Japanese classic car"
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
              <div className="w-2 h-2 bg-[#25614F] rounded-full animate-pulse"></div>
              <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Our Story</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight text-[#EAE2D6] drop-shadow-2xl">
              WE HELP PEOPLE IN AUSTRALIA IMPORT QUALITY CARS FROM JAPAN
            </h1>
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-20 h-1 bg-[#25614F] rounded-full"></div>
              <div className="w-20 h-1 bg-[#25614F]/50 rounded-full"></div>
              <div className="w-20 h-1 bg-[#25614F]/30 rounded-full"></div>
            </div>
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl mb-12 max-w-3xl mx-auto text-[#EAE2D6] leading-relaxed drop-shadow-lg font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Safely. Transparently. Confidently.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-[#BDB6AD]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#25614F] rounded-full"></div>
              <span>Real Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#25614F] rounded-full"></div>
              <span>Honest Advice</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#25614F] rounded-full"></div>
              <span>Realistic Expectations</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Story - Modern Visual Storytelling */}
      <section id="story" className="py-32 bg-[#0F1614] relative overflow-hidden">
        {/* Flowing Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#25614F] rounded-full mb-8 shadow-xl">
              <svg className="w-10 h-10 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#EAE2D6]">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full mb-4"></div>
            <div className="w-16 h-1 bg-[#25614F]/50 mx-auto rounded-full"></div>
          </motion.div>

          {/* Modern Storytelling Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Visual Timeline */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-3xl md:text-4xl text-[#EAE2D6] font-light italic mb-8">
                  "It started with a passion, not a business plan."
                </p>
              </motion.div>

              {/* Interactive Timeline */}
              <div className="space-y-8">
                {[
                  {
                    year: "2012",
                    title: "The Beginning",
                    description: "The founder's father began importing vehicles from Japan, driven by a genuine appreciation for Japanese cars and their value.",
                    icon: "🚗"
                  },
                  {
                    year: "2019",
                    title: "First Import",
                    description: "The founder imported his first car: a Toyota Chaser, revealing the true value of Japanese imports.",
                    icon: "📦"
                  },
                  {
                    year: "2020",
                    title: "Growth",
                    description: "What began as helping friends grew into a full-service import business built on real experience.",
                    icon: "📈"
                  },
                  {
                    year: "Today",
                    title: "Our Mission",
                    description: "Continuing the tradition of honesty, transparency, and genuine care for each client.",
                    icon: "🎯"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-12 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {/* Timeline Line */}
                    <div className="absolute left-4 top-0 w-px h-full bg-gradient-to-b from-[#25614F] to-transparent"></div>
                    
                    {/* Year Badge */}
                    <div className="absolute left-0 top-2 w-8 h-8 bg-[#25614F] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xs font-bold text-[#EAE2D6]">{item.icon}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="bg-[#1C1C1C]/50 rounded-xl p-4 border border-[#25614F]/20 group-hover:border-[#25614F]/40 transition-all">
                      <div className="text-[#25614F] font-bold mb-1">{item.year}</div>
                      <h3 className="text-[#EAE2D6] font-semibold mb-2">{item.title}</h3>
                      <p className="text-[#BDB6AD] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Visual Story */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-gradient-to-br from-[#25614F]/10 to-[#1e4f3f]/10 rounded-3xl overflow-hidden border border-[#25614F]/30">
                <div className="absolute inset-0 bg-gradient-to-br from-[#25614F]/20 to-transparent"></div>
                <div className="relative p-8 z-10">
                  <img
                    src="/images/06 Honda NSX - credit Honda copy.jpg"
                    alt="Our Story Visual"
                    className="w-full h-80 object-cover rounded-2xl mb-6"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#EAE2D6] mb-4">
                      Built on Real Experience
                    </h3>
                    <p className="text-[#BDB6AD] leading-relaxed">
                      UMZE Autohaus was built on principles of real experience, honesty, transparency, and genuine care for each client.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Key Principles Section */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              {
                title: "Transparency",
                description: "Clear communication and honest advice throughout the entire import process.",
                icon: "🔍"
              },
              {
                title: "Expertise",
                description: "Real auction experience and detailed vehicle analysis beyond grades.",
                icon: "🎓"
              },
              {
                title: "Client Care",
                description: "Personalized guidance and support for every client's unique needs.",
                icon: "🤝"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                className="bg-[#1C1C1C]/50 rounded-xl p-6 border border-[#25614F]/20 hover:border-[#25614F]/40 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h4 className="text-xl font-bold text-[#EAE2D6] mb-3">{principle.title}</h4>
                <p className="text-[#BDB6AD] text-sm leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Japan - Enhanced Visual Section */}
      <section className="py-32 bg-carbon relative overflow-hidden">
        {/* Background Element */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-[#25614F]/20 rounded-full px-6 py-3 mb-8 border border-[#25614F]/30">
                <svg className="w-5 h-5 text-[#25614F]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#25614F] font-semibold text-sm uppercase tracking-wider">Location Matters</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-[#EAE2D6]">
                Why Japan?
              </h2>
              <div className="w-24 h-1 bg-[#25614F] rounded-full mb-8"></div>
              
              <p className="text-2xl text-[#EAE2D6] font-light leading-relaxed mb-6">
                Japanese vehicles stand apart because of how they're maintained, not just how they're built.
              </p>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#25614F] to-transparent rounded-full"></div>
                <p className="text-[#BDB6AD] text-lg leading-relaxed">
                  Strict inspection standards, excellent road infrastructure, and a culture of regular maintenance mean Japanese cars often arrive in Australia with lower kilometres and better overall condition than their local equivalents.
                </p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#25614F] to-transparent rounded-full"></div>
                <p className="text-[#BDB6AD] text-lg leading-relaxed">
                  Beyond condition, there's access. Japan offers models, specifications, and special editions that simply aren't available in the Australian market - including JDM classics, performance vehicles, and collector cars that retain their value.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Enhanced Icon Flow */}
      <section id="why-us" className="py-32 bg-[#0F1614] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#25614F] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#EAE2D6]">
              What Makes UMZE Autohaus Different
            </h2>
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-16 h-1 bg-[#25614F] rounded-full"></div>
              <div className="w-16 h-1 bg-[#25614F]/60 rounded-full"></div>
              <div className="w-16 h-1 bg-[#25614F]/30 rounded-full"></div>
            </div>
            <p className="text-xl text-[#BDB6AD] max-w-3xl mx-auto">
              Our approach combines genuine experience with transparent practices
            </p>
          </motion.div>

          {/* Features Grid - Modern Icon Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 max-w-6xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'We Look Beyond Auction Grades',
                description: 'An auction grade is just a starting point. We analyse photos in detail, commission physical inspections, check underbody condition, verify rust points, assess engine bay signs, and evaluate overall presentation before recommending any vehicle.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Real Savings, No Hidden Costs',
                description: "We help you understand exactly what you're paying for - vehicle price, shipping, taxes, compliance, and registration. No surprise fees, no unclear breakdowns. Just clear expectations from start to finish."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Personal Guidance, Every Step',
                description: "You're not handed off to a faceless system. We translate auction sheets, review condition reports, explain what's important, and keep you informed throughout the entire import process."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "We Don't Cut Corners",
                description: "Our focus is helping you import safely and confidently. We won't push you toward a bad deal or skip important checks to close a sale. Your long-term satisfaction matters more than a quick transaction."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Icon Circle */}
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full flex items-center justify-center shadow-xl">
                    <div className="absolute inset-0 rounded-full bg-[#25614F] opacity-20 blur-xl"></div>
                    <div className="relative text-[#EAE2D6]">
                      {feature.icon}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-[#EAE2D6] mb-4">
                    {feature.title}
                  </h3>
                  <div className="w-16 h-1 bg-[#25614F] rounded-full mb-4"></div>
                  <p className="text-[#BDB6AD] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Vehicle Range - Enhanced Flow */}
      <section className="py-32 bg-carbon relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(37,97,79,0.15) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#EAE2D6]">
              Experience & Vehicle Range
            </h2>
            <div className="w-24 h-1 bg-[#25614F] mx-auto rounded-full mb-8"></div>
            <p className="text-2xl text-[#25614F] font-semibold">
              Over 100 vehicles successfully imported
            </p>
          </motion.div>

          {/* Vehicle Categories - Flowing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'JDM Classics', desc: 'Skyline, Supra, Chaser, RX-7', icon: '🏁' },
              { title: 'Daily Drivers', desc: 'Reliable imports for everyday use', icon: '🚗' },
              { title: 'Performance Cars', desc: 'High-power, driver-focused machines', icon: '⚡' },
              { title: 'European Imports', desc: 'UK and European classics', icon: '🇪🇺' },
              { title: 'Hybrids & Collectors', desc: 'Rare finds and investment pieces', icon: '💎' }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  {/* Icon */}
                  <div className="text-6xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-[#EAE2D6] font-bold text-lg mb-3">{category.title}</h3>
                    <div className="w-12 h-1 bg-[#25614F] mx-auto rounded-full mb-3 group-hover:w-20 transition-all duration-300"></div>
                    <p className="text-[#BDB6AD] text-sm leading-relaxed">{category.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Circular Design */}
      <section className="py-32 bg-[#0F1614] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#25614F]/20 to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: '100+', label: 'Vehicles Imported' },
              { number: '2012', label: 'Journey Began' },
              { number: '2019', label: "Founder's First Import" },
              { number: '100%', label: 'Transparency' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full flex items-center justify-center shadow-2xl">
                    <div className="absolute inset-0 rounded-full bg-[#25614F] opacity-20 blur-xl"></div>
                    <div className="relative text-4xl font-bold text-[#EAE2D6]">{stat.number}</div>
                  </div>
                </div>
                <h4 className="text-[#BDB6AD] font-semibold text-sm">{stat.label}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement - Full Width */}
      <section className="py-32 bg-carbon relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-[#25614F] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#25614F] to-[#1e4f3f] rounded-full mb-10 shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <div className="absolute inset-0 rounded-full bg-[#25614F] opacity-20 blur-xl"></div>
              <svg className="relative w-12 h-12 text-[#EAE2D6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-12 text-[#EAE2D6]">
              Our Mission
            </h2>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#25614F]/20 via-[#25614F]/30 to-[#25614F]/20 blur-xl rounded-3xl"></div>
              <p className="relative text-3xl md:text-4xl text-[#EAE2D6] leading-relaxed font-light py-12 px-8">
                Helping people import quality cars from Japan <span className="text-[#25614F] font-semibold">safely</span>, <span className="text-[#25614F] font-semibold">transparently</span>, and <span className="text-[#25614F] font-semibold">confidently</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Modern Gradient */}
      <section className="py-32 bg-gradient-to-br from-[#25614F] via-[#25614F]/95 to-[#1e4f3f] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-heading mb-6 text-[#EAE2D6]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Import?
          </motion.h2>
          <motion.p
            className="text-xl text-[#EAE2D6]/90 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss your requirements and find the right vehicle for you.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact-us"
                className="bg-[#EAE2D6] text-[#25614F] px-12 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 inline-block shadow-2xl"
              >
                Get in Touch
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/calculator"
                className="border-2 border-[#EAE2D6] text-[#EAE2D6] px-12 py-5 rounded-full font-bold text-lg hover:bg-[#EAE2D6]/10 backdrop-blur-sm transition-all duration-300 inline-block"
              >
                View Calculator
              </Link>
            </motion.div>
          </motion.div>

          {/* Google Reviews Link */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="https://share.google/Ch858CdwF3raEktou"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#EAE2D6] text-[#25614F] px-8 py-4 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Read Our Google Reviews
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
