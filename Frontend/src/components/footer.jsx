
import React from 'react';
export default function Footer() {
  return (
    <footer className="w-full bg-[#060e20] border-t border-[#40485d]/20 py-8 px-6 md:px-12 mt-auto">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 max-w-7xl mx-auto">
        
        <div className="text-xl font-headline font-black tracking-tight text-[#b8fd4b] flex-shrink-0">
          Growzzy
        </div>
   
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          <a className="font-headline text-[13px] font-bold tracking-wide text-[#dee5ff]/40 hover:text-[#b8fd4b] transition-all">Support Center</a>
          <a className="font-headline text-[13px] font-bold tracking-wide text-[#dee5ff]/40 hover:text-[#b8fd4b] transition-all">Privacy Policy</a>
          <a className="font-headline text-[13px] font-bold tracking-wide text-[#dee5ff]/40 hover:text-[#b8fd4b] transition-all">Terms of Service</a>
        </div>
       
        <div className="flex items-center gap-3 bg-[#192540] px-5 py-2.5 rounded-full shadow-inner">
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex w-3 h-3 bg-[#b8fd4b]/50 rounded-full animate-ping opacity-80"></span>
         
            <span className="relative inline-flex w-2 h-2 bg-[#b8fd4b] rounded-full shadow-[0_0_15px_rgba(184,253,75,1)]"></span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#dee5ff]/40">
            Systems Operational
          </span>
        </div>
      </div>
      
    </footer>
  );
}