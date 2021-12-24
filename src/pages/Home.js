import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeroSection from "../components/Hero/Hero"
import InfoSection from "../components/Info/Info";
import { homveObjOne } from "../components/Info/Data";
import ServicesSection from "../components/Services/Services"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homveObjOne}/>
      <ServicesSection/>
    </>
  );
};

export default Home;
