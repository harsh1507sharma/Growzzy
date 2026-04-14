import React from 'react';
import { Play } from 'lucide-react';
export default function Course() {
  
  const courses = [
    {
      id: 1,
      title: 'The Philosophy of Logic',
      author: 'Growzzy Original',
      duration: '12 Modules • 4.5 Stars',
      image : "https://secure-ecsd.elsevier.com/covers/80/Tango2/largest/9780444515414.jpg",
      type: 'Premium', 
    },
    {
      id: 2,
      title: 'Understanding LLM Transformers',
      author: 'Andre Karpathy',
      duration: '2.1M views',
      image : "https://imageio.forbes.com/specials-images/imageserve/69987d5a09cf4a6af8c5bf23/Hands-typing-on-laptop-with-glowing-LLM-brain-hologram-symbolizing-large-language/0x0.jpg?width=960&dpr=1.5",
      type: 'YouTube',
    },
    {
      id: 3,
      title: 'Quantum Algorithmic Design',
      author: 'Growzzy Original',
      duration: '8 Modules • Master Class',
      image :"https://media.geeksforgeeks.org/wp-content/uploads/20240927145713/Quantum-Inspired-Algorithms.webp",
      type: 'Premium',
    }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">

        
      {courses.map((course) => (
        <div 
          key={course.id} 
          className="flex flex-col justify-between bg-[#192540]/40 backdrop-blur-xl border border-[#40485d]/30 rounded-[1.5rem] p-5 transition-all duration-300 hover:scale-[1.02] hover:border-[#b8fd4b]/50 group"
        >
          <div>
            
            <div className="relative w-full h-[10rem] bg-gradient-to-br from-[#060e20] to-[#0a1224] rounded-xl flex items-center justify-center overflow-hidden mb-6 border border-[#40485d]/40 shadow-inner">
            
            {/* YAHAN IMAGE AAYEGI */}
            <img 
                src={course.image} 
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
            />
              <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-md text-[10px] font-black tracking-[0.2em] uppercase border backdrop-blur-sm z-20 ${
                course.type === 'YouTube' 
                  ? 'text-red-400 bg-red-400/10 border-red-400/30 shadow-[0_0_15px_rgba(248,113,113,0.3)]' 
                  : 'text-[#b8fd4b] bg-[#b8fd4b]/10 border-[#b8fd4b]/30 shadow-[0_0_15px_rgba(184,253,75,0.3)]'
              }`}>
                {course.type}
              </div>
              

              <div className="w-14 h-14 rounded-full bg-[#192540]/80 backdrop-blur-md flex items-center justify-center border border-[#dee5ff]/10 group-hover:bg-[#b8fd4b] group-hover:border-[#b8fd4b] transition-all z-20">
                <a href="https://www.youtube.com/"> <Play className="w-6 h-6 text-[#dee5ff] group-hover:text-[#3d5e00] ml-1 transition-colors" /></a>
              </div>
          
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e20]/90 via-transparent to-transparent z-10"></div>
            </div>
            
            <h3 className="font-headline font-extrabold text-[18px] text-[#dee5ff] leading-tight mb-2 tracking-tight group-hover:text-[#b8fd4b] transition-colors">
              {course.title}
            </h3>
            <p className="text-[#dee5ff]/60 text-[14px] font-body italic mb-1 line-clamp-2">
              Deep dive session curated by <span className="font-bold text-[#dee5ff]/80">{course.author}</span>.
            </p>
            <p className="text-[#dee5ff]/40 text-[11px] font-bold tracking-widest uppercase mb-6">
              {course.duration}
            </p>
          </div>
          
          <button className="w-full bg-[#b8fd4b] text-[#3d5e00] font-headline font-bold text-[13px] tracking-widest uppercase py-3 rounded-xl hover:bg-[#a3e635] shadow-[0_0_20px_rgba(184,253,75,0.3)] hover:shadow-[0_0_30px_rgba(184,253,75,0.5)] active:scale-95 transition-all outline-none">
                  <a href="https://www.youtube.com/"> Watch Session </a>
          </button>
        </div>
      ))}
    </div>
  );
}