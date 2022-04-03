import { useEffect } from 'react';
import './footer.css';

const Footer = () => {
    const currentYear = () => {
        const fullDate = new Date();
        return fullDate.getFullYear();
    }
    return (
        <footer>
            <p> &copy; {currentYear()} All Right Reserved </p>
        </footer>
    );
};

export default Footer;