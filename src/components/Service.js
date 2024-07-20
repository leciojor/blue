import React, { useState, useRef } from 'react';

const Service = () => {
    const [popupContent, setPopupContent] = useState(null);
    const scrollRef = useRef(null);

    const handleScroll = (direction) => {
        if (direction === 'left') {
            scrollRef.current.scrollLeft -= 200;
        } else {
            scrollRef.current.scrollLeft += 200;
        }
    };

    const handleButtonClick = (content) => {
        setPopupContent(content);
    };

    const closePopup = () => {
        setPopupContent(null);
    };

    return (
        <section id="service">
            <button className="nav-button left" onClick={() => handleScroll('left')}>&lt;</button>
            <div className="horizontal-scroll" ref={scrollRef}>
                <div className="service-component">
                    <img src="image1.jpg" alt="Service 1" />
                    <button onClick={() => handleButtonClick('Service 1 Details')}>More Info</button>
                </div>
                <div className="service-component">
                    <img src="image2.jpg" alt="Service 2" />
                    <button onClick={() => handleButtonClick('Service 2 Details')}>More Info</button>
                </div>
                <div className="service-component">
                    <img src="image3.jpg" alt="Service 3" />
                    <button onClick={() => handleButtonClick('Service 3 Details')}>More Info</button>
                </div>
            </div>
            <button className="nav-button right" onClick={() => handleScroll('right')}>&gt;</button>
            {popupContent && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>&times;</span>
                        <p>{popupContent}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Service;
