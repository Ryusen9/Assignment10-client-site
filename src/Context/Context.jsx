import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const ContextProvider = createContext();

const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const signOutUser = () => {
      setLoading(true);
      return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setLoading(true);
            if (authUser) {
                setUser(authUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])
  const info = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
  };

  return (
    <ContextProvider.Provider value={info}>
      {children}
    </ContextProvider.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;
