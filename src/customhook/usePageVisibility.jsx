import { useEffect } from 'react';

export const usePageVisibility = () => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        document.title = 'Portfolio | Ankit Bhujeja';
        changeFavicon('/images/fav.png');
      } else {
        document.title = 'Come Back To Portfolio';
        changeFavicon('/images/fav2.png');
      }
    };

    const changeFavicon = (iconURL) => {
      const favicon = document.getElementById('favicon');
      if (favicon) {
        favicon.href = iconURL;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
};
