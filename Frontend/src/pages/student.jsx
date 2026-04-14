import React from "react"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import Category from "../components/category"
import Performance from "../components/performance"
import Course from "../components/course"
import Reward from "../components/reward"

export default function Student() {
    return (
        <div className="min-h-screen bg-[#060e20] text-[#dee5ff] font-label flex flex-col overflow-hidden">
            <Navbar />

            <div className="flex flex-1 pt-20 h-screen">
                <Sidebar role="student" />

                <main className="flex-1 bg-[#020617] px-8 py-8 md:px-12 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                    <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
                        <div>
                            <h1 className="text-4xl font-headline font-extrabold tracking-tight mb-2 text-[#dee5ff]">
                                Architecting Your Knowledge
                            </h1>
                            <p className="text-[#dee5ff]/60 italic font-body text-lg">
                                Select your domain of mastery to reconfigure the luminary guide.
                            </p>
                        </div>

                        <a href="#" className="hidden sm:flex items-center gap-2 text-sm font-bold text-[#b8fd4b] hover:animate-pulse shrink-0">
                            View All Disciplines →
                        </a>
                    </div>
                    <div className="mb-12">
                        <Category />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10 items-start">
                        <div className="w-full lg:w-80 shrink-0">
                            <Performance />
                        </div>
                        
                        <div className="flex-1 w-full flex flex-col gap-10">
                            <Course />
                            <Reward />
                        </div>
                   </div> 
                   
                </main>
                

            </div>
        </div>
    );
}