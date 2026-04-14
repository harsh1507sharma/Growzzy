import React from 'react';
import { Search, Sparkles, Bell, User } from 'lucide-react';
import logo from '../assets/logo.png';


// Navbar self done 
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#060e20]/80 backdrop-blur-md border-b border-[#40485d]/20 px-8 py-4 flex justify-between items-center">
      
      {/* Brand Section */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Growzzy Logo" className="w-10 h-10 rounded-xl " /> 
        <div className="text-2xl font-black bg-gradient-to-r from-[#b8fd4b] to-[#fed01b] bg-clip-text text-transparent tracking-tight cursor-pointer">
          Growzzy
        </div>
      </div>
      {/* Search Bar */}
      <div className="hidden md:flex items-center relative w-full max-w-md mx-8">
        <Search className="absolute left-4 text-[#dee5ff]/40 w-5 h-5 pointer-events-none" />
        <input 
          type="text" 
          placeholder="Explore paths..." 
          className="w-full bg-[#0f1930] text-[#dee5ff] outline-none rounded-full py-2.5 pl-12 pr-4 placeholder-[#dee5ff]/40 focus:ring-1 focus:ring-[#b8fd4b]/50 border-none transition-all"
        />
      </div>
      {/* Icons */}
      <div className="flex items-center space-x-6">
        <button className="text-[#dee5ff]/80 hover:text-[#b8fd4b] transition-colors">
          <Sparkles className="w-5 h-5" />
        </button>
        <button className="relative text-[#dee5ff]/80 hover:text-[#b8fd4b] transition-colors">
          <Bell className="w-5 h-5" />
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-[#060e20]"></span>
        </button>
        {/* Profile User Icon with #b8fd4b Border */}
        <button className="w-10 h-10 rounded-full border-[2px] border-[#b8fd4b] flex items-center justify-center overflow-hidden bg-[#0f1930] hover:scale-105 transition-transform">
          <User className="w-5 h-5 text-[#b8fd4b]" />
        </button>
      </div>
    </nav>
  );
}