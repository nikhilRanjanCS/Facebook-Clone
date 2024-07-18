import React, { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { MdOndemandVideo } from "react-icons/md";
import { RiStoreLine } from "react-icons/ri";
import { PiGameControllerLight } from "react-icons/pi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { RiMessengerFill } from "react-icons/ri";
import { HiBell } from "react-icons/hi2";
import { MdOutlineExpandMore } from "react-icons/md";
import { AuthContext } from "../AuthContext";

const Header = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      <div className="flex min-w-fit">
        <img
          style={{ display: "block", margin: "auto" }}
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
          alt="Facebook Logo"
          height={40}
          width={40}
        />

        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
          <IoIosSearch size={20} />
          <input
            type="text"
            placeholder="Search Facebook"
            className="bg-gray-100 hidden lg:inline-flex bg-transparent focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100  cursor-pointer">
            <CiHome className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100  cursor-pointer">
            <CiFlag1 className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100  cursor-pointer">
            <MdOndemandVideo className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100  cursor-pointer">
            <RiStoreLine className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100  cursor-pointer">
            <PiGameControllerLight className="mx-auto" size={25} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end min-w-fit space-x-2">
        <img
          style={{ display: "block", margin: "auto" }}
          src={currentUser.photoURL}
          alt="Facebook Logo"
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
          onClick={logout}
        />
        <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">
          {currentUser.displayName.split(" ")[0]}
        </p>
        <BsFillGrid3X3GapFill
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <RiMessengerFill
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <HiBell
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <MdOutlineExpandMore
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
      </div>
    </div>
  );
};

export default Header;
