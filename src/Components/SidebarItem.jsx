import React from "react";

const SidebarItem = ({ Icon, value }) => {
  return (
    <div className="flex items-center space-x-2 py-2 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
      <Icon className="h-8 w-8 text-blue-500"></Icon>
      <p className="hidden sm:inline-flex font-medium">{value}</p>
    </div>
  );
};

export default SidebarItem;
