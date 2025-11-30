import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt } from 'react-icons/fa';

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
  max-width: 1400px;
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
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;

const JourneyContainer = styled.div`
  position: relative;
  padding: 4rem 0;
  overflow: visible;
  min-height: 400px;

  @media (max-width: 768px) {
    padding: 3rem 0;
    min-height: 350px;
    overflow-x: auto;
    
    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(100, 255, 218, 0.05);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(100, 255, 218, 0.3);
      border-radius: 10px;

      &:hover {
        background: rgba(100, 255, 218, 0.5);
      }
    }
  }
`;

const JourneyPath = styled.div`
  position: relative;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-width: max-content;
  }
`;

const SVGPath = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const JourneyItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1;
  min-width: 150px;
  left: ${props => props.$left}px;
  top: ${props => props.$top}px;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    min-width: 120px;
  }
`;

const Marker = styled.div`
  width: 60px;
  height: 60px;
  background: #0a192f;
  border: 3px solid #64ffda;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);

  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(135deg, #64ffda, #4a9eff);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${JourneyItem}:hover & {
    transform: scale(1.2);
    box-shadow: 0 0 30px rgba(100, 255, 218, 0.6);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const Icon = styled(FaMapMarkerAlt)`
  font-size: 1.5rem;
  color: #64ffda;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Label = styled.div`
  color: #ccd6f6;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  transition: all 0.3s ease;

  ${JourneyItem}:hover & {
    color: #64ffda;
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Year = styled.div`
  color: #8892b0;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Journey = () => {
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
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const journeySteps = [
    { label: 'Student', year: '2023' },
    { label: 'Full-Stack Developer', year: '2024' },
    { label: 'Cloud Enthusiast', year: '2025' },
    { label: 'Mentor', year: '2025' },
    { label: 'Intern', year: '2025' },
    { label: 'Coming Soon', year: '202?' }
  ];

  // Calculate zigzag positions
  const calculatePositions = () => {
    const positions = [];
    const horizontalSpacing = 200;
    const amplitude = 60;
    const centerY = 150; // Center of the 300px height container

    journeySteps.forEach((_, index) => {
      const x = 100 + (index * horizontalSpacing);
      const y = centerY + (index % 2 === 0 ? -amplitude : amplitude);
      positions.push({ x, y });
    });

    return positions;
  };

  const positions = calculatePositions();
  const totalWidth = positions[positions.length - 1].x + 200;

  // Generate smooth curved SVG path connecting all markers
  const generatePath = () => {
    if (positions.length === 0) return '';
    
    // Fine-tuned offsets for perfect alignment
    const markerVerticalOffset = 20; // Move down more
    const horizontalOffset = 70; // Move right more
    
    let path = `M ${positions[0].x + horizontalOffset} ${positions[0].y + markerVerticalOffset}`;
    
    for (let i = 1; i < positions.length; i++) {
      const prev = positions[i - 1];
      const curr = positions[i];
      const midX = (prev.x + curr.x) / 2 + horizontalOffset;
      const prevY = prev.y + markerVerticalOffset;
      const currY = curr.y + markerVerticalOffset;
      
      // Create smooth curve through midpoint
      path += ` Q ${midX} ${prevY}, ${midX} ${(prevY + currY) / 2}`;
      path += ` Q ${midX} ${currY}, ${curr.x + horizontalOffset} ${currY}`;
    }
    
    return path;
  };

  return (
    <Section id="journey">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Title>Career Roadmap</Title>
          <Subtitle>From student to software engineer - my evolution in tech</Subtitle>
          
          <JourneyContainer>
            <JourneyPath style={{ width: `${totalWidth}px` }}>
              <SVGPath 
                width="100%" 
                height="300" 
                viewBox={`0 0 ${totalWidth} 300`}
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d={generatePath()}
                  stroke="#64ffda"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </SVGPath>
              
              {journeySteps.map((step, index) => (
                <JourneyItem 
                  key={index} 
                  variants={itemVariants}
                  $left={positions[index].x}
                  $top={positions[index].y}
                >
                  <Marker>
                    <Icon />
                  </Marker>
                  <Label>{step.label}</Label>
                  <Year>{step.year}</Year>
                </JourneyItem>
              ))}
            </JourneyPath>
          </JourneyContainer>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Journey;
