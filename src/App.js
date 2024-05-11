import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Router>
        <Route exact path='/home' component={<Home />} />
        <Route exact path='/signup' component={<Signup />} />
        <Route exact path='/login' component={<Login />} />
        <Route exact path='/about' component={<About />} />
      </Router>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
