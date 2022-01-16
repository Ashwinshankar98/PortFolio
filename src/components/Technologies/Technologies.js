import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {SiGoogleanalytics} from 'react-icons/si'
import {GiArtificialIntelligence} from 'react-icons/gi'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I've worked with both frontend and backend web development. I have also acquainted myself with data science and Machine Learning frameworks in the form of internships and research work.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, Databases and Express
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiGoogleanalytics size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Science</ListTitle>
          <ListParagraph>
            Experience with <br />
            Data Visualization and Analysis <br />
            Data manipulation
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GiArtificialIntelligence size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>ML/AI</ListTitle>
          <ListParagraph>
            Experience with <br />
            Machine Learning models <br /> Deep Learning and NLP
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
