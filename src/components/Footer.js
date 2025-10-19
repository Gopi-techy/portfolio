import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';

const FooterSection = styled.footer`
  background: #0a192f;
  color: #ccd6f6;
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled(motion.div)`
  h3 {
    color: #64ffda;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #64ffda;
    }
  }

  p {
    color: #8892b0;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  color: #64ffda;
  font-size: 1.2rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: translateY(-3px);
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const QuickLink = styled.a`
  color: #8892b0;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  position: relative;
  padding-left: 0;

  &:hover {
    color: #64ffda;
    padding-left: 5px;
  }

  &::before {
    content: '▹';
    position: absolute;
    left: -10px;
    opacity: 0;
    transition: all 0.3s ease;
    color: #64ffda;
  }

  &:hover::before {
    opacity: 1;
    left: -5px;
  }
`;

// ContactInfo/ContactItem removed as inlined simple paragraphs are used in markup

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #8892b0;
  font-size: 0.95rem;

  svg {
    color: #64ffda;
    font-size: 1.2rem;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
  color: #8892b0;
  font-size: 0.9rem;
`;

const Footer = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <FooterSection>
      <Container
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FooterColumn variants={itemVariants}>
          <h3>About Us</h3>
          <p>
            We are passionate about creating innovative solutions and helping businesses grow through technology.
          </p>
          <SocialLinks>
            <SocialLink
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-facebook-f"></i>
            </SocialLink>
            <SocialLink
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-linkedin-in"></i>
            </SocialLink>
            <SocialLink
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-github"></i>
            </SocialLink>
          </SocialLinks>
        </FooterColumn>

        <FooterColumn variants={itemVariants}>
          <h3>Quick Links</h3>
          <QuickLinks>
            <li>
              <QuickLink href="#home" whileHover={{ x: 5 }}>
                <i className="fas fa-chevron-right"></i>
                Home
              </QuickLink>
            </li>
            <li>
              <QuickLink href="#about" whileHover={{ x: 5 }}>
                <i className="fas fa-chevron-right"></i>
                About
              </QuickLink>
            </li>
            <li>
              <QuickLink href="#projects" whileHover={{ x: 5 }}>
                <i className="fas fa-chevron-right"></i>
                Projects
              </QuickLink>
            </li>
            <li>
              <QuickLink href="#contact" whileHover={{ x: 5 }}>
                <i className="fas fa-chevron-right"></i>
                Contact
              </QuickLink>
            </li>
          </QuickLinks>
        </FooterColumn>

        <FooterColumn variants={itemVariants}>
          <h3> Contact Info</h3>
          <div>
            <p>
              <i className="fas fa-map-marker-alt"></i>
               Chennai, Tamil Nadu, India
            </p>
            <p>
              <i className="fas fa-phone"></i>
               +91 9159744847
            </p>
            <p>
              <i className="fas fa-envelope"></i>
               gopinath2k31@gmail.com
            </p>
          </div>
        </FooterColumn>

        <FooterColumn variants={itemVariants}>
          <h3>Skills</h3>
          <SkillsList>
            <SkillItem>
              <FaCode /> Frontend Development
            </SkillItem>
            <SkillItem>
              <FaServer /> Backend Development
            </SkillItem>
            <SkillItem>
              <FaDatabase /> Database Management
            </SkillItem>
            <SkillItem>
              <FaCloud /> Cloud Technologies
            </SkillItem>
            <SkillItem>
              <FaTools /> DevOps & Tools
            </SkillItem>
          </SkillsList>
        </FooterColumn>
      </Container>

      <Copyright>
        <p>&copy;  Gopinath. All rights reserved.</p>
      </Copyright>
    </FooterSection>
  );
};

export default Footer; 