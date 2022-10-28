import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./../firebase";

const userContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  <userContext.Provider value={createUser}>{children}</userContext.Provider>;
};

export const UserAuth = () => {
  return useContext(userContext);
};
