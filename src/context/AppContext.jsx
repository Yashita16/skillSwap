import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const  AppContext = createContext();



export const AppContextProvider = ({ children }) => {
  const [user , setUser ] =useState(true);
  const [showUserLogin , setShowUserLogin]=useState(false);
  const navigate = useNavigate();
  const value = { user, setUser, navigate , showUserLogin , setShowUserLogin };


  return (
    <AppContext.Provider value={value}>
      {children}

    </AppContext.Provider>
  )

}

export const useAppContext = () => {
  const context =useContext(AppContext)
  if(!context){
    throw new Error("useAppContext must be used inside AppContextProvider")
  }
  return context;
}

