import { Link } from "react-router-dom";
import { FaHome, FaReact, FaRegLightbulb, FaUser } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import "./Sidebar.css";
import { useState, useRef } from "react";
import { useEffect } from "react";

const sidebarNavItems = [
  {
    display: "Home",
    icon: <FaHome />,
    to: "/",
    section: "",
  },
  {
    display: "Group Projects",
    icon: <SiTypescript />,
    to: "/apps",
    section: "apps",
  },
  {
    display: "Solo Projects",
    icon: <FaReact />,
    to: "/projects",
    section: "projects",
  },
  {
    display: "Algorithms",
    icon: <FaRegLightbulb />,
    to: "/algos",
    section: "algos",
  },
  {
    display: "About Me",
    icon: <FaUser />,
    to: "/about",
    section: "about",
  },
];

export const Sidebar = ({ sidebarOpen, toggleSidebarOpen, sectionRefs }) => {
  // TODO: The initial active index should be the value of round(scrollY/sizes.height)
  // The useEffect should have a dependency on this value.
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);

  const sidebarRef = useRef();
  const indicatorRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem =
        sidebarRef.current.querySelector(".sidebar-menu-item");
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
      // If the sideBar was just opened then make sure the highlighted menu item
      // aligns with the current position on the page.
      if (sidebarOpen) {
        const scrollDist = Math.round(window.scrollY / window.innerHeight);
        setActiveIndex(scrollDist);
      }
    }, 50);
  }, [sidebarOpen]);

  // Change active index on click
  const handleClick = (index) => {
    setActiveIndex(index);
    toggleSidebarOpen();
    scrollToSection(sectionRefs[index]);
  }

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className={`sidebar menu-transition ${sidebarOpen ? "open" : ""}`}>
      <div className="sidebar-logo"></div>
      <div ref={sidebarRef} className="sidebar-menu">
        <div
          ref={indicatorRef}
          className="sidebar-menu-indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) => {
          return (
            <Link
              key={index}
              onClick={(e) => {
                e.preventDefault();
                handleClick(index);
              }}
            >
              <div
                className={`sidebar-menu-item ${
                  activeIndex === index ? "active" : ""
                }`}
                key={index}
              >
                <div className="sidebar-menu-item-icon">{item.icon}</div>
                <div className="sidebar-menu-item-text">{item.display}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
