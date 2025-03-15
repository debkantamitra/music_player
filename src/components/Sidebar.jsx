import { useState } from "react";
import { navLinks } from "../assets/constants";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { logo } from "../assets";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({ handleClick }) => {
  return (
    <div className="mt-10 ml-4">
      {navLinks.map((link, i) => (
        <NavLink
          key={i}
          to={link.to}
          className="flex justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400 w-full"
          onClick={() => handleClick?.()}
          end
        >
          <link.icon className="w-6 h-6 mr-2" />
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

const Sidebar = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt={"logo"} className="w-full h-14 object-contain" />
        <NavLinks />
      </div>

      <div className="absolute md:hidden top-6 right-3 z-50">
        {isMobileSidebarOpen ? (
          <RiCloseLine
            onClick={() => setIsMobileSidebarOpen(false)}
            className="w-8 h-8 text-white cursor-pointer"
          />
        ) : (
          <HiOutlineMenu
            className="w-8 h-8 text-white mr-2"
            onClick={() => setIsMobileSidebarOpen(true)}
          />
        )}
      </div>
      <div
        className={`fixed md:hidden top-0 left-0 w-2/3 h-full bg-gradient-to-tl from-white/10 to-[#483d8b] p-6 backdrop-blur-lg
        ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out z-40`}
      >
        <img src={logo} alt={"logo"} className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setIsMobileSidebarOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
