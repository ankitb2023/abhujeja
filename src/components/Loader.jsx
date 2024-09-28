import React, { useEffect, useState } from 'react';
import '../styles/Loader.css';

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3200);

    return () => clearTimeout(fadeOutTimer);
  }, []);

  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      <img draggable="false" src="/images/preloader3.gif" alt="Loader" />
    </div>
  );
};

export default Loader;
