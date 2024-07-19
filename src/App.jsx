import "./App.css";
import React from "react";
import { useAuth } from "./AuthContext";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Login from "./Components/Login";
import Feed from "./Components/Feed";
import RightSideBar from "./Components/RightSideBar";

function App() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Login />;
  }

  return (
    <>
      <Header />
      <main className="flex bg-gray-100">
        <SideBar />
        <Feed />
        <RightSideBar />
      </main>
    </>
  );
}

export default App;
