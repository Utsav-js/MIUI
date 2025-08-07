"use client";
import React from "react";
import Footer from "@/components/Footer";

export default function MobileFooterPage() {
  return (
    <footer className="md:hidden w-full bg-black text-white py-6 px-4 flex flex-col items-center border-t border-white/10">
      {/* You can customize this for mobile-specific links or info if needed */}
      <Footer />
    </footer>
  );
}
