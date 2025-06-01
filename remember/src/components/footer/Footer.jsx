import React, {forwardRef} from "react";
import "./Footer.scss";

const Footer = forwardRef((props, ref) => {
    return (
        <footer className="footer" ref={ref}>
            <div className="footer__content">
                <p>© 2025 Памʼятай</p>
                <p>
                    <a href="mailto:info@pamyatay.com">info@pamyatay.com</a>
                </p>
            </div>
        </footer>
    );
});

export default Footer;
