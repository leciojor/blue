import React from 'react';

const Home = () => {
    return (
        <section id="home" className='home'>
            <div className="center-content">
                <img src="https://raw.githubusercontent.com/leciojor/blue/main/src/components/imgs/Blue%20INK.png" 
                    alt="Main Title" className="main-title" />
                <button 
                    className="redirect-button" 
                    onClick={() => window.location.href = 'http://example.com'}
                >
                    Go to Link
                </button>
            </div>
            <img src='https://raw.githubusercontent.com/leciojor/blue/b139a04fb34ed90db2bd4653f17cb633a40798f0/src/components/imgs/7.svg' alt="Printer" className="printer bottom-left" />
            <img src='https://raw.githubusercontent.com/leciojor/blue/b139a04fb34ed90db2bd4653f17cb633a40798f0/src/components/imgs/6.svg' alt="Printer" className="printer top-right" />
        </section>
    );
};

export default Home;
