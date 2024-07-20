import React, { useState } from 'react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is your return policy?",
            answer: "Our return policy allows you to return products within 30 days of purchase with a full refund."
        },
        {
            question: "How do I track my order?",
            answer: "You can track your order by logging into your account and visiting the 'Orders' section."
        },
        {
            question: "Do you offer customer support?",
            answer: "Yes, we offer 24/7 customer support. You can reach us via email, phone, or live chat."
        }
    ];

    return (
        <section id="faq">
            <h2>Frequently Asked Questions</h2>
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
