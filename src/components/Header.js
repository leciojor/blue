import React, { useState } from 'react';

const Header = () => {
  const [hoveredElement, setHoveredElement] = useState(null);

  return (
    <header className="transparent-header">
      <div
        className={`logo ${hoveredElement === 'logo' ? 'hovered' : ''}`}
        onMouseEnter={() => setHoveredElement('logo')}
        onMouseLeave={() => setHoveredElement(null)}
      >
        <img src="logo.png" alt="Logo" />
      </div>
      <nav className="nav-container">
        {['Sobre nós', 'Impressoras', 'Perguntas frequentes'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={hoveredElement === item ? 'hovered' : ''}
            onMouseEnter={() => setHoveredElement(item)}
            onMouseLeave={() => setHoveredElement(null)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>
      <div
        className={`login-button ${hoveredElement === 'login' ? 'hovered' : ''}`}
        onMouseEnter={() => setHoveredElement('login')}
        onMouseLeave={() => setHoveredElement(null)}
      >
        <button className="login-button" onClick={() => window.location.href = 'http://example.com'}>
            <img src="https://raw.githubusercontent.com/leciojor/blue/main/src/components/imgs/logo-wa.png" class="whats" />           
        </button>
      </div>
    </header>
  );
};

export default Header;
