import React, { useState } from 'react';
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

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
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

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    color: #ccd6f6;
    margin-bottom: 1.5rem;
  }

  p {
    color: #8892b0;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: #ccd6f6;
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  padding: 0.8rem;
  background: rgba(100, 255, 218, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 5px;
  color: #ccd6f6;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #64ffda;
    background: rgba(100, 255, 218, 0.1);
  }

  &::placeholder {
    color: #8892b0;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  background: rgba(100, 255, 218, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 5px;
  color: #ccd6f6;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #64ffda;
    background: rgba(100, 255, 218, 0.1);
  }

  &::placeholder {
    color: #8892b0;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #64ffda;
  color: #64ffda;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  color: #64ffda;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.1rem;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.1rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" ref={ref}>
      <Container>
        <Title
          as={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </Title>
        <ContactGrid>
          <ContactInfo
            as={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Get in Touch</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out if you'd like to connect!
            </p>
            <p>
              Whether you have a question or just want to say hi, I'll try my best
              to get back to you as soon as possible.
            </p>
          </ContactInfo>
          <ContactForm
            as={motion.form}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <label htmlFor="name">Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="message">Message</label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {status.type === 'success' && (
              <SuccessMessage>{status.message}</SuccessMessage>
            )}
            {status.type === 'error' && (
              <ErrorMessage>{status.message}</ErrorMessage>
            )}
          </ContactForm>
        </ContactGrid>
      </Container>
    </Section>
  );
};

export default Contact; 