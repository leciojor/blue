import React from 'react';

const Home = () => {
    return (
        <section id="home" className='home'>
            <div className="center-content">
                <img src="https://raw.githubusercontent.com/leciojor/blue/1ff4a3e279b979586af3e7da2862cf3a9d2907ba/src/components/imgs/logo/Blue%20INK%20(1).svg" 
                    alt="Main Title" className="main-title" />
                <button 
                    className="redirect-button" 
                    onClick={() => window.location.href = 'http://example.com'}
                >
                    Go to Link
                </button>
            </div>
            <img src='' alt="Printer" className="printer bottom-left" />
            <img src='' alt="Printer" className="printer top-right" />
        </section>
    );
};

export default Home;
