import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Header = () => {
    return (
        <header>
            <div class="header-content">
                <div class="logo">
                    <img src="" alt="Logo" />
                </div>
                <nav class="nav-container">
                    <a href="#home">Home</a>
                    <a href="#about">Sobre nós</a>
                    <a href="#ser">Nosso serviço</a>
                    <a href="#faq">Perguntas frequents</a>
                </nav>
                <div class="login-button">
                    <a href="#login">Login</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
