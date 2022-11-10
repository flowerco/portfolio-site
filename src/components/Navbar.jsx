import { useContext } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { SidebarContext } from '..';

export const Navbar = ({ sidebarOpen, toggleSidebarOpen }) => {

  return (
    <nav className="fixed top-0 left-0 w-full py-8 px-12 z-50 flex justify-start items-center">
    <button
      onClick={toggleSidebarOpen}
      className={`flex space-x-2 items-center rounded-md py-2 px-4 text-xl font-bold ${sidebarOpen ? 'bg-customBlue text-white' : 'bg-customYellow text-black'}`}
    >
      <TiThMenu />
      <p>|</p>
      <p>MENU</p>
    </button>
    </nav>
  )
}