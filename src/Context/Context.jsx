import { createContext, useContext } from "react";
import PropTypes from "prop-types";

export const ContextProvider = createContext();

const Context = ({ children }) => {
  const info = {
    name: "john",
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

export const useAppContext = () => useContext(ContextProvider);
