import { TiThMenu } from 'react-icons/ti';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-8 flex justify-start items-center">
    <button className="flex space-x-2 items-center bg-customYellow rounded-md py-2 px-4 text-xl font-bold">
      <TiThMenu />
      <p>|</p>
      <p>MENU</p>
    </button>
    </nav>
  )
}