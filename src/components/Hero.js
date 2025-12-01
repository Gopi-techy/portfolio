import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/profile.png';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem 1rem;
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
    padding: 4rem 1rem 1rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
    padding: 0 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 650px;

  @media (max-width: 768px) {
    align-items: center;
    max-width: 100%;
  }
`;

const Greeting = styled(motion.h1)`
  font-size: 1.4rem;
  color: #64ffda;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Name = styled(motion.h2)`
  font-size: 4.5rem;
  color: #ccd6f6;
  margin-bottom: 1rem;
  line-height: 1.1;
  font-weight: 700;
  position: relative;
  display: inline-block;
  overflow: hidden;

  span {
    display: inline-block;
    position: relative;
    animation: float 3s ease-in-out infinite;
  }

  span:nth-child(1) { animation-delay: 0s; }
  span:nth-child(2) { animation-delay: 0.2s; }
  span:nth-child(3) { animation-delay: 0.4s; }
  span:nth-child(4) { animation-delay: 0.6s; }
  span:nth-child(5) { animation-delay: 0.8s; }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Title = styled(motion.h3)`
  font-size: 3.5rem;
  color: #8892b0;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const Description = styled(motion.p)`
  color: #8892b0;
  font-size: 1.3rem;
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 1.15rem;
    margin: 0 auto;
    max-width: 100%;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.05rem;
  }
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 1rem 2.5rem;
  background: rgba(100, 255, 218, 0.15);
  border: 2px solid #64ffda;
  color: #64ffda;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  position: relative;
  overflow: hidden;
  margin: 0;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: rgba(100, 255, 218, 0.25);
    color: #64ffda;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(100, 255, 218, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.9rem 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0.8rem 1.8rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SocialLinks = styled(motion.div)`
  position: ${props => props.$scrolled ? 'fixed' : 'relative'};
  left: ${props => props.$scrolled ? '2rem' : 'auto'};
  bottom: ${props => props.$scrolled ? '0' : 'auto'};
  display: ${props => props.$scrolled ? 'flex' : 'flex'};
  flex-direction: ${props => props.$scrolled ? 'column' : 'row'};
  gap: ${props => props.$scrolled ? '1.5rem' : '1.5rem'};
  margin-top: 0;
  align-items: center;
  justify-content: center;
  z-index: ${props => props.$scrolled ? '100' : '1'};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.$scrolled ? '1' : '1'};
  
  &::after {
    content: ${props => props.$scrolled ? "''" : 'none'};
    width: 2px;
    height: 100px;
    background: #8892b0;
    margin-top: 1.5rem;
    animation: slideDown 0.6s ease-out;
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: 100px;
    }
  }

  @media (max-width: 768px) {
    display: ${props => props.$scrolled ? 'none' : 'flex'};
    
    &::after {
      display: none;
    }
  }
`;

const SocialLink = styled(motion.a)`
  color: #ccd6f6;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.1);

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid #64ffda;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scale(1.2);
  }

  &:hover {
    color: #64ffda;
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }

  svg {
    width: 20px;
    height: 20px;

    @media (max-width: 480px) {
      width: 16px;
      height: 16px;
    }
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 350px;
  height: 350px;
  margin: 0 auto;
  animation: floatSlow 6s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid #64ffda;
    border-radius: 50%;
    animation: rotate 15s linear infinite;
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
  }

  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border: 2px solid rgba(100, 255, 218, 0.3);
    border-radius: 50%;
    animation: rotate 12s linear infinite reverse;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes floatSlow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
    order: -1;
    animation: none;
    transform: translateY(0) !important;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
    animation: none;
    transform: translateY(0) !important;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  transition: all 0.5s ease;
  background: transparent;
  padding: 10px;

  &:hover {
    transform: scale(1.05);
  }
`;

const Hero = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // eslint-disable-next-line no-unused-vars
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const name = "Gopinath";

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const enhancedItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Section id="home">
        <Container ref={ref}>
          <ImageContainer
            variants={imageContainerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover="hover"
          >
            <ProfileImage
              src={profileImage}
              alt="Gopinath"
              whileHover={{ 
                scale: 1.05,
                filter: "grayscale(0%) brightness(1)",
                transition: { duration: 0.5 }
              }}
              transition={{ duration: 0.5 }}
            />
          </ImageContainer>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Content>
            <Greeting 
              variants={enhancedItemVariants}
              whileHover="hover"
            >
              Hi, my name is
            </Greeting>
            <Name variants={nameVariants}>
              {name.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  whileHover={{ 
                    scale: 1.2, 
                    color: '#64ffda',
                    transition: { duration: 0.2 }
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </Name>
            <Title 
              variants={titleVariants}
              whileHover={{ scale: 1.02 }}
            >
              I build things for the web and cloud.
            </Title>
            <Description 
              variants={enhancedItemVariants}
              whileHover="hover"
            >
              I'm a software developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products.
            </Description>
            <ButtonContainer>
              <Button
                href="#projects"
                variants={enhancedItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Works
              </Button>
              <SocialLinksContainer>
                <SocialLinks variants={enhancedItemVariants} $scrolled={scrolled}>
                  <SocialLink
                    href="https://linkedin.com/in/gopinath-m-218473299"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink
                    href="https://github.com/Gopi-techy"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                  </SocialLink>
                  <SocialLink
                    href="mailto:gopinath2k31@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaEnvelope />
                  </SocialLink>
                </SocialLinks>
              </SocialLinksContainer>
            </ButtonContainer>
          </Content>
        </motion.div>
      </Container>
    </Section>
    </>
  );
};

export default Hero; 
