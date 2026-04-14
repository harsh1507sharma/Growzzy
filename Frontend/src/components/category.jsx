import React, { useState } from 'react';
import { Terminal, Scale, Stethoscope, Landmark, Palette, FlaskConical } from 'lucide-react';



export default function Category() {

    const [Category, setCategory] = useState("TECH & AI");

    const categories = [
        { title: "TECH & AI", icon: Terminal },
        { title: "LEGAL", icon: Scale },
        { title: "MEDICAL", icon: Stethoscope },
        { title: "FINANCE", icon: Landmark },
        { title: "DESIGN", icon: Palette },
        { title: "SCIENCE", icon: FlaskConical },
    ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
            {categories.map((item) => {
                const Icon = item.icon;
                const isActive = Category === item.title;
                return (
                    <div
                        key={item.title}
                        onClick={() => setCategory(item.title)}
                        className={`cursor-pointer rounded-2xl flex flex-col items-center justify-center p-6 h-36 transition-all duration-300 bg-[#192540]/40 backdrop-blur-xl ${isActive
                            ? 'border-2 border-[#b8fd4b] shadow-[0_0_20px_rgba(184,253,75,0.2)] scale-105'
                            : 'border border-[#40485d]/30 hover:border-[#b8fd4b]/50 hover:scale-105 shadow-xl shadow-black/20'
                            }`}
                    >
                        <Icon className={`w-8 h-8 mb-4 transition-colors ${isActive ? 'text-[#b8fd4b]' : 'text-[#dee5ff]/60'}`} />
                        <span className={`text-[11px] font-headline font-extrabold tracking-widest text-center ${isActive ? 'text-[#b8fd4b]' : 'text-[#dee5ff]/60'}`}>
                            {item.title}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
