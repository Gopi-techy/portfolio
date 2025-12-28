import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import achievement images
import workshop1 from '../assets/blog/b1-1.jpeg';
import workshop2 from '../assets/blog/b1-2.jpeg';
import workshop3 from '../assets/blog/b1-3.jpeg';
import aws1 from '../assets/blog/b2-2.jpeg';
import aws2 from '../assets/blog/b2-1.jpeg';
import aws3 from '../assets/blog/b2-3.jpeg';
import git1 from '../assets/blog/b3-1.jpg';
import git2 from '../assets/blog/b3-2.jpg';
import git3 from '../assets/blog/b3-3.jpg';

const Section = styled.section`
  padding: 6rem 2rem;
  background: #0a192f;
  color: #8892b0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  color: #ccd6f6;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;

  span {
    color: #64ffda;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: #8892b0;
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled(motion.div)`
  background: rgba(17, 34, 64, 0.4);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #64ffda;
    box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(10, 25, 47, 0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${Card}:hover img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #64ffda;
  }

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const Description = styled.p`
  color: #8892b0;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const KnowMoreButton = styled.button`
  background: none;
  border: none;
  color: #64ffda;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateX(5px);
  }

  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(3px);
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
  overflow-y: auto;
`;

const ModalContent = styled(motion.div)`
  background: #112240;
  border: 2px solid #64ffda;
  border-radius: 15px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ModalImage = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 15px 15px 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ModalBody = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ModalTitle = styled.h3`
  color: #64ffda;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ModalDescription = styled.p`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImageSlider = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 15px 15px 0 0;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
`;

const SliderDots = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.$active ? '#64ffda' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #64ffda;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid #64ffda;
  color: #64ffda;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: #64ffda;
    color: #0a192f;
    transform: rotate(90deg);
  }
`;

