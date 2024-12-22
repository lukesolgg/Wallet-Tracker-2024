import React from "react";  
import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <Navbar />

      <Main />

      <Footer />
    </div>
  );
}
