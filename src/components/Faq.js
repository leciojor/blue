import React, { useState } from 'react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "orem ipsum dolor sit amet, consectetur adipiscing elit,?",
            answer: "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ."
        },
        {
            question: "orem ipsum dolor sit amet, consectetur adipiscing elit,?",
            answer: "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ."
        },
        {
            question: "orem ipsum dolor sit amet, consectetur adipiscing elit,?",
            answer: "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ."
        }
    ];


    return (
        <section id="Perguntas frequentes" className='faq'>
            <h1 class='faqh'>Perguntas frequentes</h1>
            <div className="faq-list">
                {faqData.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleAnswer(index)}>
                            {faq.question}
                        </div>
                        <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
