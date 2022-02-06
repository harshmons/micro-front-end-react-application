import React, { useEffect, useRef } from "react";
import {mount} from "rightSidebar/rightSidebar";
import "./RightSidebar.css";

const RightSidebarModule = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);  
  }, []);   
  return <div className="right-sidebar-module" ref={ref} />;
};

export default RightSidebarModule;