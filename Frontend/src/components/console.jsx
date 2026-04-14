import React from "react"

const Console = () => {
    return (
        <aside className="w-full xl:w-[350px] shrink-0">
            {/* Command Console Big Card */}
            <div className="bg-[#101726] border border-[#1f2b49] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col">
                
                <div className="p-8">
                    {/* Top Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-[#b8fd4b] rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(184,253,75,0.3)]">
                            <span className="material-symbols-outlined text-[#3d5e00] text-3xl">mark_email_read</span>
                        </div>
                        <div>
                            <h2 className="text-[22px] font-headline font-black text-[#dee5ff] uppercase tracking-tighter leading-tight">Command<br/>Console</h2>
                        </div>
                    </div>
                    <p className="text-[10px] font-black text-[#b8fd4b] tracking-[0.2em] uppercase mb-8">Institutional Training<br/>Portal</p>
                    
                    {/* Enrolled & Mentors Status Boxes */}
                    <div className="flex gap-4 mb-10">
                        <div className="flex-1 bg-[#050a14] border border-[#1f2b49] rounded-[1rem] p-4 shadow-inner">
                            <p className="text-[9px] font-black tracking-widest text-[#dee5ff]/40 uppercase mb-2">Enrolled</p>
                            <p className="text-2xl font-headline font-black text-[#dee5ff]">1,240</p>
                        </div>
                        <div className="flex-1 bg-[#050a14] border border-[#1f2b49] rounded-[1rem] p-4 shadow-inner">
                            <p className="text-[9px] font-black tracking-widest text-[#dee5ff]/40 uppercase mb-2">Mentors</p>
                            <p className="text-2xl font-headline font-black text-[#dee5ff]">42</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-[#1f2b49] mb-10"></div>

                    {/* Active Trainees List */}
                    <h3 className="text-[11px] font-black tracking-widest text-[#dee5ff]/60 uppercase mb-6">Active Trainees</h3>
                    
                    <div className="flex flex-col gap-6">
                        {/* Trainee 1 */}
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="relative shrink-0">
                                <div className="w-12 h-12 rounded-full border-2 border-[#1f2b49] overflow-hidden bg-[#060e20]">
                                    <img src="https://i.pravatar.cc/150?img=11" alt="Marcus Chen" className="w-full h-full object-cover group-hover:scale-110 transition-transform"/>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#b8fd4b] rounded-full border-2 border-[#101726]"></div>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1.5">
                                    <h4 className="text-[15px] font-headline font-bold text-[#dee5ff] group-hover:text-[#b8fd4b] transition-colors">Harsh Sharma</h4>
                                    <span className="text-[10px] font-black text-[#b8fd4b] tracking-widest">LV. 04</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-[#b8fd4b] shadow-[0_0_5px_rgba(184,253,75,0.6)]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#b8fd4b] shadow-[0_0_5px_rgba(184,253,75,0.6)]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#b8fd4b] shadow-[0_0_5px_rgba(184,253,75,0.6)]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#1f2b49]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#1f2b49]"></div>
                                    </div>
                                    <span className="text-[10px] font-bold text-[#dee5ff]/40">60%</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Trainee 2 */}
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="relative shrink-0">
                                <div className="w-12 h-12 rounded-full border-2 border-[#1f2b49] overflow-hidden bg-[#060e20]">
                                    <img src="https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg" alt="Elena Rodriguez" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#b8fd4b] rounded-full border-2 border-[#101726]"></div>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1.5">
                                    <h4 className="text-[15px] font-headline font-bold text-[#dee5ff] group-hover:text-[#b8fd4b] transition-colors">Tony Stark</h4>
                                    <span className="text-[10px] font-black text-[#b8fd4b] tracking-widest">LV. 09</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-[#b8fd4b] shadow-[0_0_5px_rgba(184,253,75,0.6)]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#b8fd4b] shadow-[0_0_5px_rgba(184,253,75,0.6)]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#b8fd4b] shadow-[0_0_5px_rgba(184,253,75,0.6)]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#b8fd4b] shadow-[0_0_5px_rgba(184,253,75,0.6)]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#1f2b49]"></div>
                                    </div>
                                    <span className="text-[10px] font-bold text-[#dee5ff]/40">95%</span>
                                </div>
                            </div>
                        </div>

                        {/* Trainee 3 */}
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="relative shrink-0">
                                <div className="w-12 h-12 rounded-full border-2 border-[#1f2b49] overflow-hidden bg-[#060e20]">
                                    <img src="https://i.pravatar.cc/150?img=5" alt="Sarah Jenkins" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#fed01b] rounded-full border-2 border-[#101726] shadow-[0_0_10px_rgba(254,208,27,0.5)]"></div>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1.5">
                                    <h4 className="text-[15px] font-headline font-bold text-[#dee5ff] group-hover:text-[#fed01b] transition-colors">Jerry</h4>
                                    <span className="text-[10px] font-black text-[#dee5ff]/50 tracking-widest">LV. 02</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-[#b8fd4b] shadow-[0_0_5px_rgba(184,253,75,0.6)]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#1f2b49]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#1f2b49]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#1f2b49]"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#1f2b49]"></div>
                                    </div>
                                    <span className="text-[10px] font-bold text-[#dee5ff]/40">20%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mentorship Level Bottom Dark Block */}
                <div className="bg-[#050a14] p-8 border-t border-[#1f2b49] mt-auto">
                    <div className="flex justify-between items-end mb-6">
                        <h3 className="text-[11px] font-black tracking-widest text-[#dee5ff]/60 uppercase leading-snug">Mentorship<br/>Level</h3>
                        <div className="text-right">
                            <span className="text-[22px] font-headline font-black text-[#b8fd4b] leading-none block tracking-tight">Elite</span>
                            <span className="text-[22px] font-headline font-black text-[#b8fd4b] leading-[1.2] block tracking-tight">Educator</span>
                        </div>
                    </div>
                    
                    {/* Full Progress Bar */}
                    <div className="w-full h-2.5 bg-[#1f2b49] rounded-full overflow-hidden mb-5 border border-[#40485d]/20">
                        <div className="h-full w-[85%] bg-gradient-to-r from-[#b8fd4b] to-[#fed01b] rounded-full shadow-[0_0_15px_rgba(184,253,75,0.6)]"></div>
                    </div>
                    
                    <p className="text-[12px] font-body italic text-[#dee5ff]/50 leading-relaxed pr-2">
                        You are currently in the top <span className="text-[#dee5ff] font-bold not-italic">2%</span> of performing institutional educators globally.
                    </p>
                </div>
            </div>
        </aside>
    )
}

export default Console;