import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function RegisterPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { register } = useAuth();
  
  const [role, setRole] = useState('Student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await register({ name, email, password, role: role.toUpperCase() });
      
      // Navigate based on role
      if (role === 'Student') navigate('/student');
      else if (role === 'Educator') navigate('/educator');
      else if (role === 'Parent') navigate('/guardian');
      else navigate('/');
      
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#020617] text-[#dee5ff] font-label min-h-screen flex flex-col selection:bg-[#b8fd4b] selection:text-[#3d5e00]">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto absolute top-0 left-0 right-0 z-50">
        <div className="text-2xl font-bold text-[#b8fd4b] tracking-tight font-headline">Growzzy</div>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/login" className="text-[#dee5ff] opacity-70 hover:opacity-100 transition-all duration-300 font-label">Sign In</Link>
          <Link to="/register" className="text-[#b8fd4b] font-bold border-b-2 border-[#b8fd4b] pb-1 font-label">Register</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 relative overflow-hidden">
        
        {/* Glow Decorations */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#b8fd4b]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#fed01b]/10 rounded-full blur-[120px]"></div>
        
        <div className="w-full max-w-md z-10 mt-20 mb-10">
          
          <div className="text-center mb-8">
            <h1 className="font-headline font-extrabold text-4xl mb-3 tracking-tight">Join Growzzy</h1>
            <p className="font-body italic text-lg text-[#dee5ff]/60">Begin your journey to knowledge.</p>
          </div>
          
          <div 
            className="bg-[#1f2b49]/40 backdrop-blur-[40px] border border-[#40485d]/15 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden" 
            style={{ backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)' }}
          >
            
            {/* Role Tracker Tabs */}
            <div className="flex p-1.5 mb-6 bg-[#000000] rounded-full border border-[#40485d]/10">
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
            
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
                {error}
              </div>
            )}
            
            {/* Submission Form */}
            <form className="space-y-5" onSubmit={handleRegister}>
              
               {/* Name Input */}
               <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#b8fd4b]/80 ml-1">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#dee5ff]/40 text-sm">person</span>
                  <input 
                    className="w-full bg-[#000000] border-none rounded-xl py-3 pl-12 pr-4 text-[#dee5ff] outline-none placeholder:text-[#dee5ff]/20 focus:ring-2 focus:ring-[#b8fd4b]/20 transition-all duration-300 font-label" 
                    placeholder="Jane Doe" 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#b8fd4b]/80 ml-1">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#dee5ff]/40 text-sm">alternate_email</span>
                  <input 
                    className="w-full bg-[#000000] border-none rounded-xl py-3 pl-12 pr-4 text-[#dee5ff] outline-none placeholder:text-[#dee5ff]/20 focus:ring-2 focus:ring-[#b8fd4b]/20 transition-all duration-300 font-label" 
                    placeholder="curiosity@growzzy.edu" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              {/* Password Input */}
              <div className="space-y-1">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#b8fd4b]/80">Security Token</label>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#dee5ff]/40 text-sm">lock_open</span>
                  <input 
                    className="w-full bg-[#000000] border-none rounded-xl py-3 pl-12 pr-4 text-[#dee5ff] outline-none placeholder:text-[#dee5ff]/20 focus:ring-2 focus:ring-[#b8fd4b]/20 transition-all duration-300 font-label" 
                    placeholder="••••••••••••" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#b8fd4b] to-[#fed01b] py-3.5 rounded-full font-headline font-extrabold text-[#3d5e00] tracking-tight hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-xl shadow-[#b8fd4b]/20 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Registering...' : 'Create Account'}
                  {!isLoading && <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">person_add</span>}
                </button>
              </div>
            </form>
            
            <div className="mt-6 pt-6 border-t border-[#40485d]/10 text-center">
              <p className="text-sm text-[#dee5ff]/40 font-body">Already have an account? <Link to="/login" className="text-[#fed01b] font-bold hover:underline">Sign In</Link></p>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}
