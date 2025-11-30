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
    background: radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #64ffda;
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: #8892b0;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, rgba(100, 255, 218, 0.1) 0%, rgba(100, 255, 218, 0.5) 50%, rgba(100, 255, 218, 0.1) 100%);
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    &::before {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  &:nth-child(odd) {
    flex-direction: row;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    padding-left: 50px;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 16px;
  height: 16px;
  background: #64ffda;
  border: 3px solid #0a192f;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 2;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.5);

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  max-width: 45%;
  background: rgba(100, 255, 218, 0.03);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(100, 255, 218, 0.3);
    background: rgba(100, 255, 218, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(100, 255, 218, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1.5rem;
  }
`;

const DateBadge = styled.div`
  display: inline-block;
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
  border: 1px solid rgba(100, 255, 218, 0.2);

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CompanyName = styled.h3`
  color: #ccd6f6;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.3rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const JobTitle = styled.h4`
  color: #64ffda;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
`;

const DescriptionItem = styled.li`
  color: #8892b0;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '▹';
    color: #64ffda;
    position: absolute;
    left: 0;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const experiences = [
    {
      company: 'Hisido Cloud',
      title: 'Software Engineer Intern',
      period: 'Aug 2025 - Oct 2025',
      description: [
        'Engineered and deployed scalable full-stack applications using React, TypeScript, FastAPI, and PostgreSQL on AWS services.',
        'Configured secure cross-account AWS access and created deployment templates, reducing deployment time by 60%.'
      ]
    },
    {
      company: 'Decvox Innovations Pvt. Ltd',
      title: 'React Developer',
      period: 'Mar 2025 - Jun 2025',
      description: [
        'Developed reusable React components and integrated order tracking, invoices, and admin settings.',
        'Refined UI/UX workflows for 30K+ users, boosting flexibility by 40% with Redux Toolkit.'
      ]
    },
    {
      company: 'Skill First Labs',
      title: 'Software Developer',
      period: 'Dec 2024 - Feb 2025',
      description: [
        'Migrated LMS video delivery from YouTube to Gumlet\'s Video API, cutting bandwidth usage by 25%.',
        'Built clean, modular, unit-tested LMS components and improved overall maintainability.'
      ]
    }
  ];

  return (
    <Section id="experience">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Title>Work Experience</Title>
          <Subtitle>Building solutions across diverse tech stacks</Subtitle>
          
          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem key={index} variants={itemVariants}>
                <TimelineDot />
                <TimelineContent>
                  <DateBadge>{exp.period}</DateBadge>
                  <CompanyName>{exp.company}</CompanyName>
                  <JobTitle>{exp.title}</JobTitle>
                  
                  <Description>
                    {exp.description.map((item, idx) => (
                      <DescriptionItem key={idx}>{item}</DescriptionItem>
                    ))}
                  </Description>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Experience; 