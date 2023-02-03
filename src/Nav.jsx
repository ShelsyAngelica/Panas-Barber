import { useEffect, useState } from "react";
import Menu from "./Menu";

function Nav() {

  const [isOpen, setIsOpen] = useState (true)

         
    const toggleOpen = () => {

      setIsOpen(!isOpen);
        console.log(isOpen)
    }

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6 ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            width="100"
            height="54"
            alt="he"
            src="/src/assets/Imagen1.png"
          >
          </img>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleOpen} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

         {isOpen && <Menu />}
      </nav>
    </div>
  );
}

export default Nav;
