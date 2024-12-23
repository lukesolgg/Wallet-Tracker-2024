"use client";

import React, { useState } from "react";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBack = () => {
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar handleBack={handleBack} />
      <Main isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
      <Footer />
    </div>
  );
}