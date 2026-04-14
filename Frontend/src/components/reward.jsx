import React from "react"
import { Gift, ArrowUpRight } from 'lucide-react'

const Reward = () => {
    return (
        <div className="reward w-full lg:w-80 shrink-0 bg-[#060e20]/60 backdrop-blur-xl border border-[#40485d]/30 rounded-[2rem] p-6 shadow-2xl">
            {/* HEADING */}
            <div className="heading mb-8 flex items-center justify-between">
                <h1 className="text-[10px] font-black tracking-[0.3em] text-[#b8fd4b] uppercase italic">
                    Academic Credit
                </h1>
                <Gift size={16} className="text-[#b8fd4b] opacity-50" />
            </div>

            {/* CONTENT */}
            <div className="content">
                <div className="card bg-[#192540]/40 border border-[#b8fd4b]/20 rounded-2xl p-5 relative overflow-hidden group">
                    {/* Background Glow Effect */}
                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#b8fd4b]/10 blur-3xl rounded-full group-hover:bg-[#b8fd4b]/20 transition-all"></div>
                    
                    <div className="text relative z-10">
                        <h2 className="text-4xl font-black text-white tracking-tighter mb-2">
                            $50.00
                        </h2>
                        <p className="text-[11px] font-body italic text-[#dee5ff]/60 leading-relaxed">
                            Redeemable on <span className="text-[#dee5ff] font-bold">Coursera</span>, 
                            <span className="text-[#dee5ff] font-bold ml-1">Udemy</span>, and 
                            <span className="text-[#dee5ff] font-bold ml-1">Skillshare</span>.
                        </p>
                    </div>
                </div>

                {/* VISUAL DIVIDER (Dashed Line like a Coupon) */}
                <hr className="my-6 border-dashed border-[#40485d]/40" />

                {/* FOOTER */}
                <div className="footer">
                    <button className="w-full bg-[#b8fd4b] hover:bg-[#a3e635] text-[#060e20] py-3 rounded-xl font-headline font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_0_20px_rgba(184,253,75,0.2)]">
                        Redeem Now <ArrowUpRight size={14} />
                    </button>
                    <p className="text-center text-[9px] text-[#dee5ff]/20 font-bold tracking-widest mt-4 uppercase">
                        Issued by Growzzy Luminary
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Reward;