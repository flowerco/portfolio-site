import { Navbar } from "./components/Navbar";
import { ThreeJsModel } from "./threejs/three";
import { Sidebar } from "./components/Sidebar";
import './App.css';
import { createContext, useContext, useState } from "react";
import { SidebarContext } from "./index";
import { MainPage } from "./components/MainPage";

function App () {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
      <div className="wrapper">
        <Navbar sidebarOpen={sidebarOpen} toggleSidebarOpen={toggleSidebarOpen}/>

        <div className="experience">
          <ThreeJsModel />
        </div>

        <div className="page">   
          <MainPage sidebarOpen={sidebarOpen}/>
          <Sidebar sidebarOpen={sidebarOpen}/>
        </div>
      </div>
  )
}

export default App;
