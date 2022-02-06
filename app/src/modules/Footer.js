import React, { useEffect, useRef } from "react";
import { mount } from "footer/footerModule";
import "./Footer.css";

const HeaderModule = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);
 
  return <div className="footer-module" ref={ref} />;
};

export default HeaderModule;