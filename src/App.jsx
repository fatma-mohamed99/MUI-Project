import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './theme';
import NavBar from './component/NavBar';
import Header from './component/Header';
import About from './component/About';
import Service from './component/Service';
import Portfolio from './component/Portfolio';
import MyPricing from './component/MyPricing';
import HireMe from './component/HireMe';
import Client from './component/Client';
import RecentPosts from './component/RecentPosts';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <NavBar onToggleTheme={handleThemeChange} isDarkMode={isDarkMode} />
      <Header />
      <About />
      <Service />
      <Portfolio />
      <MyPricing />
      <HireMe />
      <Client />
      <RecentPosts />
      <ContactForm />
      <Footer />
    </ThemeProvider>
  );
}

export default App;