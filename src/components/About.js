import React, { useState, useEffect, useRef } from 'react';

const About = () => {
    const [mainText, setMainText] = useState('');
    const [aboutText, setAboutText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const fullMainText = 'Alugando impressoras desde 2020...';
    const fullAboutText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let mainIndex = 0;
        let aboutIndex = 0;
        let pauseCounter = 0;

        const typeText = () => {
            if (mainIndex < fullMainText.length) {
                setMainText(fullMainText.slice(0, mainIndex + 1));
                mainIndex++;
            } else if (aboutIndex < fullAboutText.length) {
                if (pauseCounter < 10) {
                    pauseCounter++;
                } else {
                    setAboutText(fullAboutText.slice(0, aboutIndex + 1));
                    aboutIndex++;
                }
            } else {
                setIsTypingComplete(true);
                clearInterval(interval);
            }
        };

        const interval = setInterval(typeText, 39);
        const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 500);

        return () => {
            clearInterval(interval);
            clearInterval(cursorInterval);
        };
    }, [isVisible]);
       
    const [hoveredElement, setHoveredElement] = useState(null);

    return (
        <section id="Sobre nós" className='about' ref={sectionRef}>
            <div className="content-wrapper">
                <div className="text-content">
                    <div className="main-text">
                        <h1 className='abouth'>
                            {mainText}
                            {showCursor && !isTypingComplete && <span className="cursor">|</span>}
                        </h1>
                    </div>
                    <div className="about-text">
                        &ensp;{aboutText}
                        {showCursor && !isTypingComplete && mainText === fullMainText && <span className="cursor">|</span>}
                    </div>
                </div>
                <div className='bottom-container'>
                    <div className="rectangular-components">
                        <div className={`rectangle ${hoveredElement === 'rectangle' ? 'hovered_' : ''}`}
            onMouseEnter={() => setHoveredElement('rectangle')}
            onMouseLeave={() => setHoveredElement(null)}>
                            <p>Sample text 1</p>
                        </div>
                        <div className={`rectangle ${hoveredElement === 'rectangle' ? 'hovered_' : ''}`}
            onMouseEnter={() => setHoveredElement('rectangle')}
            onMouseLeave={() => setHoveredElement(null)}>
                            <p>Sample text 2</p>
                        </div>
                        <div className={`rectangle ${hoveredElement === 'rectangle' ? 'hovered_' : ''}`}
            onMouseEnter={() => setHoveredElement('rectangle')}
            onMouseLeave={() => setHoveredElement(null)}>
                            <p>Sample text 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;