import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import college from '../assets/college.jpg';
import scholarship from '../assets/scholarship.png';  
import chat from '../assets/chat.webp';
import { FaGithub, FaInfoCircle } from 'react-icons/fa';

const Section = styled.section`
  padding: 6rem 2rem;
  background: #0a192f;
  color: #ccd6f6;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  align-items: stretch;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0;
  }
`;

const ProjectCard = styled.div`
  background: #112240;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #233554;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(10, 25, 47, 0.8) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${ProjectCard}:hover &::after {
    opacity: 1;
  }

  ${ProjectCard}:hover img {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;


const ProjectTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #64ffda;
    transition: width 0.3s ease;
  }

  ${ProjectCard}:hover &::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  flex: 1;
  transition: color 0.3s ease;

  ${ProjectCard}:hover & {
    color: #ccd6f6;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;


const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: rgba(100, 255, 218, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.2);
  color: #64ffda;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
    border-color: rgba(100, 255, 218, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;


const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 25, 47, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ModalContent = styled(motion.div)`
  background: #112240;
  border-radius: 15px;
  padding: 2rem;
  max-width: 800px;
  width: 90%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(100, 255, 218, 0.1);
  box-shadow: 0 0 30px rgba(100, 255, 218, 0.1);

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
`;

const ModalTitle = styled.h3`
  font-size: 2rem;
  color: #ccd6f6;
  margin: 0;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const ModalDescription = styled.p`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const ModalTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ModalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const ModalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: rgba(100, 255, 218, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.2);
  color: #64ffda;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
    border-color: rgba(100, 255, 218, 0.4);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 0.7rem 1.2rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #ccd6f6;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
  position: absolute;
  top: 1rem;
  right: 1rem;

  &:hover {
    color: #64ffda;
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
    font-size: 1.2rem;
  }
`;

const TechnologyTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
  border: 1px solid rgba(100, 255, 218, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.7rem;
  }
