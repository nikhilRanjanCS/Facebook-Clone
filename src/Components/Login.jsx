import React from "react";
import { useAuth } from "../AuthContext";

const Login = () => {
  const { currentUser, login, logout } = useAuth();

  return (
    <div className="flex flex-col items-center mx-auto">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/93/Facebook_logo_%282023%29.svg"
        alt="facebook"
        height={240}
        width={240}
        className="mb-20 mt-24"
      />
      <a
        className="px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white"
        onClick={login}
      >
        Login
      </a>
    </div>
  );
};

export default Login;