const Blog = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Auto-slide effect
  React.useEffect(() => {
    if (selectedAchievement && selectedAchievement.images) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => 
          prev === selectedAchievement.images.length - 1 ? 0 : prev + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [selectedAchievement]);

  const achievements = [
    {
      id: 1,
      title: "Empowering 240+ Future Web Developers",
      description: "Full Stack Web Development Workshop for 240+ students at St. Joseph's Institute of Technology.",
      fullDescription: `Had an incredible experience conducting a Full Stack Web Development Workshop for 240+ enthusiastic students as part of the Summer Internship Program organized by the Department of Artificial Intelligence and Data Science, St. Joseph's Institute of Technology.

This wasn't just a workshop—it was a moment to ignite curiosity and creativity in young minds ready to explore the world of web development. From understanding how websites work to building their very first web pages, these students showed amazing excitement and participation!

💬 Key Highlights – Super Simple & Beginner-Friendly:
🌍 What is a Website? How does it actually work?
🧱 Getting started with HTML – the structure of a web page
🎨 Styling with CSS – making your site look cool
⚙️ Intro to JavaScript – adding life to the page
🔧 What is the Backend? Where the magic happens
🚀 How to put your website on the internet

The energy in the room with 240+ bright young learners was just phenomenal! Their questions, ideas, and curiosity made the session truly interactive and inspiring.

A heartfelt thank you to Mrs. Saranya S, Mr. Venkatesan Sir, and our beloved HoD, Priscilla Babu Manaseh for their trust, support, and the opportunity to contribute to this wonderful initiative.

Grateful to be part of their first step toward tech careers. Can't wait to see them build, break, and rebuild amazing things!`,
      images: [workshop1, workshop2, workshop3]
    },
    {
      id: 2,
      title: "AWS Student Community Day 2025 - Core Team",
      description: "Played a key role in planning and executing AWS Student Community Day 2025 as Core Team member.",
      fullDescription: `✨ Honored to play a role in shaping AWS Student Community Day 2025 as a Core Team member.

I was involved in driving the planning and execution of several core activities, both behind the scenes and during the event, and I also had the opportunity to develop the official website for the event, ensuring smooth access to information and updates.

The day kicked off with an atmosphere full of energy, curiosity, and innovation, setting the stage for a celebration of learning and community spirit. ✨

Across the day, three impactful tracks inspired us with knowledge and vision:
⚡ Agentic AI & GenAI – where innovation meets real-world applications.
⚡ Serverless & Developer Tools – insights on building, scaling, and experimenting with AWS-powered solutions.
⚡ Security – critical conversations on trust, compliance, and the evolving role of AI in cloud security.

It was an honor to listen to keynote speakers Shubham Londhe and Arkodyuti Saha, who energized the community with their insights. 🌟

We also had an incredible lineup of speakers who brought unmatched energy and expertise.

A special thanks to Dr. KARTHI M Sir for his constant guidance, and to our amazing captains Dhyana Suresh and Mohana Priya S, whom I was glad to support throughout the event. 🙌

Special shoutout to AWS Cloud Club St.Joseph's Group of Institutions for empowering us and making this event possible! 💜

Beyond the sessions, it was the connections and conversations that made the experience even more memorable — meeting community leaders, mentors, and peers, all sharing the same passion for cloud and innovation.`,
      images: [aws1, aws2, aws3]
    },
    {
      id: 3,
      title: "Peer Learning Session",
      description: "Conducted an interactive session with peers covering Git version control and cloud computing basics.",
      fullDescription: `Had an engaging peer learning session focused on building foundational skills in Git and Cloud Computing.

This session was all about hands-on learning and collaborative exploration. Working alongside fellow students in a computer lab setting, we dove into practical aspects of modern development tools and cloud technologies.

🔧 Session Highlights:

📚 Git & Version Control
• Understanding what Git is and why it matters
• Basic Git commands and workflows
• Branching, merging, and collaboration
• Best practices for version control
• Hands-on practice with real repositories

☁️ Cloud Computing Basics
• Introduction to cloud computing concepts
• Understanding different cloud service models
• Overview of major cloud platforms
• Practical cloud deployment scenarios
• Real-world use cases and applications

The session was interactive and practical, with everyone working on their own systems, trying out commands, and learning through doing. The lab environment provided the perfect setup for hands-on experimentation.

Special thanks to all my peers who participated actively and made this learning session productive. The collaborative learning atmosphere and peer-to-peer knowledge sharing made the experience truly valuable.

These fundamentals form the backbone of modern software development, and it was great to explore them together as a community of learners!`,
      images: [git1, git2, git3]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Section id="achievements">
      <Container ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Title>
            Notable <span>Achievements</span>
          </Title>
          <Subtitle>
            Highlights of my professional journey and impactful contributions
          </Subtitle>

          <Grid>
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                variants={cardVariants}
                onClick={() => {
                  setSelectedAchievement(achievement);
                  setCurrentSlide(0);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ImageContainer>
                  <img src={achievement.images ? achievement.images[0] : achievement.image} alt={achievement.title} />
                </ImageContainer>
                <CardContent>
                  <CardTitle>{achievement.title}</CardTitle>
                  <Description>{achievement.description}</Description>
                  <KnowMoreButton>Know More</KnowMoreButton>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </motion.div>

        <AnimatePresence>
          {selectedAchievement && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAchievement(null)}
            >
              <ModalContent
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <CloseButton onClick={() => setSelectedAchievement(null)}>
                  ×
                </CloseButton>
                {selectedAchievement.images ? (
                  <ImageSlider>
                    {selectedAchievement.images.map((img, index) => (
                      <SlideImage
                        key={index}
                        src={img}
                        alt={`${selectedAchievement.title} ${index + 1}`}
                        $active={currentSlide === index}
                      />
                    ))}
                    <SliderDots>
                      {selectedAchievement.images.map((_, index) => (
                        <Dot
                          key={index}
                          $active={currentSlide === index}
                          onClick={() => setCurrentSlide(index)}
                        />
                      ))}
                    </SliderDots>
                  </ImageSlider>
                ) : (
                  <ModalImage>
                    <img src={selectedAchievement.image} alt={selectedAchievement.title} />
                  </ModalImage>
                )}
                <ModalBody>
                  <ModalTitle>{selectedAchievement.title}</ModalTitle>
                  <ModalDescription>{selectedAchievement.fullDescription}</ModalDescription>
                </ModalBody>
              </ModalContent>
            </Modal>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
};

export default Blog; 