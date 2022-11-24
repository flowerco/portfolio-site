import { Navbar } from "./components/Navbar";
import { ThreeJsModel } from "./threejs/three";
import { Sidebar } from "./components/Sidebar";
import { useEffect, useState } from "react";
import { MainPage } from "./components/MainPage";
import { useRef } from 'react';
import './App.css';
import { useLoading } from "./state/LoadingContext";
import { CustomLoader } from './components/CustomLoader';

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

  // Use the application level 'loading progress' state when deciding what to show.
  const { progress } = useLoading();

  // We don't want the loader to disappear immediately and give a weird flickering effect
  // Let's keep it there for 2 secs minimum
  const [showtime, setShowtime] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowtime(true);
    }, 2000);
  }, [])

  return ( 
      <div className={'wrapper'}>
        <Navbar sidebarOpen={sidebarOpen} toggleSidebarOpen={toggleSidebarOpen}/>

          {/* Overlay to show until the Threejs models load */}
          { (progress < 100 || !showtime) &&
              <div className="h-[100vh] w-full fixed top-0 left-0 z-50 backdrop-blur-2xl">
                <CustomLoader progress={progress}/> 
              </div> 
          }

          <div className="experience">
            <ThreeJsModel />
          </div>

          <div className='page'>   
            <MainPage sidebarOpen={sidebarOpen} sectionRefs={sectionRefs}/>
            <Sidebar sidebarOpen={sidebarOpen} sectionRefs={sectionRefs} toggleSidebarOpen={toggleSidebarOpen}/>
          </div>
      </div>
  )
}

export default App;
