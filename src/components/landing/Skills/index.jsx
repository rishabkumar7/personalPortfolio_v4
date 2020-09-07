import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
          I try to create nice web experiences. I am experienced in Amazon Web Services and can help clients with several related technologies. A young technical guy with experience in creating solutions for customers. Dynamic and goal-oriented. Confident and poised in interactions with individuals at all levels. Focused and dedicated; I have a good eye for detail and put in my best effort in time management and prioritization.
          </p>
          <a href="https://resume.rishabkumar.com">
          <Button>
            Resume
          </Button></a>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
