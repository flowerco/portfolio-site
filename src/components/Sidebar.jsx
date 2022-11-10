import { Link, useLocation } from 'react-router-dom';
import { BsCalendarEvent } from 'react-icons/bs';
import { BiHome } from 'react-icons/bi';
import { AiOutlineStar, AiOutlineUser } from 'react-icons/ai';
import './Sidebar.css';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { FirstPersonControls } from '@react-three/drei';
import { useContext } from 'react';
import { SidebarContext } from '..';

const sidebarNavItems = [
  {
    display: 'Home',
    icon: <BiHome />,
    to: '/',
    section: ''
  },
  {
    display: 'Applications',
    icon: <AiOutlineStar />,
    to: '/apps',
    section: 'apps'
  },
  {
    display: 'Specialist Projects',
    icon: <BsCalendarEvent />,
    to: '/projects',
    section: 'projects'
  },
  {
    display: 'About Me',
    icon: <AiOutlineUser />,
    to: '/about',
    section: 'about'
  },
]

export const Sidebar = ({ sidebarOpen }) => {

  // TODO: The initial active index should be the value of round(scrollY/sizes.height)
  const [activeIndex, setActiveIndex] = useState(0);  
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector('.sidebar-menu-item');
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // Change active index
  useEffect(() => {
    const currPath = window.location.pathname.split('/')[1];
    const activeItem = sidebarNavItems.findIndex(item => item.section === currPath);
    setActiveIndex(currPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className={`sidebar menu-transition ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-logo"></div>
      <div ref={sidebarRef} className="sidebar-menu">
        <div 
          ref={indicatorRef}
          className="sidebar-menu-indicator"
          style={{
            transform: `translateX(-50%) translateY(${activeIndex*stepHeight}px)`
          }}
        ></div>
        {
          sidebarNavItems.map((item, index) => {
            return (
            <Link to={item.to} key={index}>
              <div className={`sidebar-menu-item ${activeIndex === index ? 'active' : ''}`} key={index}>
                <div className="sidebar-menu-item-icon">
                  {item.icon}
                </div>
                <div className="sidebar-menu-item-text">
                  {item.display}
                </div>
              </div>
            </Link>
            )
          })
        }
        
      </div>
    </div>
  )
}