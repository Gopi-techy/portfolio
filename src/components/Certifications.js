import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import azureBadge from '../assets/az.gif';
import githubBadge from '../assets/github-mark-white.svg';

const Section = styled.section`
  padding: 3rem 2rem 6rem;
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
    padding: 2rem 1rem 4rem;
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

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const CertCard = styled(motion.a)`
  background: rgba(100, 255, 218, 0.03);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  display: block;
  text-decoration: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #64ffda 0%, #4a9eff 100%);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    border-color: rgba(100, 255, 218, 0.4);
    background: rgba(100, 255, 218, 0.06);
    transform: translateY(-10px);
    box-shadow: 0 15px 50px rgba(100, 255, 218, 0.2);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const BadgeContainer = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  padding: 0;
  transition: all 0.3s ease;
  overflow: hidden;

  ${CertCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const BadgeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const CertName = styled.h3`
  color: #ccd6f6;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CertCode = styled.p`
  color: #64ffda;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CertDate = styled.p`
  color: #8892b0;
  font-size: 0.95rem;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Certifications = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const certifications = [
    {
      name: 'Azure Cloud Fundamentals',
      code: 'AZ-900',
      date: 'Feb 2025',
      badge: azureBadge,
      link: 'https://learn.microsoft.com/en-us/users/gopinathm-7044/credentials/69d02ac2eb829844'
    },
    {
      name: 'Azure AI Fundamentals',
      code: 'AI-900',
      date: 'Jun 2025',
      badge: azureBadge,
      link: 'https://learn.microsoft.com/en-us/users/gopinathm-7044/credentials/7eb8fc02d8c553ca'
    },
    {
      name: 'GitHub Foundations',
      code: 'Certification Program',
      date: 'Jun 2025',
      badge: githubBadge,
      link: 'https://www.credly.com/earner/earned/badge/8125bc7a-3150-4c07-a9f8-700b6a172c7e'
    }
  ];

  return (
    <Section id="certifications">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Title>Credentials</Title>
          <Subtitle>Industry-recognized certifications</Subtitle>
          
          <CertificationsGrid>
            {certifications.map((cert, index) => (
              <CertCard 
                key={index} 
                variants={cardVariants}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BadgeContainer>
                  <BadgeImage src={cert.badge} alt={cert.name} />
                </BadgeContainer>
                <CertName>{cert.name}</CertName>
                <CertCode>{cert.code}</CertCode>
                <CertDate>{cert.date}</CertDate>
              </CertCard>
            ))}
          </CertificationsGrid>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Certifications;
