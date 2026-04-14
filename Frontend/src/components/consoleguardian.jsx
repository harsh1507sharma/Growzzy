import React from 'react';
import { ShieldCheck, MessageSquare, BarChart2 } from 'lucide-react';

export default function ConsoleGuardian() {
    return (
        <aside className="w-full xl:w-[380px] flex-shrink-0 flex flex-col gap-6 sticky top-0 pb-10">
            {/* Header */}
            <div className="flex items-center gap-3 px-2 mb-2">
                <ShieldCheck size={20} className="text-[#b8fd4b]" />
                <h3 className="text-xl font-black uppercase text-[#dee5ff]">Guardian Console</h3>
            </div>

            {/* Parental Oversight Status Box */}
            <div className="bg-transparent border border-[#40485d]/50 rounded-[2rem] p-6 relative overflow-hidden flex flex-col group hover:border-[#b8fd4b]/40 transition-all">
                <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#b8fd4b] shadow-[0_0_10px_#b8fd4b]" />
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#dee5ff]/60 mb-6">System Status</span>
                <h2 className="text-[28px] font-black italic uppercase text-[#b8fd4b] leading-none mb-6">Parental Oversight<br/>Active</h2>
                <div className="h-1 bg-[#40485d]/30 w-full mt-auto rounded-full">
                    <div className="h-full bg-[#b8fd4b] w-[90%] rounded-full shadow-[0_0_10px_#b8fd4b]" />
                </div>
            </div>

            {/* AI Insights */}
            <div className="flex flex-col gap-4 mt-4">
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#dee5ff] px-2">AI Insights</span>
                <div className="border-l-4 border-[#ffdd40] bg-[#192540]/30 p-5 rounded-r-[1.5rem] text-[13px] italic text-[#dee5ff]/80 leading-relaxed font-body">
                    "Leo shows 94% affinity for spatial logic. Consider introducing Architectural Drafting modules next week."
                </div>
                <div className="border-l-4 border-[#b8fd4b] bg-[#192540]/30 p-5 rounded-r-[1.5rem] text-[13px] italic text-[#dee5ff]/80 leading-relaxed font-body">
                    "Engagement peaked during the 'Micro-Biology' lab. Recommendation: Order the 'Growzzy Bio-Kit' for home experimentation."
                </div>
            </div>

            {/* Active Mentors */}
            <div className="flex flex-col gap-4 mt-4 mb-4">
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#dee5ff] px-2 mb-2">Active Mentors</span>
                <div className="flex justify-between items-center bg-transparent group px-2 py-1 rounded-2xl transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img className="w-12 h-12 rounded-full border-2 border-[#192540]" src="https://api.dicebear.com/7.x/avataaars/svg?seed=DrAris" alt="Mentor" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#b8fd4b] border-[2.5px] border-[#060e20] rounded-full"></div>
                        </div>
                        <div>
                            <p className="text-[15px] font-bold text-white leading-tight mb-0.5">Dr. Aris Thorne</p>
                            <p className="text-[11px] text-[#dee5ff]/60 italic">Quantum Mechanics</p>
                        </div>
                    </div>
                    <MessageSquare size={18} className="text-[#dee5ff]/40 hover:text-[#b8fd4b] transition-colors" />
                </div>
                
                <div className="flex justify-between items-center bg-transparent group px-2 py-1 rounded-2xl transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img className="w-12 h-12 rounded-full border-2 border-[#192540]" src="https://api.dicebear.com/7.x/avataaars/svg?seed=ProfElena" alt="Mentor" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#dee5ff]/20 border-[2.5px] border-[#060e20] rounded-full"></div>
                        </div>
                        <div>
                            <p className="text-[15px] font-bold text-white leading-tight mb-0.5">Prof. Elena Vance</p>
                            <p className="text-[11px] text-[#dee5ff]/60 italic">Lexicon & Arts</p>
                        </div>
                    </div>
                    <MessageSquare size={18} className="text-[#dee5ff]/40 hover:text-[#b8fd4b] transition-colors" />
                </div>
            </div>

            {/* Download Report Button */}
            <button className="mt-auto w-full bg-[#192540]/60 hover:bg-[#192540] border border-[#40485d]/30 text-white p-5 rounded-[1.5rem] flex items-center justify-center gap-3 transition-colors group relative overflow-hidden">
                <BarChart2 size={20} className="text-[#b8fd4b] group-hover:scale-110 transition-transform" /> 
                <span className="text-[13px] font-black uppercase tracking-wider">Download Full Report</span>
            </button>
        </aside>
    );
}
