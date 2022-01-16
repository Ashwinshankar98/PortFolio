import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <br/>
        Welcome to my workspace.
      </SectionTitle>
      <SectionText>
      I'm Ashwin Shankar ( Master's Student), I love to build applications that create an impact on the real world. Below are some of my projects and Background.
      </SectionText>
      <Button onClick={()=>window.location="https://www.linkedin.com/in/ashwinshankarumasankar/"}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;