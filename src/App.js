import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path='/' component={<Home />} />
        <Route path='/signup' component={<Signup />} />
        <Route path='/login' component={<Login />} />
        <Route path='/about' component={<About />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
