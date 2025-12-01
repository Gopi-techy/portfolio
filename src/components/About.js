import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 1rem 2rem 4rem;
  background: #0a192f;
  color: #ccd6f6;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem 3rem;
  }
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center; /* Ensures the inner content is centered */
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #64ffda;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }
`;



const Content = styled.div`
  text-align: center;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1.5rem;
  }
`;

const Heading = styled.span`
  font-size: 2.2rem;
  color: #64ffda;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  color: #8892b0;
  line-height: 1.9;
  font-size: 1.25rem;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.8;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.7;
  }
`;

const Highlight = styled.span`
  color: #64ffda;
  font-weight: 600;
`;

const About = () => {
  // Intersection observer not used here; keep markup animation props on motion components instead

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Section id="about">
      <Container>
        <Title
          as={motion.h2}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Who I Am
        </Title>
        <Content
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Paragraph>
            Hi,I am a <Highlight>Software Developer</Highlight> and <Highlight>AI enthusiast</Highlight> pursuing a Bachelor of Technology in <Highlight>Artificial Intelligence and Data Science</Highlight> at St. Joseph's Institute of Technology, Chennai. With a passion for building <Highlight>scalable, cloud-native applications</Highlight>, I specialize in <Highlight>full-stack development</Highlight> using <Highlight>React.js</Highlight>, <Highlight>Node.js</Highlight>, and <Highlight>Express.js</Highlight>, coupled with expertise in <Highlight>MongoDB</Highlight> and <Highlight>MySQL</Highlight> database management. My technical proficiency extends to <Highlight>AWS cloud services</Highlight>, where I architect secure, high-performance solutions with optimized authentication systems. I am deeply invested in <Highlight>AI integration</Highlight> and <Highlight>model deployment</Highlight>, leveraging cutting-edge technologies to solve real-world problems. Certified in <Highlight>GitHub Foundation</Highlight>, <Highlight>Azure Fundamentals</Highlight>, and <Highlight>Azure AI Fundamentals</Highlight>, I follow <Highlight>Agile methodologies</Highlight> to deliver innovative, production-ready applications. I am committed to continuous learning and staying at the forefront of emerging technologies in software development and artificial intelligence.
          </Paragraph>
        </Content>
      </Container>
    </Section>
  );
};

export default About;