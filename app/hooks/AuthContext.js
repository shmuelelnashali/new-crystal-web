"use client";
import React, { createContext, useContext, useState } from "react";
// Create a context for authentication
const AuthContext = createContext();
// Custom hook to access the AuthContext
export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
