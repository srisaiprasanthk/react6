import React from 'react';
import './App.css';
import Header from './Components_6/Header';
import About from './Components_6/About';
import Projects from './Components_6/Project';
import Contact from './Components_6/Contact';
import "./Components_6/style.css";
function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;