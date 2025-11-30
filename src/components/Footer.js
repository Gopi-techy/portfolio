import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #0a192f;
  color: #ccd6f6;
  padding: 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Text = styled.p`
  color: #8892b0;
  font-size: 0.95rem;
  
  span {
    color: #64ffda;
    font-weight: 600;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Text>
          Designed and Developed by <span>Gopinath</span>
        </Text>
      </Container>
    </FooterSection>
  );
};

export default Footer; 