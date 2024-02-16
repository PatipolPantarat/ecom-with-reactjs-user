import { createContext, useContext, useState } from "react";
import { IUser, IProduct } from "../utils/interface";
import { User } from "../utils/mockup/user";

interface AuthContextType {
  userData: IUser;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  removeFav: (product: IProduct) => void;
  updateUserFav: (isFav: boolean, product: IProduct) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<IUser>(User);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = () => {
    setUserData(User);
    setIsAuthenticated(true);
    console.log("userData:", userData);
  };
  const logout = () => {
    setUserData({} as IUser);
    setIsAuthenticated(false);
    console.log("userData:", userData);
  };
  const removeFav = (product: IProduct) => {
    setUserData({
      ...userData,
      userFav: userData.userFav.filter((item) => item !== product),
    });
  };
  const updateUserFav = (isFav: boolean, product: IProduct) => {
    // if (!isAuthenticated) {
    //   return;
    // }
    if (isFav) {
      setUserData({
        ...userData,
        userFav: [...userData.userFav, product],
      });
    } else {
      setUserData({
        ...userData,
        userFav: userData.userFav.filter((item) => item !== product),
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        userData,
        isAuthenticated,
        login,
        logout,
        removeFav,
        updateUserFav,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
