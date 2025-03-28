import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lottie from 'react-lottie';
import * as codingAnimation from '../assets/coding-animation.json';

const Section = styled.section`
  padding: 6rem 2rem;
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
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
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
  margin-bottom: 3rem;
  position: relative;
  font-weight: 600;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #64ffda;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
  }
`;

const Heading = styled.h3`
  font-size: 2rem;
  color: #ccd6f6;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  color: #8892b0;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    padding: 0;
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const AnimationContainer = styled(motion.div)`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  order: 2;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(100, 255, 218, 0.1) 0%, transparent 70%);
    z-index: -1;
  }

  @media (max-width: 768px) {
    height: 300px;
    order: 1;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const TechnologiesSection = styled.div`
  margin-top: 6rem;
  padding-top: 4rem;
  border-top: 1px solid rgba(100, 255, 218, 0.1);

  @media (max-width: 768px) {
    margin-top: 4rem;
    padding-top: 3rem;
  }
`;

const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

const TechnologyCard = styled(motion.div)`
  background: rgba(100, 255, 218, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

const TechnologyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TechnologyName = styled.h4`
  color: #ccd6f6;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const TechnologyDescription = styled.p`
  color: #8892b0;
  font-size: 0.9rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const technologies = [
    {
      name: 'Frontend Development',
      icon: '🎨',
      description: 'React.js, JavaScript, HTML/CSS'
    },
    {
      name: 'Backend Development',
      icon: '⚙️',
      description: 'Node.js, Python, Express, REST APIs'
    },
    {
      name: 'Database',
      icon: '🗄️',
      description: 'MongoDB, mySQL'
    },
    {
      name: 'DevOps',
      icon: '🚀',
      description: 'Docker, Terraform, CI/CD, Git'
    },
    {
      name: 'UI/UX Design',
      icon: '🎯',
      description: 'Figma, Adobe XD, Responsive Design'
    },
    {
      name: 'Cloud Technologies',
      icon: '☁️',
      description: 'AWS, Azure, Google Cloud'
    }
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: codingAnimation.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Section id="about">
      <Container ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Title>About Me</Title>
          <Grid>
            <AnimationContainer
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Lottie
                options={defaultOptions}
                height={400}
                width={400}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </AnimationContainer>
            <Content>
              <Heading variants={itemVariants}>Hello, I'm Gopinath</Heading>
              <Paragraph variants={itemVariants}>
                I'm a passionate software developer with a keen interest in creating beautiful and functional web applications.
                With a strong foundation in both frontend and backend development, I enjoy turning complex problems into
                simple, beautiful, and intuitive solutions.
                </Paragraph>
                <Paragraph variants={itemVariants}>
                Also i have DevOps Engineer experience, where I have worked on automating deployment processes and managing cloud infrastructure.
                I believe in the power of collaboration and continuous learning, and I'm always eager to take on new challenges. 
              </Paragraph>
              <Paragraph variants={itemVariants}>
                My journey in software development started with a curiosity about how things work on the internet.
                Today, I'm constantly learning and exploring new technologies to stay at the forefront of web development.
              </Paragraph>
            </Content>
          </Grid>

          <TechnologiesSection>
            <Title>Technologies I Know</Title>
            <TechnologiesGrid>
              {technologies.map((tech, index) => (
                <TechnologyCard
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <TechnologyIcon>{tech.icon}</TechnologyIcon>
                  <TechnologyName>{tech.name}</TechnologyName>
                  <TechnologyDescription>{tech.description}</TechnologyDescription>
                </TechnologyCard>
              ))}
            </TechnologiesGrid>
          </TechnologiesSection>
        </motion.div>
      </Container>
    </Section>
  );
};

export default About;