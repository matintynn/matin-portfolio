import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation(); // Get the current pathname

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [pathname]); // Run this effect whenever the pathname changes

    return null; // This component doesn't render anything
}

export default ScrollToTop;
