import React from "react"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import Command from "../components/command"
import Console from "../components/console"

export default function Educator() {
    return (
        <div className="flex flex-col min-h-screen bg-[#060e20]">
            {/* 1. Navbar */}
            <Navbar />

            {/* 2. Content Wrapper (Fixed Flex Layout) */}
            <div className="flex flex-1 pt-20 h-screen overflow-hidden">

                {/* Left Sidebar */}
                <Sidebar role="educator" />

                {/* Main Scrollable Content Area */}
                <main className="flex-1 bg-[#020617] p-8 md:p-10 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                    {/* Inner Flex Wrapper for Command Center & Command Console Side-by-Side */}
                    <div className="flex flex-col xl:flex-row gap-8 w-full max-w-[1700px] mx-auto">

                        {/* Middle Container: Command Area */}
                        <div className="flex-1 min-w-0">
                            <Command />
                        </div>
                        <Console />
                    </div>
                </main>
            </div>
        </div>
    );
}