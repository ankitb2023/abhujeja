import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
 
const useScrollReveal = (selector, config) => {
    const location = useLocation();
  useEffect(() => {
    const defaultConfig = {
      origin: 'top',
      distance: '80px',
      duration: 1000,
      reset: true,
    };
    
    ScrollReveal().reveal(selector, { ...defaultConfig, ...config });
 
    return () => {
      ScrollReveal().destroy();
    };
  }, [selector, config,location]);  
};
 
export default useScrollReveal;