import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import KnowledgeMonitoring from "../components/knowledgemonnitor";
import ConsoleGuardian from "../components/consoleguardian";

export default function Guardian() {
    return (
        <div className="flex flex-col min-h-screen bg-[#060e20] text-[#dee5ff] font-label">
            {/* 1. Navbar */}
            <Navbar />

            {/* 2. Content Wrapper (Fixed Flex Layout) */}
            <div className="flex flex-1 pt-[72px] h-screen overflow-hidden">

                {/* Left Sidebar */}
                <Sidebar role="guardian" />

                {/* Main Scrollable Content Area */}
                <main className="flex-1 bg-[#101423] p-8 md:p-10 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    
                    {/* Inner Flex Wrapper for Dashboard & Console Side-by-Side */}
                    <div className="flex flex-col xl:flex-row gap-8 w-full max-w-[1700px] mx-auto">
                        
                        {/* Middle Container: Knowledge Monitoring Area */}
                        <div className="flex-1 min-w-0">
                            <KnowledgeMonitoring />
                        </div>
                        
                        {/* Right Sidebar Console */}
                        <ConsoleGuardian />
                    </div>
                </main>
            </div>
        </div>
    );
}