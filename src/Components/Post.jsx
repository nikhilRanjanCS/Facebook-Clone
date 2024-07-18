import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";

const Post = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full w-10 h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
          />
          <div className="">
            <p className="font-medium">Nikhil Ranjan</p>
            <p className="text-xs text-gray-500">
              {new Date().toLocaleString()}
            </p>
          </div>
        </div>
        <p className="py-4">Lorem ipsum</p>
      </div>
      {/* if any image */}
      <div className="relative h-60 md:h-96 bg-white">
        <img
          src="https://www.facebook.com/photo?fbid=498277909417722&set=a.176193884959461https://cdn.pixabay.com/photo/2014/08/26/21/48/dollars-428047_960_720.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center bg-white p-2">
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <AiOutlineLike className="h-6" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaRegComment className="h-6" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <PiShareFatThin className="h-6" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
