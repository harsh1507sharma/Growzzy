import React from 'react';
import { BrainCog, Sparkles } from 'lucide-react';
export default function Performance() {
  const path = [
    {
      id: 1,
      title: 'Data Structures',
      subtitle: 'Completed 2 days ago',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Computational Ethics',
      subtitle: 'Next: Bias Neutralization Lab',
      status: 'current',
    },
    {
      id: 3,
      title: 'Neural Integration',
      subtitle: 'Locked Content',
      status: 'locked',
    },
    {
      id: 4,
      title: 'Global Governance',
      subtitle: 'Locked Content',
      status: 'locked',
    }
  ];
  return (
    <div className="w-[19rem] bg-[#060e20]/60 backdrop-blur-xl rounded-[2rem] p-8 border border-[#40485d]/20 shadow-2xl">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <BrainCog className="w-8 h-8 text-[#b8fd4b]" />
          <h2 className="text-xl font-headline font-bold text-[#dee5ff] leading-tight bg-gradient-to-br from-[#dee5ff] to-[#dee5ff]/60 bg-clip-text text-transparent">Path<br/>Progress</h2>
        </div>
        <Sparkles className="w-12 h-12 text-[#dee5ff]/10 -mt-2 -mr-2" />
      </div>
      {/* Progress Percentage */}
      <div className="flex justify-between items-end mb-3">
        <span className="text-4xl font-extrabold text-[#b8fd4b] tracking-tighter">64%</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#dee5ff]/40 mb-1.5">Level 4</span>
      </div>
      {/* Glowing Progress Bar */}
      <div className="h-2 bg-black rounded-full mb-10 overflow-hidden shadow-inner">
        <div className="h-full w-[64%] bg-gradient-to-r from-[#b8fd4b] to-[#fed01b] rounded-full shadow-[0_0_10px_rgba(184,253,75,0.6)]"></div>
      </div>
      {/* Vertical Timeline Tracker */}
      <div className="flex flex-col">
        {path.map((item, index) => {
          const isLast = index === path.length - 1;
          const isCompleted = item.status === 'completed';
          const isCurrent = item.status === 'current';
          const isLocked = item.status === 'locked';
          return (
            <div key={item.id} className="relative flex gap-6">
              
              {/* Branch/Dot Logic */}
              <div className="relative flex flex-col items-center w-3 flex-shrink-0 mt-1 z-10">
                <div className={`w-3 h-3 rounded-full flex-shrink-0 transition-all ${
                  isCompleted ? 'bg-[#b8fd4b] shadow-[0_0_10px_rgba(184,253,75,0.4)]' : 
                  isCurrent ? 'bg-[#b8fd4b] ring-[5px] ring-[#b8fd4b]/20 shadow-[0_0_15px_rgba(184,253,75,0.6)]' : 
                  'bg-[#1f2b49]'
                }`}></div>
                
                {/* Connecting Line extending downwards */}
                {!isLast && (
                  <div className={`absolute top-4 w-[2px] h-[calc(100%+16px)] ${
                    isCompleted ? 'bg-[#b8fd4b]/80' : 'bg-[#1f2b49]/60'
                  }`}></div>
                )}
              </div>
              {/* Text / Action Content */}
              <div className="pb-8 flex-1">
                <h4 className={`text-[15px] font-headline font-bold leading-snug tracking-tight ${
                  isCurrent ? 'text-[#b8fd4b]' : 
                  isCompleted ? 'text-[#dee5ff]' : 
                  'text-[#1f2b49]' /* Locked Content */
                }`}>
                  {item.title}
                </h4>
                <p className={`text-[13px] italic font-body mt-1 ${
                  isLocked ? 'text-[#1f2b49]' : 'text-[#dee5ff]/60'
                }`}>
                  {item.subtitle}
                </p>
                {/* Conditional Resume Button */}
                {isCurrent && (
                  <button className="mt-4 px-6 py-2.5 rounded-full bg-[#192540]/80 border border-[#b8fd4b]/10 text-[10px] font-black uppercase tracking-widest text-[#b8fd4b] hover:bg-[#b8fd4b]/10 hover:-translate-y-0.5 transition-transform shadow-[0_0_15px_rgba(184,253,75,0.05)]">
                    Resume Path
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    
    </div>
  );
}
