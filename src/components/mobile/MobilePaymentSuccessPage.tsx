"use client";

import React from "react";
import StarsCanvas from "@/components/StarBackground";
import Link from "next/link";

const MobilePaymentSuccessPage: React.FC = () => {
  return (
    <>
      {/* Background video and stars */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-[1]" />
          <video
            className="absolute top-0 left-0 min-w-full min-h-full object-cover opacity-80"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/blackhole.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <StarsCanvas />
      </div>
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className="bg-purple-900/20 backdrop-blur-md p-8 rounded-lg shadow-glow border border-white/10 flex flex-col items-center">
          <svg className="w-16 h-16 text-green-400 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M8 12l2 2l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h1 className="text-2xl font-bold mb-2 text-white text-center">Payment Successful!</h1>
          <p className="text-white/80 mb-6 text-center">Thank you for your purchase. Your order has been placed and a confirmation email will be sent to you shortly.</p>
          <Link href="/products" className="bg-gradient-to-r from-[#7f53ac] to-[#657ced] text-white px-6 py-3 rounded-md font-semibold shadow-glow border border-white/10 mt-2 text-lg">
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobilePaymentSuccessPage;
