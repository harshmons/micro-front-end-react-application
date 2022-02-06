import React, { useEffect, useRef } from "react";
import { mount } from "header/HeaderModule";
import "./Header.css";
const HeaderModule = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current); 
  }, []);

  
  return <div className="header-module" ref={ref} />;
};

export default HeaderModule;