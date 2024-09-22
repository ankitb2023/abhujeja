import { useLocation, useNavigate } from 'react-router-dom';

export const useHandleNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigation = (id) => {
    if (location.pathname !== '/') {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return handleNavigation;
};
