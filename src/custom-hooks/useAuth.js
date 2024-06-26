import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";

const useAuth = () => {
  const [currentUser, setCurrenUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrenUser(user);
      } else {
        setCurrenUser(null);
      }
    });
  });

  return {
    currentUser,
  };
};

export default useAuth;
