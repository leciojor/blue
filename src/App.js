import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Faq from './components/Faq';


import './index.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Home />
                <About />
                <Service />
                <Faq />
            </main>
        </div>
    );
}

export default App;
