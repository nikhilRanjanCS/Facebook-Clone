import React, { useContext } from "react";
import { ImUsers } from "react-icons/im";
import SidebarItem from "./SidebarItem";
import { MdGroups } from "react-icons/md";
import { MdOndemandVideo, MdOutlineExpandMore } from "react-icons/md";
import { RiMemoriesLine, RiStoreLine } from "react-icons/ri";
import { AuthContext } from "../AuthContext";

const SideBar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
      <div className="flex items-center space-x-2 py-3 pl-4 pr-2 hover:bg-gray-200 rounded-l-xl cursor-pointer ">
        <img
          style={{ display: "block" }}
          src={currentUser.photoURL}
          alt="Facebook Logo"
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium ml-0">
          {currentUser.displayName}
        </p>
      </div>
      <SidebarItem Icon={ImUsers} value="Friends" />
      <SidebarItem Icon={MdGroups} value="Groups" />
      <SidebarItem Icon={RiStoreLine} value="Marketplace" />
      <SidebarItem Icon={MdOndemandVideo} value="Watch" />
      <SidebarItem Icon={RiMemoriesLine} value="Memories" />
      <SidebarItem Icon={MdOutlineExpandMore} value="See more" />
    </div>
  );
};

export default SideBar;