`;

const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState(null);

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

  // modal animation variants are inlined where used

  const projects = [
    {
      title: 'Scholarship Management System',
      description: 'A MERN stack-based platform with Firebase Authentication, Azure AI for document verification, and DevOps CI/CD.',
      image: scholarship,
      technologies: ['Terraform', 'React', 'Node.js', 'Express', 'Azure AI', 'Firebase', 'MongoDB', 'Azure DevOps'],
      github: 'https://github.com/Gopi-techy/Scholarship-Management-System.git',
      details: {
        description: 'A robust scholarship management platform designed for secure document verification and seamless workflow with cloud integration.',
        features: [
          'Role-based authentication with Firebase and Node.js',
          'Multi-Factor Authentication (MFA) for enhanced security',
          'Document verification using Azure AI Document Intelligence',
          'Secure document storage with Azure Blob Storage (RBAC and encryption)',
          'Automated CI/CD pipelines using Azure DevOps and Terraform',
          'Real-time alerts for login attempts and application updates',
          'Admin dashboard with analytics and student application tracking'
        ],
        challenges: [
          'Ensuring secure document verification with AI',
          'Optimizing storage performance and access control',
          'Implementing DevOps automation with Azure Pipelines'
        ],
        solutions: [
          'Integrated Azure AI for fraud detection in document verification',
          'Utilized MongoDB encryption and indexing for faster retrieval',
          'Configured Terraform for Infrastructure as Code (IaC) and CI/CD pipelines'
        ]
      }
    },
    {
      title: 'College Website with Chatbot',
      description: 'A modern, responsive college website featuring an AI-powered chatbot for assisting freshers.',
      image: college,
      technologies: ['React.js', 'Material-UI', 'Python', 'Flask', 'MongoDB', 'NLP'],
      github: 'https://github.com/Gopi-techy/St.joseph_Web.git',
      details: {
        description: 'An interactive college website with a chatbot to guide students and provide essential information dynamically.',
        features: [
          'AI-powered chatbot with NLP for student queries',
          'Responsive UI built with React.js and Material-UI',
          'Automated event updates and push notifications',
          'Student resources and downloadable materials',
          'Contact form with integrated email notifications'
        ],
        challenges: [
          'Building an NLP-based chatbot for accurate responses',
          'Ensuring seamless responsiveness across devices',
          'Managing and rendering dynamic content efficiently'
        ],
        solutions: [
          'Implemented Flask-based chatbot with pre-trained NLP models',
          'Used React.js and Material-UI for an interactive user experience',
          'Optimized API calls and data rendering with Flask and MongoDB'
        ]
      }
    },
    {
      title: 'Realtime Chat App',
      description: 'A MERN stack-based real-time chat application with Firebase Authentication, WebSockets, and MongoDB.',
      image: chat,
      technologies: ['React', 'Firebase', 'WebSockets', 'Node.js', 'Express', 'MongoDB', 'Auth0'],
      github: 'https://github.com/Gopi-techy/Chat-app.git',
      details: {
        description: 'A real-time chat application with instant messaging, authentication, and a feature-rich user interface.',
        features: [
          'Real-time messaging using WebSockets and Firebase Firestore',
          'User authentication via Firebase and Auth0 with JWT support',
          'Typing indicators, read receipts, and presence tracking',
          'Group chats, private messaging, and media file sharing',
          'Dark/light mode toggle for better accessibility'
        ],
        challenges: [
          'Ensuring low-latency real-time data synchronization',
          'Managing secure user authentication and session handling',
          'Optimizing performance for smooth UI interactions'
        ],
        solutions: [
          'Used WebSockets for real-time data updates',
          'Integrated Firebase Authentication with role-based access control',
          'Implemented lazy loading and optimized Material-UI components'
        ]
      }
    }
  ];
  

  return (
    <Section id="projects">
      <Container ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Title>My Projects</Title>
          <Grid>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTechnologies>
                    {project.technologies.map((tech, index) => (
                      <TechnologyTag key={index}>{tech}</TechnologyTag>
                    ))}
                  </ProjectTechnologies>
                  <ProjectLinks>
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub
                    </ProjectLink>
                    <ProjectLink onClick={() => setSelectedProject(project)}>
                      <FaInfoCircle /> Details
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </Grid>
        </motion.div>
      </Container>
      {selectedProject && (
        <AnimatePresence>
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </AnimatePresence>
      )}
    </Section>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <Modal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ModalContent
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>×</CloseButton>
        <ModalHeader>
          <ModalTitle>{project.title}</ModalTitle>
        </ModalHeader>
        <ModalImage src={project.image} alt={project.title} />
        <ModalDescription>{project.details.description}</ModalDescription>
        
        <ModalSection>
          <ModalSubtitle>Key Features</ModalSubtitle>
          <FeatureList>
            {project.details.features.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureIcon>▹</FeatureIcon>
                {feature}
              </FeatureItem>
            ))}
          </FeatureList>
        </ModalSection>

        <ModalSection>
          <ModalSubtitle>Challenges & Solutions</ModalSubtitle>
          {project.details.challenges.map((challenge, index) => (
            <ChallengeItem key={index}>
              <ChallengeTitle>Challenge:</ChallengeTitle>
              <ChallengeText>{challenge}</ChallengeText>
              <SolutionTitle>Solution:</SolutionTitle>
              <SolutionText>{project.details.solutions[index]}</SolutionText>
            </ChallengeItem>
          ))}
        </ModalSection>

        <ModalTechnologies>
          <ModalSubtitle>Technologies Used</ModalSubtitle>
          <TechList>
            {project.technologies.map((tech, index) => (
              <TechnologyTag key={index}>{tech}</TechnologyTag>
            ))}
          </TechList>
        </ModalTechnologies>

        <ModalLinks>
          <ModalLink href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> View on GitHub
          </ModalLink>
        </ModalLinks>
      </ModalContent>
    </Modal>
  );
};

const ModalSection = styled.div`
  margin-bottom: 2rem;
`;

const ModalSubtitle = styled.h4`
  color: #64ffda;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 60%;
    height: 2px;
    background: #64ffda;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  color: #8892b0;
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  line-height: 1.6;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FeatureIcon = styled.span`
  color: #64ffda;
  margin-top: 0.3rem;
`;

const ChallengeItem = styled.div`
  background: rgba(100, 255, 218, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 8px;
  padding: 1.2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ChallengeTitle = styled.h5`
  color: #64ffda;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const ChallengeText = styled.p`
  color: #8892b0;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const SolutionTitle = styled.h5`
  color: #64ffda;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const SolutionText = styled.p`
  color: #8892b0;
  line-height: 1.6;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default Projects; 