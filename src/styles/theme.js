const theme = {
  colors: {
    primary: '#0a192f',
    secondary: '#112240',
    accent: '#64ffda',
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
      accent: '#64ffda'
    },
    background: {
      primary: '#0a192f',
      secondary: '#112240',
      card: '#1a1a1a',
      hover: '#2a2a2a'
    },
    border: {
      default: '#333',
      hover: '#64ffda'
    },
    button: {
      background: '#64ffda',
      text: '#0a192f',
      hover: '#4cd8b2'
    },
    progress: {
      background: '#333',
      bar: '#64ffda'
    }
  },
  fonts: {
    primary: "'Inter', sans-serif",
    code: "'Fira Code', monospace"
  },
  spacing: {
    section: '100px 0',
    container: '0 2rem'
  },
  sizes: {
    container: '1200px',
    borderRadius: '10px'
  },
  transitions: {
    default: 'all 0.3s ease',
    slow: 'all 0.5s ease'
  },
  shadows: {
    card: '0 5px 15px rgba(0, 0, 0, 0.1)',
    hover: '0 8px 25px rgba(0, 0, 0, 0.2)'
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px'
  },
  grid: {
    columns: {
      mobile: '1fr',
      tablet: 'repeat(2, 1fr)',
      desktop: 'repeat(3, 1fr)'
    },
    gap: '2rem'
  }
};

export default theme; 