import React from "react";

const Contacts = ({ name, src, status }) => {
  return (
    <div className="flex items-center space-x-2 py-2 pl-1 hover:bg-gray-200 rounded-l-xl cursor-pointer relative">
      <img
        src={src}
        // height={40}
        // width={40}
        className="rounded-full cursor-pointer h-10 w-10 object-cover"
      />
      <p className="hidden sm:inline-flex text-sm font-medium">{name}</p>
      {status === "online" && (
        <div className="bg-green-500 h-3 w-3 rounded-full absolute left-6 bottom-1 border-2"></div>
      )}
    </div>
  );
};

export default Contacts;
