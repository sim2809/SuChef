// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import './styles/animations.css';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="page"
                timeout={300}
            >
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalogue" element={<Catalogue />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

function App() {
    return (
        <Router>
            <Navbar />
            <AnimatedRoutes />
            <Footer />
        </Router>
    );
}

export default App;
