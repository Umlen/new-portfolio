import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './style/app.css';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function changeTheme() {
    setIsDarkMode( prevDarkMode => !prevDarkMode);
  }

  useEffect( () => {
    if(isDarkMode) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }, [isDarkMode]);

  return (
    <div className='container'>
      <Header darkModeOn={isDarkMode} themeToggler={changeTheme}/>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/contacts' element={ <Contacts /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
