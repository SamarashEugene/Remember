import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="header">
            <div className="header__logo">Памʼятай</div>

            <button className="header__burger" onClick={toggleMenu}>
                <span className="burger-line" />
                <span className="burger-line" />
                <span className="burger-line" />
            </button>

            <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Головна</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>Про нас</Link>
                <Link to="/products" onClick={() => setMenuOpen(false)}>Продукти</Link>
                <Link to="/memorials" onClick={() => setMenuOpen(false)}>Памʼятки</Link>
                <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Контакти</Link>
                <button className="header__btn">Увійти</button>
            </nav>
        </header>
    );
};

export default Header;
