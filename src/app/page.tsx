import React from "react";  
import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import Coins from "../components/Coins.jsx";  

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col bg-gray-950">
      <Navbar />

      <Main />

      <Coins />

      <Footer />
    </div>
  );
}
