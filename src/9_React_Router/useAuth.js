import { createContext, useState, useContext } from 'react';
import text from '../translations/es/global.json';

/*
  TUTORIAL: https://youtu.be/iPNt12IdbCU?t=4985
*/

const AuthContext = createContext();

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <h2>{text['react-router-page-useauth']}</h2>
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
    </div>
  );
};
