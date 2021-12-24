import React from "react";
import { ServicesContainer, ServicesH1, ServicesCard, ServicesP, ServicesH2, ServicesWrapper, ServicesIcon } from "./ServicesElements";
import Icon1 from '../../images/jpeg1.jpg'
import Icon2 from '../../images/jpeg2.jpg'
import Icon3 from '../../images/jpeg3.jpg'
import Icon4 from '../../images/jpeg4.jpg'
import Icon5 from '../../images/jpeg5.jpg'
import Icon6 from '../../images/jpeg6.jpg'

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
          <ServicesIcon src={Icon2} />
          <ServicesH2>some text</ServicesH2>
          <ServicesP>
            some more test for the service of the card that i made up
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>some text</ServicesH2>
          <ServicesP>
            some more test for the service of the card that i made up
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>some text</ServicesH2>
          <ServicesP>
            some more test for the service of the card that i made up
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>some text</ServicesH2>
          <ServicesP>
            some more test for the service of the card that i made up
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
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
