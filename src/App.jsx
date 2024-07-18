import "./App.css";
import React from "react";
import { useAuth } from "./AuthContext";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Login from "./Components/Login";
import Feed from "./Components/Feed";

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
        {/* right sidebar */}
      </main>
    </>
  );
}

export default App;
