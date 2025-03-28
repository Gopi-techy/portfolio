import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
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
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: rgba(100, 255, 218, 0.2);
  }

  @media (max-width: 768px) {
    &::before {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  width: 50%;
  padding-right: 3rem;

  &:nth-child(even) {
    margin-left: 50%;
    padding-right: 0;
    padding-left: 3rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: -6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #64ffda;
    box-shadow: 0 0 0 4px rgba(100, 255, 218, 0.2);
  }

  &:nth-child(even)::before {
    right: auto;
    left: -6px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 60px;
    padding-right: 0;
    margin-left: 0;
    margin-bottom: 2rem;

    &:nth-child(even) {
      margin-left: 0;
      padding-left: 60px;
    }

    &::before {
      right: auto;
      left: 24px;
    }

    &:nth-child(even)::before {
      left: 24px;
    }
  }
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(100, 255, 218, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #64ffda, transparent);
    border-radius: 10px 10px 0 0;
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const ExperienceTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ExperienceCompany = styled.h4`
  color: #ccd6f6;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const ExperienceDuration = styled.span`
  color: #8892b0;
  font-size: 0.9rem;
  background: rgba(100, 255, 218, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-weight: 500;
`;

const ExperienceDescription = styled.p`
  color: #8892b0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: translateY(-2px);
  }
`;

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const experiences = [
      {
        title: 'Web Developer Intern',
        company: 'Dexwox Innovations Pvt. Ltd',
        duration: 'March 2025 - Present',
        description: 'Developing and maintaining web applications using React.js, Material-UI, and Redux Toolkit. Collaborating with the development team to build scalable and user-friendly interfaces.',
        technologies: ['React.js', 'Material-UI', 'Redux Toolkit']
      },
      {
        title: 'Software Developer Intern',
        company: 'Skill First Labs',
        duration: 'Dec 2024 - Feb 2025',
        description: 'Worked on MERN stack development, building full-stack applications with authentication and state management. Implemented REST APIs and optimized database queries for better performance.',
        technologies: ['MongoDB', 'Express', 'React', 'Node.js']
      }
    ];
    

  return (
    <Section id="experience">
      <Container ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Title>Work Experience</Title>
          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <ExperienceCard>
                  <ExperienceHeader>
                    <div>
                      <ExperienceTitle>{exp.title}</ExperienceTitle>
                      <ExperienceCompany>{exp.company}</ExperienceCompany>
                    </div>
                    <ExperienceDuration>{exp.duration}</ExperienceDuration>
                  </ExperienceHeader>
                  <ExperienceDescription>{exp.description}</ExperienceDescription>
                  <TechStack>
                    {exp.technologies.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </TechStack>
                </ExperienceCard>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Experience; 