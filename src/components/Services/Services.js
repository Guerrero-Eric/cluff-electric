import React from "react";
import { ServicesContainer, ServicesH1, ServicesCard, ServicesP, ServicesH2, ServicesWrapper, ServicesIcon } from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Out services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>some text</ServicesH2>
          <ServicesP>
            some more test for the service of the card that i made up
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>some text</ServicesH2>
          <ServicesP>
            some more test for the service of the card that i made up
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
