import React from "react";
import WelcomeSection from "../components/Welcome/Welcome";
import HeroSection from "../components/Hero/Hero";
import InfoSection from "../components/Info/Info";
import { homveObjOne, homveObjTwo } from "../components/Info/Data";
import ServicesSection from "../components/Services/Services";
import  Form  from "../container/form/Form";
const Home = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      
      <ServicesSection />
      <InfoSection {...homveObjTwo} />
      <Form/>    
      </>
  );
};

export default Home;
