import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import theme from '../styles/theme';

const Section = styled(motion.section)`
  padding: ${theme.spacing.section};
  background: ${theme.colors.background.primary};
  color: ${theme.colors.text.secondary};
`;

const Container = styled.div`
  max-width: ${theme.sizes.container};
  margin: 0 auto;
  padding: ${theme.spacing.container};
`;

const Title = styled(motion.h2)`
  color: ${theme.colors.text.primary};
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: ${theme.grid.columns.desktop};
  gap: ${theme.grid.gap};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: ${theme.grid.columns.tablet};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: ${theme.grid.columns.mobile};
  }
`;

const BlogCard = styled(motion.article)`
  background: ${theme.colors.background.card};
  border-radius: ${theme.sizes.borderRadius};
  overflow: hidden;
  border: 1px solid ${theme.colors.border.default};
  transition: ${theme.transitions.default};

  &:hover {
    transform: translateY(-10px);
    border-color: ${theme.colors.border.hover};
    box-shadow: ${theme.shadows.hover};
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${theme.transitions.default};

    ${BlogCard}:hover & {
      transform: scale(1.1);
    }
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogDate = styled.span`
  color: ${theme.colors.text.accent};
  font-family: ${theme.fonts.code};
  font-size: 0.9rem;
`;

const BlogTitle = styled.h3`
  color: ${theme.colors.text.primary};
  font-size: 1.5rem;
  margin: 1rem 0;
  transition: ${theme.transitions.default};

  ${BlogCard}:hover & {
    color: ${theme.colors.text.accent};
  }
`;

const BlogExcerpt = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ReadMore = styled.a`
  color: ${theme.colors.text.accent};
  font-family: ${theme.fonts.code};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: ${theme.transitions.default};

  &:hover {
    gap: 1rem;
  }

  i {
    transition: ${theme.transitions.default};
  }

  &:hover i {
    transform: translateX(5px);
  }
`;

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "March 27, 2024",
    excerpt: "Learn the basics of React and how to create your first component. Discover the power of component-based architecture and modern web development practices.",
    image: "/images/blog-1.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Modern CSS Techniques",
    date: "March 25, 2024",
    excerpt: "Explore modern CSS features and best practices for styling your web applications. From CSS Grid to Custom Properties, learn how to create beautiful layouts.",
    image: "/images/blog-2.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Web Development Trends 2024",
    date: "March 23, 2024",
    excerpt: "Stay updated with the latest trends in web development and technology. From AI integration to WebAssembly, discover what's shaping the future of the web.",
    image: "/images/blog-3.jpg",
    link: "#"
  }
];

const Blog = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      id="blog"
    >
      <Container>
        <Title>Latest Blog Posts</Title>
        <Grid>
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <BlogImage>
                <img src={post.image} alt={post.title} />
              </BlogImage>
              <BlogContent>
                <BlogDate>{post.date}</BlogDate>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <ReadMore href={post.link}>
                  Read More
                  <i className="fas fa-arrow-right"></i>
                </ReadMore>
              </BlogContent>
            </BlogCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Blog; 