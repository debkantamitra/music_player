import { useState } from "react";
import { navLinks } from "../assets/constants";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { logo } from "../assets";

const NavLinks = ({ handleClick }) => {
  return (
    <div className="mt-10 space-x-2">
      {navLinks.map((link, i) => (
        <NavLink
          key={i}
          to={link.to}
          className="flex justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
          onClick={() => handleClick?.()}
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
    </>
  );
};

export default Sidebar;
