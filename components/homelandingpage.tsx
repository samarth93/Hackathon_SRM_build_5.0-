"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        CashByte
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Make Finance Easy With us!! Kiske family se ho yad rakhna 
      </p>
    </WavyBackground>
  );
}
