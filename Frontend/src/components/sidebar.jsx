import React from 'react';
import { 
  Compass, Map, Gift, Settings, 
  LayoutDashboard, BookOpen, Users, BarChart3,
  LayoutGrid, Milestone, GraduationCap, LifeBuoy
} from 'lucide-react'
export default function Sidebar({role}) {
  const studentLinks = [
    { icon: <Compass size={20}/>, label: "Compass" },
    { icon: <Map size={20}/>, label: "Paths" },
    { icon: <Gift size={20}/>, label: "Rewards" },
    { icon: <Settings size={20}/>, label: "Settings" },
  ];
  const educatorLinks = [
    { icon: <LayoutDashboard size={20}/>, label: "Dashboard" },
    { icon: <BookOpen size={20}/>, label: "Curriculum" },
    { icon: <Users size={20}/>, label: "Students" },
    { icon: <BarChart3 size={20}/>, label: "Analytics" },
  ];
  const guardianLinks = [
    { icon: <LayoutGrid size={20}/>, label: "Overview" },
    { icon: <Map size={20}/>, label: "Learning Path", active: true },
    { icon: <Milestone size={20}/>, label: "Milestones" },
    { icon: <GraduationCap size={20}/>, label: "Mentors" },
  ];
  const links = role === "student" ? studentLinks : role === "educator" ? educatorLinks : guardianLinks;
  return (
    <aside className="w-[260px] flex-shrink-0 bg-[#060e20] border-r-[1px] border-[rgba(64,72,93,0.2)] flex flex-col justify-between hidden lg:flex h-full py-6">
      
      <div>
        {/* TOP SECTION: Dynamic based on role */}
        <div className="px-6 mb-8">
          {role === "guardian" ? (
            // Guardian Specific Profile Header
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#192540] border border-[#b8fd4b]/20 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Leo" alt="Leo" />
              </div>
              <div>
                <h2 className="text-sm font-black text-white tracking-tight">Leo's Progress</h2>
                <p className="text-[9px] text-[#dee5ff]/40 font-bold italic">Grade 4 • Advanced</p>
              </div>
            </div>
          ) : (
            
            <>
              <h2 className="text-xl font-headline font-black text-white tracking-tight">
                {role === "educator" ? "Institutional Hub" : "Your Sanctuary"}
              </h2>
              <p className="text-[10px] text-[#b8fd4b] font-black uppercase tracking-widest mt-1">
                {role === "educator" ? "Premium Management" : "Academic Explorer"}
              </p>
            </>
          )}
        </div>
        
        {/* MENU LINKS */}
        <nav className="flex flex-col mt-4">
          {links.map((link) => (
            <div 
              key={link.label} 
              className={`flex items-center gap-4 px-6 py-3.5 cursor-pointer transition-all ${
                link.active 
                ? 'bg-[#192540]/60 text-[#b8fd4b] border-l-[3px] border-[#b8fd4b] shadow-[-10px_0_20px_-10px_rgba(184,253,75,0.2)]' 
                : 'border-l-[3px] border-transparent text-[#dee5ff]/50 hover:text-[#dee5ff] hover:bg-[#192540]/30'
              }`}
            >
              <span className={link.active ? "text-[#b8fd4b]" : "text-[#dee5ff]/50 hover:text-[#dee5ff]"}>{link.icon}</span>
              <span className="text-[12px] font-bold tracking-widest">{link.label}</span>
            </div>
          ))}
        </nav>
        {/* GUARDIAN ACTIONS */}
        {role === "guardian" && (
          <div className="flex flex-col h-full mt-auto">
            
            {/* Upgrade Card Wrapper */}
            <div className="mt-6 px-5 mb-auto">
              <div className="bg-[#1f2b49]/30 border border-[#40485d]/30 rounded-2xl p-4 shadow-inner">
                <p className="text-[10px] font-bold text-[#dee5ff]/60 mb-3 tracking-widest uppercase">Power up learning</p>
                <button className="w-full bg-gradient-to-r from-[#fed01b] to-[#f59e0b] text-[#3d2700] hover:scale-[1.03] active:scale-95 transition-all text-[11px] font-black shadow-[0_0_15px_rgba(254,208,27,0.4)] py-2.5 rounded-lg text-center uppercase tracking-widest leading-none">
                  Upgrade to Premium
                </button>
              </div>
            </div>
            {/* Help Center stuck relative to bottom */}
            <div className="mt-auto px-6 pt-10">
              <div className="flex items-center gap-3 text-[#dee5ff]/40 hover:text-white cursor-pointer transition-all">
                <LifeBuoy size={20} />
                <span className="text-[12px] font-bold">Help Center</span>
              </div>
            </div>
            
          </div>
        )}
      </div>
      {/* STUDENT UPGRADE BUTTON */}
      {role === "student" && (
        <div className="px-6 pb-8">
          <button className="w-full bg-[#b8fd4b] text-black font-black p-3 rounded-2xl text-[10px] uppercase italic shadow-[0_0_20px_rgba(184,253,75,0.4)]">
            Upgrade to Luminary
          </button>
        </div>
      )}
    
    </aside>
  );
}