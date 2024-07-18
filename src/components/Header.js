import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Header = () => {
    const [hoveredElement, setHoveredElement] = useState(null);
  
    // Function to generate animation styles based on the hovered element
    const animateElement = (element) => useSpring({
      transform: hoveredElement === element ? 'scale(1.1)' : 'scale(1)',
      config: { tension: 300, friction: 10 },
    });
  
    return (
      <header className="transparent-header">
        <animated.div
          className="logo"
          style={animateElement('logo')}
          onMouseEnter={() => setHoveredElement('logo')}
          onMouseLeave={() => setHoveredElement(null)} 
        >
          <img src="logo.png" alt="Logo" />
        </animated.div>
        <nav className="nav-container">
          {['home', 'about', 'service', 'faq'].map((item) => (
            <animated.a
              key={item}
              href={`#${item}`}
              style={animateElement(item)}
              onMouseEnter={() => setHoveredElement(item)}
              onMouseLeave={() => setHoveredElement(null)} 
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </animated.a>
          ))}
        </nav>
        <animated.div
          className="login-button"
          style={animateElement('login')}
          onMouseEnter={() => setHoveredElement('login')}
          onMouseLeave={() => setHoveredElement(null)} // Reset the state when the mouse leaves
        >
          <a href="#login">Login</a>
        </animated.div>
      </header>
    );
  };
  
  export default Header;
  