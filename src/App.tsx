import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import MainLayout from "./layouts/MainLayout";
import Products from "./components/contents/products/products";
import SetSpec from "./components/contents/setspec/setspec";
import AccountLayout from "./layouts/AccountLayout";
import ProtectedRoute from "./utils/protectedRoute";
import MyProfile from "./components/contents/account/myprofile";
import MyAddress from "./components/contents/account/myaddress";
import MyFavorites from "./components/contents/account/myfavorites";
import MyPurchases from "./components/contents/account/mypurchases";
import Cart from "./components/contents/cartitem";
import NotFound from "./components/contents/notfound";
import Login from "./components/contents/login";
import Register from "./components/contents/register";

function App() {
  return <></>;
}

export default App;
