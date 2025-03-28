import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  color: #64ffda;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #ccd6f6;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #ccd6f6;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #64ffda;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #64ffda;

    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #64ffda;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 70%;
    max-width: 300px;
    background: #112240;
    padding: 5rem 2rem 2rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.3);

    &.open {
      transform: translateX(0);
    }
  }
`;

const MobileNavLink = styled.a`
  color: #ccd6f6;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 1rem 0;
  transition: all 0.3s ease;
  position: relative;
  display: block;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #64ffda;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #64ffda;

    &::after {
      width: 100%;
    }
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    scrolled: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3
      }
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3
      }
    }
  };

  return (
    <Nav
      scrolled={scrolled}
      variants={navVariants}
      initial="hidden"
      animate={scrolled ? "scrolled" : "visible"}
    >
      <NavContainer>
        <Logo href="#home" scrolled={scrolled}>
          <i className="fas fa-code"></i>
          Portfolio
        </Logo>

        <NavLinks>
          {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
            <NavLink
              key={item}
              href={`#${item.toLowerCase()}`}
              variants={linkVariants}
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </NavLink>
          ))}
        </NavLinks>

        <MobileMenuButton
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </MobileMenuButton>
      </NavContainer>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <MobileNavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
              >
                {item}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar; 