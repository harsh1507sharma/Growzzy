import React from 'react';
import { Play, Users, TrendingUp, Clock, Target, Zap, Plus } from 'lucide-react';

const KnowledgeMonitoring = () => {
    const stats = [
        { label: "Learning Hours", value: "42.5h", change: "+12% VS LAST WEEK", color: "text-[#b8fd4b]", status: "Live" },
        { label: "Mastery Level", value: "88%", change: "ELITE STATUS", color: "text-[#b8fd4b]", status: "Top 2%" },
        { label: "Path Velocity", value: "1.8x", change: "ACCELERATING", color: "text-[#b8fd4b]", status: "Fast" }
    ];

    return (
        <div className="flex-1 space-y-8">
            {/* 1. HEADER & CHILD SWITCHER */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-5xl font-black italic tracking-tighter text-[#dee5ff] uppercase leading-none">
                        KNOWLEDGE <br /> MONITORING
                    </h1>
                    <p className="text-[#dee5ff]/60 text-sm font-body italic mt-3">
                        Overseeing the intellectual journey of your young scholars.
                    </p>
                </div>

                {/* Switcher Dropdown */}
                <div className="bg-[#192540]/60 border border-[#40485d]/30 px-5 py-3 rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-[#192540] transition-all">
                    <span className="text-[1.5rem] leading-none">😎</span>
                    <div className="text-left">
                        <p className="text-xs font-black text-white leading-tight uppercase">Leo</p>
                        <p className="text-[10px] text-[#dee5ff]/60 font-bold italic">(Grade 4)</p>
                    </div>
                    <Target size={14} className="text-[#dee5ff]/40 ml-2" />
                </div>
            </div>

            {/* 2. OVERSIGHT STATS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((s, i) => (
                    <div key={i} className="bg-[#192540]/40 border border-[#40485d]/30 p-6 rounded-[2rem] relative overflow-hidden group hover:border-[#b8fd4b]/40 transition-all flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-10 h-10 bg-[#b8fd4b]/20 rounded-full flex items-center justify-center text-[#b8fd4b]">
                                {i === 0 ? <Clock size={20} /> : i === 1 ? <Target size={20} /> : <Zap size={20} fill="currentColor" />}
                            </div>
                            <span className="text-[9px] font-black text-[#b8fd4b] uppercase tracking-widest">{s.change}</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-[#dee5ff]/60 uppercase tracking-[0.2em] mb-1">{s.label}</p>
                            <div className="flex items-end gap-2">
                                <h2 className="text-5xl font-black text-[#b8fd4b] italic leading-none">{s.value.replace(/h|%|x/, '')}</h2>
                                <span className="text-xl font-bold text-[#b8fd4b] italic mb-1">{s.value.replace(/[0-9.]/g, '')}</span>
                                <TrendingUp size={24} strokeWidth={1.5} className="text-[#b8fd4b]/40 ml-auto" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 3. LEARNING PATH GRID (Bento Style) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* ROW 1 */}
                {/* Large Featured Card */}
                <div className="lg:col-span-2 relative min-h-[420px] rounded-[2.5rem] overflow-hidden border border-[#40485d]/30 group">
                    <img 
                        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" 
                        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"
                        alt="Quantum Physics"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060e20]/90 via-[#060e20]/40 to-transparent p-8 flex flex-col justify-between">
                        <div className="flex items-center gap-3">
                            <span className="bg-[#b8fd4b] text-[#060e20] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
                                Advancing
                            </span>
                            <span className="text-[10px] text-[#dee5ff]/60 font-bold uppercase tracking-wider">• 3 weeks in progress</span>
                        </div>
                        
                        <div>
                            <h3 className="text-[3.2rem] font-black text-white italic leading-[1] mb-6 tracking-tight">
                                Advanced <br /> Quantum Physics <br /> for Middle <br /> Schoolers
                            </h3>
                            <p className="text-[#dee5ff]/60 text-sm mb-8 max-w-sm leading-relaxed">
                                Leo is currently exploring the double-slit experiment and wave-particle duality with high retention.
                            </p>
                            
                            <div className="flex items-center gap-6">
                                <button className="w-16 h-16 bg-[#b8fd4b] rounded-full flex items-center justify-center text-[#060e20] shadow-[0_0_30px_rgba(184,253,75,0.3)] hover:scale-110 transition-all">
                                    <Play fill="currentColor" size={28} className="ml-1" />
                                </button>
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-3">
                                        <img className="w-12 h-12 rounded-full border-2 border-[#060e20]" src="https://api.dicebear.com/7.x/avataaars/svg?seed=DrAris" alt="Mentor 1" />
                                        <img className="w-12 h-12 rounded-full border-2 border-[#060e20]" src="https://api.dicebear.com/7.x/avataaars/svg?seed=ProfElena" alt="Mentor 2" />
                                        <div className="w-12 h-12 rounded-full border-2 border-[#060e20] bg-[#192540] flex items-center justify-center text-xs font-bold text-white">+2</div>
                                    </div>
                                    <span className="text-[10px] font-bold text-[#dee5ff]/40 italic">Mentors supervising</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Narrow Card */}
                <div className="bg-[#192540]/40 p-10 rounded-[2.5rem] border border-[#40485d]/30 flex flex-col justify-center group hover:border-[#b8fd4b]/40 transition-all">
                    <span className="bg-[#ffdd40]/20 text-[#ffdd40] w-fit text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
                        On Track
                    </span>
                    <h4 className="text-4xl font-black text-white italic leading-[1.1] mb-6 text-[#dee5ff] tracking-tight">Lexicon <br /> Mastery</h4>
                    <p className="text-sm text-[#dee5ff]/60 leading-relaxed mb-auto pb-10">Etymology and root words exploration.</p>
                    
                    <div className="mt-8">
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-[12px] font-bold text-white uppercase tracking-widest">Progress</span>
                            <span className="text-[12px] font-bold text-[#dee5ff]/60">72%</span>
                        </div>
                        <div className="w-full h-2 bg-[#40485d]/50 rounded-full">
                            <div className="h-full bg-[#ffdd40] w-[72%] rounded-full shadow-[0_0_10px_#ffdd40]"></div>
                        </div>
                    </div>
                </div>

                {/* ROW 2 */}
                {/* Add New Button Card */}
                <div className="h-[320px] border-2 border-dashed border-[#40485d]/50 bg-[#192540]/10 rounded-[2.5rem] flex flex-col items-center justify-center group hover:border-[#b8fd4b]/40 hover:bg-[#192540]/30 transition-all cursor-pointer">
                    <div className="w-16 h-16 bg-[#b8fd4b] rounded-full flex items-center justify-center text-[#060e20] mb-6 group-hover:scale-110 transition-all shadow-[0_0_30px_rgba(184,253,75,0.3)]">
                        <Plus size={32} strokeWidth={3} />
                    </div>
                    <p className="text-[16px] font-black uppercase text-white tracking-widest text-center leading-tight mb-2">Add New<br/>Course</p>
                    <p className="text-xs text-[#dee5ff]/40 italic">Expand the horizon</p>
                </div>

                {/* Review Needed Card */}
                <div className="lg:col-span-2 bg-[#192540]/40 p-10 rounded-[2.5rem] border border-[#40485d]/30 flex flex-col sm:flex-row items-center gap-10 group hover:border-[#b8fd4b]/40 transition-all h-[320px]">
                    <div className="w-32 h-40 rounded-[2rem] bg-[#060e20] border border-[#40485d]/50 flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1620503374956-c942862f0372?q=80&w=300&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen" alt="Algorithmic Logic" />
                    </div>
                    <div className="flex-1">
                        <span className="bg-[#fc5d5d]/20 text-[#fc5d5d] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 inline-block">
                            Review Needed
                        </span>
                        <h4 className="text-3xl font-black text-white italic leading-[1.1] mb-4 tracking-tight">Algorithmic <br/> Logic II</h4>
                        <p className="text-sm text-[#dee5ff]/60 max-w-sm leading-relaxed">Struggling with recursive functions in Python exercises.</p>
                    </div>
                    <button className="flex-shrink-1 px-1 py-3 border border-[#40485d]/50 rounded-[1.5rem] text-xs font-black uppercase tracking-wider text-white hover:bg-[#40485d]/20 transition-all hover:scale-105">
                        View<br/>Analytics
                    </button>
                </div>

            </div>
        </div>
    );
};

export default KnowledgeMonitoring;