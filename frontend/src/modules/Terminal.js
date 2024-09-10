import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import profilePic from '../asserts/profile.jpeg';
const TerminalContainer = styled.div`
  background-color: #000;
  color: #00ff00;
  font-family: 'Courier New', Courier, monospace;
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #ffcc00; // Yellowish
`;

const Subtitle = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #66ff66; // Light green
`;

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const Cursor = styled.span`
  font-weight: bold;
  font-size: 24px;
  animation: ${blink} 1s infinite;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TerminalLine = styled.div`
  white-space: pre-wrap;
  color: ${({ isHeading }) => (isHeading ? '#ffcc00' : '#00ff00')}; // Yellow for headings
  font-weight: ${({ isHeading }) => (isHeading ? 'bold' : 'normal')};
  margin-bottom: ${({ isHeading }) => (isHeading ? '10px' : '5px')};
`;

const MenuOption = styled.div`
  cursor: pointer;
  color: #00ff00;
  margin: 5px 0;
  &:hover {
    text-decoration: underline;
  }
`;

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [initialRendered, setInitialRendered] = useState(false); // Flag to control initial rendering

  useEffect(() => {
    if (!initialRendered) {
      const initialCommand = 'menu';
      setInitialRendered(true); // Set flag to true to prevent re-render
      setOutput([
        `Welcome to Priyadarshni Sundararajan's Portfolio Terminal!`,
        '',
        `Type 'menu' to see the list of available commands.`,
      ]);
      setInput(initialCommand);

      setTimeout(() => {
        handleCommand(initialCommand);
      }, 1000);
    }
  }, [initialRendered]);

  const handleCommand = (command) => {
    switch (command.toLowerCase()) {
      case 'menu':
        setOutput((prev) => [
          ...prev,
          `> ${command}`,
          <MenuOption key="about" onClick={() => handleCommand('about')}>About - Learn more about me</MenuOption>,
          <MenuOption key="education" onClick={() => handleCommand('education')}>Education - View my educational background</MenuOption>,
          <MenuOption key="experience" onClick={() => handleCommand('experience')}>Experience - See my work experience</MenuOption>,
          <MenuOption key="skills" onClick={() => handleCommand('skills')}>Skills - See my work skill set</MenuOption>,
          <MenuOption key="projects" onClick={() => handleCommand('projects')}>Projects - Check out my development projects</MenuOption>,
          <MenuOption key="contact" onClick={() => handleCommand('contact')}>Contact - Get my contact information</MenuOption>,
        ]);
        break;
      case 'about':
        setOutput((prev) => [
          ...prev,
          `> ${command}`,
          'I am Priyadarshni Sundararajan, a CS Graduate Student at SUNY Buffalo.',
          'Passionate about full-stack development and AI/ML projects.',
        ]);
        break;
      case 'education':
        setOutput((prev) => [
          ...prev,
          `> ${command}`,
          '',
          'State University of New York, Buffalo',
          'Masters in Computer Science | Jan 2024 - Present',
          'GPA: 3.93 / 4.0',
          '',
          'Anna University, Chennai',
          'B.Tech in Information Technology | Aug 2017 - May 2021',
          'GPA: 8.43 / 10',
        ]);
        break;
      case 'experience':
        setOutput((prev) => [
          ...prev,
          `> ${command}`,
          '',
          'Virdhi Tech Lab | Full Stack Developer | Dec 2021 - Dec 2023',
          '• Spearheaded the development of a campus management system with 20,000+ user records, using React.js, Laravel, and React Native.',
          '• Designed and developed a dynamic Node.js module for filtering, sorting, and searching across 20+ APIs.',
          '• Architected a comprehensive login flow supporting 6 different user roles, improving access control and security.',
          '• Created and integrated refresh token functionality using Node.js, ensuring seamless user authentication.',
          '• Executed a proof of concept for an automatic scheduling feature within APIs, optimizing task execution.',
          '',
          'English Power Academy | Full Stack Mobile Developer | Dec 2021 - Dec 2023',
          '• Developed a mobile application using React Native and Node.js for interactive English learning.',
          '• Engineered reusable React Native components for accessing various hardware parts.',
          '• Created and integrated backend RESTful APIs with Node.js for mobile screens.',
          '• Conducted a proof of concept for integrating text-to-speech functionality using Expo-Speech.',
          '',
          'Sirius Computer Solutions | Software Consultant | May 2021 - Dec 2021',
          '• Enhanced code efficiency and reduced redundancy by developing shared backend components.',
          '• Addressed and resolved critical and non-critical bugs in AEM and Java.',
        ]);
        break;
      case 'skills':
        setOutput((prev) => [
          ...prev,
          `> ${command}`,
          'Skills:',
          'Languages: JavaScript, Java, Python, C, HTML5, CSS, PHP',
          'Database: MySQL, MongoDB',
          'Front-end Libraries: React.js, Redux, Material UI, Next.js, Bootstrap, jQuery',
          'Back-end Technologies: Node.js, Laravel, Flask, Socket.io, Express, GraphQL',
          'Mobile Application Frameworks: React Native, Expo',
          'Data Analysis: NumPy, Pandas, Matplotlib',
          'ML/DL Frameworks: scikit-learn, PyTorch',
          'Version Control: Git, GitHub, GitLab',
          'Data Structures and Algorithms: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Dynamic Programming, Sorting, Searching'
        ]);
        break;
      case 'projects':
        setOutput((prev) => [
          ...prev,
          `> ${command}`,
          '• Student Safety App | Node.js, React Native, React.js, Socket.io',
          '   - Developed an app that instantly alerts the nearest police station in under a few seconds for students in emergency situations.',
          '   - Implemented authentication and authorization for different user roles.',
          '',
          '• Sign Language Detection for the Deaf and Mute Using Object Detection | Python, PyTorch',
          '   - Implemented real-time sign language recognition using the SSD architecture for accurate object detection.',
          '',
          '• Advanced Stock Prediction Model with Multivariate RNNs | Python, PyTorch, NumPy, Pandas',
          '   - Developed and implemented a stock prediction model with improved accuracy using Multivariate RNNs.',
          '',
          '• Anomaly Detection in Diabetic Health Data Using Autoencoders | Python, PyTorch, NumPy, Pandas',
          '   - Identified irregularities in diabetic health data using an advanced autoencoder-based anomaly detection system.',
          '',
          '• Innovative Clothing Design with DCGANs | Python, PyTorch, NumPy, Pandas',
          '   - Built and fine-tuned a Deep Convolutional GAN (DCGAN) model to generate high-resolution clothing designs.',
        ]);
        break;
      case 'contact':
        setOutput((prev) => [
          ...prev,
          `> ${command}`,
          <a href="tel:+17164655771" key="phone">Phone no: +1 716-465-5771</a>,
          <a href="mailto:Priyadarshni.Sundararajan@gmail.com" key="email">Email: Priyadarshni.Sundararajan@gmail.com</a>,
          <a href="https://www.linkedin.com/in/priyadarshni/" target="_blank" rel="noopener noreferrer" key="linkedin">LinkedIn: www.linkedin.com/in/priyadarshni/</a>,
          <a href="https://github.com/priyanov101999" target="_blank" rel="noopener noreferrer" key="github">GitHub: github.com/priyanov101999</a>,
        ]);
        break;
      default:
        setOutput((prev) => [
          ...prev,
          `> ${command}`,
          `Command '${command}' not recognized. Type 'menu' to see available commands.`,
        ]);
        break;
    }
    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <TerminalContainer>
      <Header>
        <ProfileImage src={profilePic} alt="Profile Picture" />
        <div>
          <Title>Priyadarshni Sundararajan</Title>
          <Subtitle>CS Graduate Student | Full Stack Developer | AI/ML Enthusiast</Subtitle>
        </div>
      </Header>
      {output.map((line, index) => (
        <TerminalLine key={index} isHeading={typeof line === 'string' && line.startsWith('>')}>
          {line}
        </TerminalLine>
      ))}
      <InputContainer>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          style={{ backgroundColor: '#000', color: '#00ff00', border: 'none', outline: 'none', width: '100%', marginLeft: '5px' }}
        />
        <Cursor>|</Cursor>
      </InputContainer>
    </TerminalContainer>
  );
};

export default Terminal;