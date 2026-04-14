
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function LoginPage() {
  const location = useLocation();

    const getInitialRole = () => {
    const searchParams = new URLSearchParams(location.search);
    const roleParam = searchParams.get('role');

    if (!roleParam) return 'Student';

    // Normalize casing (e.g., "student" -> "Student")
    const formattedRole = roleParam.charAt(0).toUpperCase() + roleParam.slice(1).toLowerCase();
    
    // Ensure it matches one of our valid tabs
    if (['Student', 'Educator', 'Parent'].includes(formattedRole)) {
      return formattedRole;
    }
    
    return 'Student';
  };

  const [role, setRole] = useState(getInitialRole());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Submitting login form:", { role, email, password });
  };

  return (
    <div className="bg-[#020617] text-[#dee5ff] font-label min-h-screen flex flex-col selection:bg-[#b8fd4b] selection:text-[#3d5e00]">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto absolute top-0 left-0 right-0 z-50">
        <div className="text-2xl font-bold text-[#b8fd4b] tracking-tight font-headline">Growzzy</div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-[#b8fd4b] font-bold border-b-2 border-[#b8fd4b] pb-1 font-label" href="#">Sign In</a>
          <a className="text-[#dee5ff] opacity-70 hover:opacity-100 transition-all duration-300 font-label" href="#">Register</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 relative overflow-hidden">
        
        {/* Glow Decorations */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#b8fd4b]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#fed01b]/10 rounded-full blur-[120px]"></div>
        
        <div className="w-full max-w-md z-10">
          
          <div className="text-center mb-10 mt-16 md:mt-0">
            <h1 className="font-headline font-extrabold text-4xl mb-3 tracking-tight">The Academic Luminary</h1>
            <p className="font-body italic text-lg text-[#dee5ff]/60">Step into your private sanctuary of knowledge.</p>
          </div>
          
          <div 
            className="bg-[#1f2b49]/40 backdrop-blur-[40px] border border-[#40485d]/15 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden" 
            style={{ backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)' }}
          >
            
            {/* Role Tracker Tabs */}
            <div className="flex p-1.5 mb-8 bg-[#000000] rounded-full border border-[#40485d]/10">
              {['Student', 'Educator', 'Parent'].map((tabLabel) => (
                <button
                  key={tabLabel}
                  type="button"
                  onClick={() => setRole(tabLabel)} // Update the active role
                  className={`flex-1 py-2.5 px-4 rounded-full text-sm font-bold transition-all duration-300 ${
                    role === tabLabel 
                      ? 'bg-[#b8fd4b] text-[#3d5e00] shadow-lg shadow-[#b8fd4b]/20' 
                      : 'text-[#dee5ff]/50 hover:text-[#dee5ff]'
                  }`}
                >
                  {tabLabel}
                </button>
              ))}
            </div>
            
            {/* Submission Form */}
            <form className="space-y-6" onSubmit={handleLogin}>
              
              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#b8fd4b]/80 ml-1">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#dee5ff]/40 text-sm">alternate_email</span>
                  <input 
                    className="w-full bg-[#000000] border-none rounded-xl py-4 pl-12 pr-4 text-[#dee5ff] outline-none placeholder:text-[#dee5ff]/20 focus:ring-2 focus:ring-[#b8fd4b]/20 transition-all duration-300 font-label" 
                    placeholder="curiosity@growzzy.edu" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#b8fd4b]/80">Security Token</label>
                  <a className="text-[10px] uppercase tracking-tighter text-[#dee5ff]/40 hover:text-[#b8fd4b] transition-colors" href="#">Forgot Key?</a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#dee5ff]/40 text-sm">lock_open</span>
                  <input 
                    className="w-full bg-[#000000] border-none rounded-xl py-4 pl-12 pr-4 text-[#dee5ff] outline-none placeholder:text-[#dee5ff]/20 focus:ring-2 focus:ring-[#b8fd4b]/20 transition-all duration-300 font-label" 
                    placeholder="••••••••••••" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#b8fd4b] to-[#fed01b] py-4 rounded-full font-headline font-extrabold text-[#3d5e00] tracking-tight hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-xl shadow-[#b8fd4b]/20 flex items-center justify-center gap-2 group"
                >
                  Access Sanctuary
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </form>
            
            <div className="mt-8 pt-8 border-t border-[#40485d]/10 text-center">
              <p className="text-sm text-[#dee5ff]/40 font-body">New to the editorial experience? <a className="text-[#fed01b] font-bold hover:underline" href="#">Join Growzzy</a></p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#060e20] w-full px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-4 mt-auto border-t border-[#40485d]/15">
        <div className="text-lg font-black text-[#dee5ff] font-headline">Growzzy</div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="text-[#dee5ff]/60 hover:text-[#b8fd4b] transition-colors font-label text-sm tracking-wide" href="#">Privacy Policy</a>
          <a className="text-[#dee5ff]/60 hover:text-[#b8fd4b] transition-colors font-label text-sm tracking-wide" href="#">Terms of Service</a>
          <a className="text-[#dee5ff]/60 hover:text-[#b8fd4b] transition-colors font-label text-sm tracking-wide" href="#">Help Center</a>
          <a className="text-[#dee5ff]/60 hover:text-[#b8fd4b] transition-colors font-label text-sm tracking-wide" href="#">Contact Us</a>
        </div>
        <p className="text-[#dee5ff]/60 font-label text-sm tracking-wide">© 2024 Growzzy Editorial EdTech. All rights reserved.</p>
      </footer>
      
    </div>
  );
}
