import { createContext, useState } from "react";

export const LoginContext = new createContext({
  user: null,
  setUser: () => {},
});

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};
