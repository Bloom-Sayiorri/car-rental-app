import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';

function App() {

  const [ dark, setDark ] = useState(false);

  const handleTheme = () => {
    setDark(!dark);
  };
// {`App ${dark} ? "bg-dark" : "bg-bg"`}
  return (
    <div className="App">
      <Navbar handleTheme={handleTheme}/>
      <div className="main">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
