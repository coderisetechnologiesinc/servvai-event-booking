import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch (e) {
      console.log(e);
    }
  }, [pathname]);

  return null;
};

export default ScrollManager;
