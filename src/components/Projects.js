import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import scholarship from '../assets/scholarship.png';
import skillslate from '../assets/skillslate.png';
import smartclinichub from '../assets/smartclinichub.png';
import { FaGithub, FaInfoCircle } from 'react-icons/fa';

const Section = styled.section`
  padding: 6rem 2rem 3rem;
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
  color: #ccd6f6;
  text-align: left;
  margin-bottom: 3rem;
  position: relative;
  font-weight: 600;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0;
    height: 3px;
    background: #64ffda;
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }

  span {
    color: #64ffda;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  align-items: stretch;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0;
  }
`;

const ViewMoreButton = styled(motion.a)`
  display: block;
  margin: 3rem auto 0;
  padding: 0;
  background: transparent;
  border: none;
  color: #64ffda;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: #52e4c4;
  }
`;

const ProjectCard = styled(motion.div)`
  background: #112240;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #233554;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(100, 255, 218, 0.15);
    border-color: rgba(100, 255, 218, 0.3);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 160px;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const ProjectTitle = styled.h3`
  color: #64ffda;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ViewDetailsButton = styled.div`
  color: #64ffda;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 0.5rem;

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover svg {
    transform: translateX(5px);
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
      title: 'SkillSlate',
      description: 'AI-Powered Portfolio-as-a-Service platform using OpenAI GPT-4o for automated portfolio generation.',
      image: skillslate,
      technologies: ['React.js', 'Flask', 'OpenAI', 'GitHub API', 'GitHub Pages', 'OAuth'],
      github: 'https://github.com/Gopi-techy/SkillSlate',
      details: {
        description: 'SkillSlate is an innovative AI-powered platform that generates professional portfolios from prompts or resumes using OpenAI\'s GPT-4o model, cutting portfolio creation time by over 40%.',
        features: [
          'Automated portfolio generation from prompts or resume uploads',
          'OpenAI GPT-4o model integration for intelligent content creation',
          'GitHub Pages deployment with OAuth-based authentication',
          'Token management and content validation for secure access',
          'Secure data handling with time-limited access and encryption',
          'One-click deployment to GitHub Pages',
          'Responsive portfolio templates with modern design'
        ],
        challenges: [
          'Integrating OpenAI GPT-4o for accurate portfolio generation',
          'Implementing secure OAuth authentication with GitHub',
          'Managing token lifecycle and optimizing API performance'
        ],
        solutions: [
          'Developed custom prompts and fine-tuned GPT-4o for portfolio context',
          'Implemented OAuth 2.0 with secure token validation and refresh mechanisms',
          'Optimized API calls with caching and rate limiting for better performance'
        ]
      }
    },
    {
      title: 'SmartClinicHub',
      description: 'End-to-End AI-Powered Healthcare Platform with secure patient-doctor interaction and medical chatbot.',
      image: smartclinichub,
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'AWS S3', 'LangChain', 'Flask'],
      github: 'https://github.com/Gopi-techy/SmartClinicHub',
      details: {
        description: 'SmartClinicHub is a comprehensive healthcare management system enabling secure patient-doctor interaction, AI-driven medical assistance, and efficient appointment management.',
        features: [
          'RAG-based medical chatbot using LangChain and Pinecone for 90%+ response accuracy',
          'Role-based access control (patient/doctor/admin) using JWT and bcrypt',
          'Real-time appointment scheduling with MongoDB indexing',
          'Secure file storage with AWS S3 pre-signed URLs',
          'API performance optimization achieving 40ms average response time',
          'Medical records management with encryption',
          'Real-time notifications and chat functionality'
        ],
        challenges: [
          'Building an accurate medical chatbot with RAG architecture',
          'Ensuring HIPAA-compliant data security and access control',
          'Optimizing database queries for real-time performance'
        ],
        solutions: [
          'Implemented RAG using LangChain with medical knowledge base integration',
          'Secured patient records with AWS S3 encryption and JWT-based authentication',
          'Optimized MongoDB queries with proper indexing and query optimization'
        ]
      }
    },
    {
      title: 'Scholarship Management',
      description: 'Cloud-based scholarship platform with AI document verification and automated CI/CD pipelines.',
      image: scholarship,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Azure AI', 'Azure Blob Storage', 'Terraform', 'Azure DevOps'],
      github: 'https://github.com/Gopi-techy/Scholarship-Management-System',
      details: {
        description: 'A robust scholarship management platform designed for secure document verification, role-based authentication, and seamless cloud integration with DevOps automation.',
        features: [
          'Azure AI Document Intelligence for automated document verification',
          'Multi-factor authentication (MFA) with Firebase and Node.js',
          'Secure document storage with Azure Blob Storage (RBAC and encryption)',
          'Infrastructure as Code (IaC) with Terraform',
          'Automated CI/CD pipelines using Azure DevOps',
          'Real-time alerts for login attempts and application status',
          'Admin dashboard with analytics and reporting',
          'Student application tracking and workflow management'
        ],
        challenges: [
          'Implementing AI-powered document verification with fraud detection',
          'Managing cloud infrastructure with automated DevOps pipelines',
          'Ensuring data security and access control at scale'
        ],
        solutions: [
          'Integrated Azure AI Document Intelligence for intelligent verification',
          'Used Terraform for reproducible infrastructure deployment',
          'Implemented MongoDB encryption with proper indexing for performance'
        ]
      }
    }
  ];
  

  const displayedProjects = projects.slice(0, 3);

  return (
    <Section id="projects">
      <Container ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Title>Featured <span>Work</span></Title>
          <Grid>
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                variants={itemVariants}
                onClick={() => setSelectedProject(project)}
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ViewDetailsButton>
                    View Details <FaInfoCircle />
                  </ViewDetailsButton>
                </ProjectContent>
              </ProjectCard>
            ))}
          </Grid>
          <ViewMoreButton
            href="https://github.com/Gopi-techy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Projects
          </ViewMoreButton>
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