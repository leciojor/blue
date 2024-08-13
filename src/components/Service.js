import React, { useState, useRef } from 'react';

const Service = () => {
    const [selectedPrinter, setSelectedPrinter] = useState(null);
    const [hoveredElement, setHoveredElement] = useState(null);
    const scrollContainerRef = useRef(null);

    const printers = [
        { id: 1, name: 'Printer Model A', description: 'High-speed, multi-function printer suitable for office use.', image: 'https://raw.githubusercontent.com/leciojor/blue/9528b81db1c5f891b7e209e602cd8f86b410a4fe/src/components/imgs/Blue%20INK%20(6).svg' },
        { id: 2, name: 'Printer Model B', description: 'Compact, energy-efficient printer for home offices.', image: 'https://raw.githubusercontent.com/leciojor/blue/9528b81db1c5f891b7e209e602cd8f86b410a4fe/src/components/imgs/Blue%20INK%20(6).svg' },
        { id: 3, name: 'Printer Model C', description: 'Professional-grade printer with advanced color management.', image: 'https://raw.githubusercontent.com/leciojor/blue/9528b81db1c5f891b7e209e602cd8f86b410a4fe/src/components/imgs/Blue%20INK%20(6).svg' },
        { id: 4, name: 'Printer Model D', description: 'Large format printer for posters and banners.', image: 'https://raw.githubusercontent.com/leciojor/blue/9528b81db1c5f891b7e209e602cd8f86b410a4fe/src/components/imgs/Blue%20INK%20(6).svg' },
        { id: 5, name: 'Printer Model E', description: 'All-in-one printer with scanning and faxing capabilities.', image: 'https://raw.githubusercontent.com/leciojor/blue/9528b81db1c5f891b7e209e602cd8f86b410a4fe/src/components/imgs/Blue%20INK%20(6).svg' },
        { id: 6, name: 'Printer Model F', description: 'All-in-one printer with scanning and faxing capabilities.', image: 'https://raw.githubusercontent.com/leciojor/blue/9528b81db1c5f891b7e209e602cd8f86b410a4fe/src/components/imgs/Blue%20INK%20(6).svg' },
    ];

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="Impressoras" className='service'>
            <div className="scroll-container">
                <button className="scroll-button left" onClick={() => scroll('left')}>&lt;</button>
                <div className="printer-container" ref={scrollContainerRef}>
                    {printers.map((printer) => (
                        <div key={printer.id} className={`printer-item ${hoveredElement === printer.id ? 'hovered3' : ''}`}
                        onMouseEnter={() => setHoveredElement(printer.id)}
                        onMouseLeave={() => setHoveredElement(null)}>
                                <h3>{printer.name}</h3>
                                <img src={printer.image} alt={printer.name} className="printer-image" />
                            <button className='print-info' onClick={() => setSelectedPrinter(printer)}>Info</button>
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={() => scroll('right')}>&gt;</button>
            </div>

            {selectedPrinter && (
                <div className="popup-overlay" onClick={() => setSelectedPrinter(null)}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <h3>{selectedPrinter.name}</h3>
                        <p>{selectedPrinter.description}</p>
                        <button className="print-info" onClick={() => setSelectedPrinter(null)}>Fechar</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Service;
