import { Navbar } from "./components/Navbar";
import { ThreeJsModel } from "./threejs/three";
import { Sidebar } from "./components/Sidebar";
import { useEffect, useState } from "react";
import { MainPage } from "./components/MainPage";
import { useRef } from 'react';
import './App.css';

function App () {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  }



  // TODO: Could this all be one ref, containing an array?
  const homeRef = useRef(null);
  const appRef = useRef(null);
  const projRef = useRef(null);
  const algoRef = useRef(null);
  const aboutRef = useRef(null);

  const sectionRefs = [homeRef, appRef, projRef, algoRef, aboutRef];

  return (
      <div className='wrapper'>
        <Navbar sidebarOpen={sidebarOpen} toggleSidebarOpen={toggleSidebarOpen}/>

        <div className="experience">
          <ThreeJsModel />
        </div>

        <div className="page">   
          <MainPage sidebarOpen={sidebarOpen} sectionRefs={sectionRefs}/>
          <Sidebar sidebarOpen={sidebarOpen} sectionRefs={sectionRefs} toggleSidebarOpen={toggleSidebarOpen}/>
        </div>
      </div>
  )
}

export default App;
