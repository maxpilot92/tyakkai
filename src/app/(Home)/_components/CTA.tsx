"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const CTA: React.FC = () => {
  return (
    <section className="hero-gradient w-full min-h-[600px] flex items-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-3xl py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Ready to Transform your
            <br /> Business with Tyakkai?
          </h1>
          <p className="text-slate-700 text-lg mb-8 max-w-xl">
            Accelerate your digital transformation journey with our innovative
            solutions designed to streamline operations and drive growth.
          </p>
        </div>
        <div>
          <Button
            className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-6 rounded-md text-lg font-medium"
            size="lg"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
