import React, { useState } from 'react';

const Home = () => {
    const [hoveredElement, setHoveredElement] = useState(null);

    return (
        <section id="home" className='home'>
            <div 
            className={`center-content ${hoveredElement === 'center-content' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredElement('center-content')}
            onMouseLeave={() => setHoveredElement(null)}
            >
                <img src="https://raw.githubusercontent.com/leciojor/blue/4e107852863ad8105ef955c3c8db34cc657c9d84/src/components/imgs/Blue%20INK%20(3).svg" 
                    alt="Main Title" className="main-title" />
                <button 
                    className="redirect-button" 
                    onClick={() => window.location.href = 'http://example.com'}
                >
                    AGENDAR REUNIÃO
                </button>
            </div>
            <img src='https://raw.githubusercontent.com/leciojor/blue/ac7856d48b0be67e695dc33ff7ffb47bc5b81767/src/components/imgs/9.svg' alt="Printer" className="printer bottom-left" />
            <img src='https://raw.githubusercontent.com/leciojor/blue/ac7856d48b0be67e695dc33ff7ffb47bc5b81767/src/components/imgs/8.svg' alt="Printer" className="printer top-right" />
        </section>
    );
};

export default Home;
