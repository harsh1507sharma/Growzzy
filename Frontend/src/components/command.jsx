import React from 'react';
import { Users, Banknote, Zap, Plus, Edit2 } from 'lucide-react';
export default function Command() {
  // Untouched map logic simulating educator data
  const stats = [
    {
      id: 1,
      title: 'TOTAL STUDENTS',
      value: '12,840',
      tag: '+12%',
      tagColor: 'text-[#b8fd4b] bg-[#b8fd4b]/10',
      icon: Users,
      progress: 68,
    },
    {
      id: 2,
      title: 'REVENUE',
      value: '$42.2k',
      tag: 'Record',
      tagColor: 'text-[#fed01b] bg-[#fed01b]/10',
      icon: Banknote,
      isRevenue: true,
    },
    {
      id: 3,
      title: 'TRAINING ACTIVE',
      value: '894',
      tag: 'Live',
      tagColor: 'text-[#9bffce] bg-[#9bffce]/10',
      icon: Zap,
      hasAvatars: true,
    }
  ];
  const courses = [
    {
      id: 1,
      title: 'Neural Architecture & Advanced AI Implementation',
      subtitle: 'A deep dive into building scalable neural systems for enterprise-grade applications.',
      students: '4,102',
      rating: '4.9 / 5.0',
      status: 'Monetized',
      level: 'Advanced',
      isMain: true,
      image: 'https://assets.gqindia.com/photos/6851031d0eae6262b75b95c4/1:1/w_1080,h_1080,c_limit/Money-Heist-actor-Alvaro-Morte-Berlin-2-The-Professor-cameo.jpg'
    },
    {
      id: 2,
      title: 'Quantum Logic Fundamentals',
      status: 'Draft',
      image: 'https://m.media-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_QL75_UX328_.jpg',
    },
    {
      id: 3,
      title: 'Creative UI Design Systems',
      status: 'Active',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwjnc0Pz6MHjOzvfoVgF5a7C_5w5_0jdp0Q&s',
      isMain: false,
    }
  ];
  return (
    <div className="w-full text-[#dee5ff] font-label">  
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-headline font-black italic tracking-tighter text-[#dee5ff] uppercase">
            Command Center
          </h1>
          <p className="text-[#dee5ff]/60 font-body italic text-lg mt-1">
            Global performance metrics and real-time oversight.
          </p>
        </div>
        
        <button className="flex items-center gap-2 bg-[#b8fd4b] text-[#3d5e00] font-headline font-bold text-sm px-6 py-3.5 rounded-full shadow-[0_0_25px_rgba(184,253,75,0.5)] animate-pulse hover:animate-none hover:scale-105 active:scale-95 transition-all outline-none">
          <Plus className="w-5 h-5" />
          Create New Course
        </button>
      </div>



      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.id} 
              className="bg-[#192540]/40 backdrop-blur-xl border border-[#40485d]/30 hover:border-[#b8fd4b]/60 rounded-[1.5rem] p-6 flex flex-col justify-between cursor-pointer group transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(184,253,75,0.15)]"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#060e20] flex items-center justify-center border border-[#40485d]/40">
                  <Icon className={`w-5 h-5 ${stat.isRevenue ? 'text-[#fed01b]' : stat.hasAvatars ? 'text-[#9bffce]' : 'text-[#b8fd4b]'}`} />
                </div>
                <div className={`px-2.5 py-1 rounded-md text-[10px] font-black tracking-widest uppercase border border-white/5 ${stat.tagColor}`}>
                  {stat.tag}
                </div>
              </div>
              
              <div>
                <p className="text-[11px] font-headline font-bold tracking-widest text-[#dee5ff]/50 uppercase mb-1">{stat.title}</p>
                <div className="flex items-end gap-3">
                  <h3 className="text-4xl font-extrabold font-headline tracking-tighter text-[#b8fd4b]">
                    {stat.value}
                  </h3>
                  
                  {/* Glowing Progress Bar */}
                  {stat.progress && (
                    <div className="w-full h-1.5 bg-[#060e20] rounded-full overflow-hidden mb-2 ml-4">
                      <div className="h-full w-[68%] bg-[#b8fd4b] rounded-full shadow-[0_0_12px_rgba(184,253,75,1)]"></div>
                    </div>
                  )}
                  {/* Lime Chart Bars */}
                  {stat.isRevenue && (
                    <div className="flex items-end gap-1 pb-1.5 ml-2">
                      <div className="w-1.5 h-3 bg-[#b8fd4b]/40 rounded-sm"></div>
                      <div className="w-1.5 h-5 bg-[#b8fd4b]/60 rounded-sm"></div>
                      <div className="w-1.5 h-4 bg-[#b8fd4b]/80 rounded-sm"></div>
                      <div className="w-1.5 h-6 bg-[#b8fd4b] rounded-sm shadow-[0_0_8px_rgba(184,253,75,0.6)]"></div>
                    </div>
                  )}
                  {/* Active Users Mock */}
                  {stat.hasAvatars && (
                    <div className="flex items-center -space-x-2 ml-auto pb-1">
                      <div className="w-6 h-6 rounded-full bg-[#1f2b49] border border-[#40485d] flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" className="w-full" alt="avatar" /></div>
                      <div className="w-6 h-6 rounded-full bg-[#1f2b49] border border-[#40485d] flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" className="w-full" alt="avatar" /></div>
                      <div className="w-6 h-6 rounded-full bg-[#060e20] border border-[#40485d] flex items-center justify-center text-[8px] font-bold text-[#b8fd4b]">+12</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* 3. Active Courses Section */}
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-headline font-bold text-[#dee5ff] tracking-tight uppercase">Active Courses</h2>
        <a href="#" className="font-bold text-[#b8fd4b] text-sm hover:animate-pulse">View All Curriculum</a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        
        {/* Main Bento Card */}
        {courses.filter(c => c.isMain).map(main => (
          <div key={main.id} className="lg:col-span-8 relative rounded-[1.5rem] overflow-hidden group border border-[#40485d]/30 min-h-[450px] shadow-2xl cursor-pointer">
            
            {/* Background Image & Zoom Hover Effect */}
            <img src={main.image} alt="Course Cover" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen group-hover:scale-110 transition-transform duration-[800ms]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-[#060e20]/60 to-transparent"></div>
            {/* Main Content Layout */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-[#b8fd4b] text-[#3d5e00] font-black text-[10px] tracking-widest uppercase rounded-full shadow-[0_0_10px_rgba(184,253,75,0.4)]">{main.status}</span>
                <span className="px-3 py-1 bg-[#192540] text-[#dee5ff] border border-[#40485d]/40 font-bold text-[10px] tracking-widest uppercase rounded-full">{main.level}</span>
              </div>
              
              <h3 className="font-headline font-extrabold text-3xl md:text-4xl text-[#dee5ff] leading-tight tracking-tight mb-2 max-w-xl group-hover:text-[#b8fd4b] transition-colors">{main.title}</h3>
              <p className="font-body italic text-[#dee5ff]/70 text-base mb-8 max-w-sm">{main.subtitle}</p>
              
              <div className="flex items-center justify-between border-t border-[#40485d]/40 pt-6 mt-auto">
                <div className="flex gap-10">
                  <div>
                    <p className="text-[10px] font-black tracking-widest uppercase text-[#dee5ff]/40 mb-0.5">Students</p>
                    <p className="font-headline font-bold text-lg">{main.students}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-widest uppercase text-[#dee5ff]/40 mb-0.5">Rating</p>
                    <p className="font-headline font-bold text-lg">{main.rating}</p>
                  </div>
                </div>
                
                {/* Secondary Action Button */}
                <button className="w-12 h-12 bg-[#1f2b49] rounded-xl flex items-center justify-center hover:bg-[#b8fd4b] hover:text-[#3d5e00] text-[#dee5ff] transition-colors active:scale-95 shadow-lg">
                  <Edit2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* Small Side Cards */}
        <div className="lg:col-span-4 flex flex-col gap-6 h-full">
          {courses.filter(c => !c.isMain).map(small => (
            <div 
              key={small.id} 
              className={`flex-1 relative rounded-[1.5rem] overflow-hidden group cursor-pointer flex flex-col justify-end p-6 min-h-[220px] transition-all hover:border-[#b8fd4b]/50 ${
                small.status === 'Draft' 
                  ? 'border-2 border-dashed border-[#40485d]/40 bg-[#192540]/20' 
                  : 'border border-[#40485d]/40 bg-[#192540]/60'
              }`}
            >
              <img src={small.image} alt="Course Cover" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen group-hover:scale-110 transition-transform duration-[800ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] to-transparent"></div>
              
              <div className="relative z-10 mt-auto">
                <span className={`inline-block px-2.5 py-0.5 font-black text-[9px] tracking-widest uppercase rounded mb-3 ${
                  small.status === 'Draft' 
                    ? 'bg-[#fed01b]/20 text-[#fed01b] border border-[#fed01b]/30' 
                    : 'bg-[#b8fd4b]/20 text-[#b8fd4b] border border-[#b8fd4b]/30'
                }`}>
                  {small.status}
                </span>
                <h4 className="font-headline font-extrabold text-xl text-[#dee5ff] leading-tight group-hover:text-white transition-colors">{small.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
