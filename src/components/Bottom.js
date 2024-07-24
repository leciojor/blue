import React from 'react';

const Bottom = () => {
    return (
        <section id="bottom">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <p>123 Main Street, Anytown, USA</p>
                <p>Email: info@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095896!2d144.95565131590454!3d-37.81732797975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a8f74c4db28!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1597626351161!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                ></iframe>
            </div>
        </section>
    );
};

export default Bottom;
