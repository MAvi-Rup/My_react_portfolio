import React from 'react';
import About from './About/About';
import Contact from './Contact';
import Education from './Education';
import Hero from './Hero';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Education></Education>
            <About></About>
            
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;