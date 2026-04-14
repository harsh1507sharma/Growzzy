import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeRole, setActiveRole] = useState(null);

  // Updates the state and automatically clears the toast alert
  const handleSignIn = (roleTitle) => {
    setActiveRole(roleTitle);
    setTimeout(() => setActiveRole(null), 3000);
  };

  // Defining the Framer Motion entrance variations for Bento cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="bg-[#060e20] text-[#dee5ff] font-body overflow-x-hidden min-h-screen">
      
      {/* Dynamic Toast Notification for Role Selection */}
      <AnimatePresence>
        {activeRole && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#83c300]/20 border border-[#83c300]/50 text-[#b8fd4b] px-6 py-3 rounded-full backdrop-blur-md shadow-2xl flex items-center gap-2"
          >
            <div className="w-2 h-2 bg-[#b8fd4b] rounded-full animate-pulse"></div>
            Connecting as <strong className="font-semibold text-white">{activeRole}</strong>...
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-[#1f2b49]/40 backdrop-blur-xl shadow-[0_32px_64px_-12px_rgba(222,229,255,0.06)]">
        <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black bg-gradient-to-r from-[#b8fd4b] to-[#fed01b] bg-clip-text text-transparent font-headline tracking-tight">
            Growzzy
          </div>
          <div className="hidden md:flex items-center space-x-8 font-headline font-bold tracking-tight">
            <Link to="/login" className="text-[#b8fd4b] border-b-2 border-[#b8fd4b] pb-1 hover:text-[#b8fd4b] transition-all duration-300 font-label">Sign In</Link>
            <a className="text-[#dee5ff] opacity-80 hover:text-[#b8fd4b] transition-all duration-300" href="#">Paths</a>
            <a className="text-[#dee5ff] opacity-80 hover:text-[#b8fd4b] transition-all duration-300" href="#">Library</a>
            <a className="text-[#dee5ff] opacity-80 hover:text-[#b8fd4b] transition-all duration-300" href="#">Mentors</a>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center space-x-4 text-[#dee5ff]">
              <span className="material-symbols-outlined cursor-pointer hover:text-[#b8fd4b] transition-colors">notifications</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-[#b8fd4b] transition-colors">account_circle</span>
            </div>
            <button className="bg-gradient-to-r from-[#b8fd4b] to-[#83c300] text-[#3d5e00] px-6 py-2.5 rounded-full font-headline font-bold text-sm scale-95 active:scale-90 transition-transform">
              Join Elite
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
        
        {/* Ambient Glow Decorations */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#b8fd4b]/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-[#fed01b]/5 blur-[150px] rounded-full"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-8 py-12 md:py-24">
          
          {/* Framer Motion Title Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] text-[#dee5ff]"
          >
            Elevate Your <br/>
            <span className="bg-gradient-to-r from-[#b8fd4b] to-[#fed01b] bg-clip-text text-transparent">Intelligence</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl text-xl md:text-2xl text-[#a3aac4] font-body italic opacity-80"
          >
            Experience the dawn of editorial education. A private sanctuary for learners, curated by AI, and mastered by luminaries.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <button className="bg-gradient-to-r from-[#b8fd4b] to-[#83c300] text-[#3d5e00] px-10 py-4 rounded-full font-headline font-bold text-lg shadow-[0_20px_40px_rgba(184,253,75,0.2)] hover:shadow-[0_25px_50px_rgba(184,253,75,0.3)] transition-all">
              Start Your Path
            </button>
            <button className="bg-[#1f2b49]/40 backdrop-blur-xl text-[#dee5ff] border border-[#40485d]/20 px-10 py-4 rounded-full font-headline font-bold text-lg hover:bg-[#1f2b49] transition-all">
              View Courses
            </button>
          </motion.div>
        </div>

        {/* Role-Based Grid (Bento Style/Asymmetric) */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Student Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-[#1f2b49]/40 backdrop-blur-xl border border-[#40485d]/15 p-8 flex flex-col md:flex-row gap-8 min-h-[450px]"
          >
            <div className="md:w-1/2 z-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-[#b8fd4b]">school</span>
                  <span className="font-headline font-bold text-sm tracking-widest text-[#b8fd4b] uppercase">The Learner</span>
                </div>
                <h2 className="font-headline text-3xl font-bold text-[#dee5ff] mb-4">Student</h2>
                <p className="text-lg text-[#a3aac4] mb-6 leading-relaxed">
                  Personalized AI-guided paths that weave through core curriculum and supplemental digital content.
                </p>
                <ul className="space-y-3 font-label text-sm font-semibold text-[#dee5ff]/80">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#fed01b] text-[18px]">check_circle</span> AI-Guided Pathfinding</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#fed01b] text-[18px]">check_circle</span> YouTube Supplement Integration</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#fed01b] text-[18px]">check_circle</span> Gamified Reward Milestones</li>
                </ul>
              </div>
              <Link 
                to="/login?role=student"
                className="mt-8 flex items-center gap-2 font-headline font-bold text-[#b8fd4b] hover:animate-pulse transition-all w-max"
              >
                Begin Journey <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-full rounded-xl overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700" alt="Modern high-tech workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArLKa2tjrgnrtmeFRx9yddFCvZGw5dPBFnB0uaYlRTHgZKOp8iacKJRnqjHMjstuP48aQlzhJep0jETwc3u1J3bXFL3BNocxcwy5QwJQEZDpVeibRTtasGx6189v03PwCT8c-m6qLqnehus9jUjGs1Gj4NyzVIzaSlTmemVimBXvyPUPQpLDkBx-man18zryy7altdrukhvFmtCw5tppIgCCKtx-uOZm29PbvTja3Ilz5jbwMJpgpuUXP2_05DZIetrzTGQU-gAuNS" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1930]/80 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* Educator Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-[#1f2b49]/40 backdrop-blur-xl border border-[#40485d]/15 p-8 flex flex-col justify-between"
          >
            <div className="z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[#9bffce]">history_edu</span>
                <span className="font-headline font-bold text-sm tracking-widest text-[#9bffce] uppercase">The Luminary</span>
              </div>
              <h2 className="font-headline text-3xl font-bold text-[#dee5ff] mb-4">Educator</h2>
              <p className="text-[#a3aac4] mb-6 italic">
                Monetize your expertise and shape the next generation of minds with high-fidelity toolsets.
              </p>
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-[#091328] border border-[#40485d]/10">
                  <span className="block font-headline font-bold text-xs text-[#fed01b] mb-1">REVENUE FOCUS</span>
                  <p className="text-sm">Direct course sales &amp; subscription-based training modules.</p>
                </div>
              </div>
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden mb-6">
              <img className="absolute inset-0 w-full h-full object-cover" alt="Educator tools" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB670ao_xrWC7UrnjCLwGHFBcVxB73HXmlDZtHQacnitWR7jwIpRjDpFFSzQATHV6L-AFcs-eyBqtc-v96zOt7VStRk4oq4IJh4nT0IyWRv05kYPWD4kzW68StbsVwbR9-5BoAWWXF1wfBwdKCwoV3Xch4iJzpSccYkDqIZHScptFZpmVPNIazK7ulw-jZw4xgwuBjRtAblEW0IAPttitvy-2QclVz3cFPZVdYZDz3l3tB-Zc6-Aq5bYNG-oSYhqvSjXcqkHZQS_zId" />
            </div>
            <Link 
              to="/login?role=educator"
              className="w-full block text-center bg-[#1f2b49]/40 backdrop-blur-xl border border-[#b8fd4b]/20 text-[#b8fd4b] py-3 rounded-full font-headline font-bold hover:bg-[#b8fd4b]/10 transition-colors"
            >
              Become a Mentor
            </Link>
          </motion.div>

          {/* Parent Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-12 group relative overflow-hidden rounded-2xl bg-[#1f2b49]/40 backdrop-blur-xl border border-[#40485d]/15 p-8 md:p-12 flex flex-col md:flex-row-reverse gap-10 items-center"
          >
            <div className="md:w-1/2 z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-[#fed01b]">family_history</span>
                  <span className="font-headline font-bold text-sm tracking-widest text-[#fed01b] uppercase">The Guardian</span>
                </div>
                <h2 className="font-headline text-4xl font-bold text-[#dee5ff] mb-6">Parents &amp; Homeschooling</h2>
                <p className="text-xl text-[#a3aac4] mb-8 leading-relaxed font-body">
                  Curate a healthy learning ecosystem within your home. Stay connected to your child's cognitive development with deep-dive feedback loops and AI-monitored growth.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1f2b49] p-2 rounded-lg"><span className="material-symbols-outlined text-[#b8fd4b]">analytics</span></div>
                    <div>
                      <h4 className="font-headline font-bold text-sm">Real-time Progress</h4>
                      <p className="text-xs text-[#a3aac4]">Live visual telemetry of learning milestones.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1f2b49] p-2 rounded-lg"><span className="material-symbols-outlined text-[#b8fd4b]">psychology</span></div>
                    <div>
                      <h4 className="font-headline font-bold text-sm">AI Guidance</h4>
                      <p className="text-xs text-[#a3aac4]">Intelligent paths tailored to child's pace.</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link 
                to="/login?role=parent"
                className="mt-8 w-max inline-block text-center bg-[#1f2b49]/40 backdrop-blur-xl border border-[#fed01b]/50 text-[#fed01b] py-3 px-8 rounded-full font-headline font-bold hover:bg-[#fed01b]/10 transition-colors"
              >
                Enter Guardian Portal
              </Link>
            </div>
            <div className="md:w-1/2 relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Parent and Child" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdhlqHsNqIjtjavJ4v47Mwlk96c73PdM6FbZilf_IaWaNT1c_mGQdy4PYraKP2flAMlaMzqNB36o2yr0LJi3s9zeqSCsLruR9zHMQP-DH-_-qR1yPSr9kQSdWPmZnTwR72hJLrYj9pyTzrSnB8KGDPHw1rF33Tc1FwsQUwo-KEO9L8aiJRowVpvyFxYM8F5I6Qlnbs43YlvbDQvpCFIlbkrimx-yZAwwKEei8UMoPy1TA2WngU8jZ6N2sh1g5eBP0ONtEFEmTj1IR9" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060e20]/40 to-transparent"></div>
            </div>
          </motion.div>
        </section>

        {/* AI Path Tracker Component Mockup */}
        <section className="mt-32 relative py-20 px-8 rounded-2xl bg-[#091328] border border-[#40485d]/10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="font-headline text-3xl font-bold mb-4">Your Intelligent Trajectory</h3>
            <p className="text-[#a3aac4] font-body text-lg italic">A vertical, non-linear progression that adapts to your curiosity.</p>
          </div>
          <div className="flex flex-col items-center relative py-10">
            {/* SVG Gradient Line */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-1 h-full bg-gradient-to-b from-[#b8fd4b] via-[#fed01b] to-[#9bffce] opacity-30 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-24 relative z-10 w-full">
              <div className="flex items-center justify-center md:justify-start md:ml-[35%] gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[#1f2b49]/40 backdrop-blur-xl border-2 border-[#b8fd4b]/40 flex items-center justify-center text-[#b8fd4b] shadow-[0_0_20px_rgba(184,253,75,0.2)]">
                  <span className="material-symbols-outlined">star</span>
                </div>
                <div className="bg-[#1f2b49]/40 backdrop-blur-xl p-6 rounded-2xl border border-[#40485d]/10 max-w-xs transition-all group-hover:-translate-y-1">
                  <span className="font-headline font-bold text-xs text-[#b8fd4b] mb-1 block">FOUNDATION</span>
                  <h4 className="font-headline font-bold text-lg mb-2">Computational Ethics</h4>
                  <p className="text-sm text-[#a3aac4]">Introduction to the philosophical frameworks of AI.</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end md:mr-[35%] gap-6 group">
                <div className="bg-[#1f2b49]/40 backdrop-blur-xl p-6 rounded-2xl border border-[#40485d]/10 max-w-xs text-right transition-all group-hover:-translate-y-1">
                  <span className="font-headline font-bold text-xs text-[#fed01b] mb-1 block">ACTIVE PATH</span>
                  <h4 className="font-headline font-bold text-lg mb-2">Neural Visuals</h4>
                  <p className="text-sm text-[#a3aac4]">Mastering generative design through structural prompting.</p>
                </div>
                <div className="w-14 h-14 rounded-full bg-[#1f2b49]/40 backdrop-blur-xl border-2 border-[#fed01b]/40 flex items-center justify-center text-[#fed01b] shadow-[0_0_20px_rgba(254,208,27,0.2)]">
                  <span className="material-symbols-outlined">lens</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#091328] w-full rounded-t-[1.5rem] mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-7xl mx-auto">
          <div className="mb-8 md:mb-0">
            <div className="text-xl font-bold text-[#dee5ff] font-headline mb-2">Growzzy</div>
            <p className="text-[#dee5ff]/60 font-body italic text-lg">© 2024 Growzzy. The Academic Luminary.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a className="text-[#dee5ff]/60 font-headline font-bold text-sm hover:text-[#b8fd4b] underline decoration-2 underline-offset-4 transition-opacity" href="#">Privacy Policy</a>
            <a className="text-[#dee5ff]/60 font-headline font-bold text-sm hover:text-[#b8fd4b] underline decoration-2 underline-offset-4 transition-opacity" href="#">Terms of Service</a>
            <a className="text-[#dee5ff]/60 font-headline font-bold text-sm hover:text-[#b8fd4b] underline decoration-2 underline-offset-4 transition-opacity" href="#">Academic Integrity</a>
            <a className="text-[#dee5ff]/60 font-headline font-bold text-sm hover:text-[#b8fd4b] underline decoration-2 underline-offset-4 transition-opacity" href="#">Contact Us</a>
          </div>
          <div className="mt-8 md:mt-0 flex gap-4">
            <span className="material-symbols-outlined text-[#dee5ff]/40 hover:text-[#b8fd4b] transition-colors cursor-pointer">public</span>
            <span className="material-symbols-outlined text-[#dee5ff]/40 hover:text-[#b8fd4b] transition-colors cursor-pointer">language</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
