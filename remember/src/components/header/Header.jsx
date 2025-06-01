import React, {forwardRef, useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

const Header = forwardRef((props, ref) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header ref={ref} className="header">
            <div className="header__logo">
                <Link to="/" onClick={() => setMenuOpen(false)}>Памʼятай</Link>
            </div>

            <button className="header__burger" onClick={toggleMenu}>
                <span className="burger-line"/>
                <span className="burger-line"/>
                <span className="burger-line"/>
            </button>

            <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Головна</Link>
                <Link to="/products" onClick={() => setMenuOpen(false)}>Продукти</Link>
                <Link to="/memorials" onClick={() => setMenuOpen(false)}>Памʼятки</Link>
                <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>Про нас</Link>
                <button className="header__btn">Увійти</button>
                <button className="header__btn">Реєстрація</button>
            </nav>
        </header>
    );
});

// const Header = ({ref}) => {
//
//
//     return (
//         <header className="header" ref={ref}>
//
//         </header>
//     );
// };

export default Header;
