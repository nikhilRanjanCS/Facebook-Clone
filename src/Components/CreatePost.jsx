import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../AuthContext";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";

const CreatePost = () => {
  const { currentUser } = useContext(AuthContext);
  const inputRef = useRef(null);
  const hiddenFileInputRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const handleSubmitPost = () => {
    hiddenFileInputRef.current.click();
  };
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImageToPost(e.target.result);
      };
    }
  };
  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className="flex p-4 space-x-2 items-center">
        <img
          style={{ display: "block" }}
          src={currentUser.photoURL}
          alt="Facebook Logo"
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 flex-grow font-medium focus:outline-none bg-gray-100 px-4"
            type="text"
            placeholder={`What's on your mind, ${
              currentUser.displayName.split(" ")[0]
            } ?`}
            inputRef={inputRef}
          />
          <button hidden></button>
        </form>
      </div>
      {imageToPost && (
        <div className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer">
          <img src={imageToPost} className="h-10 object-contain" />
        </div>
      )}
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <HiOutlineVideoCamera size={20} className="text-red-500" />
          <p className="font-semibold text-gray-600">Live video</p>
        </div>
        <div
          className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer"
          onClick={handleSubmitPost}
        >
          <IoMdPhotos size={20} className="text-green-500" />
          <p className="font-semibold text-gray-600">Photo/video</p>
          <input
            type="file"
            ref={hiddenFileInputRef}
            hidden
            accept="image/*"
            onChange={addImageToPost}
          />
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <BsEmojiSmile size={20} className="text-yellow-500" />
          <p className="font-semibold text-gray-600">Feeling/activity</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
