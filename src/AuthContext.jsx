// src/AuthContext.js

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  auth,
  provider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "./firebase";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const login = () => signInWithPopup(auth, provider);
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
