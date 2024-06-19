import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';

function App() {

  const [ dark, setDark ] = useState(false);

  const handleTheme = () => {
    setDark(!dark);
  };

  return (
    <div className={`${dark} ? "bg-dark" : "bg-bg"`}>
      <Navbar handleTheme={handleTheme}/>
        <Routes>
          <Route exact path='/' component={<Home />} />
          <Route path='/signup' component={<Signup />} />
          <Route path='/login' component={<Login />} />
          <Route path='/about' component={<About />} />
        </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
