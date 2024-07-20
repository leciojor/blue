import React from 'react';

const Home = () => {
    return (
        <section id="home">
            <div className="center-content">
                <img src='' alt="Main Title" className="main-title" />
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
