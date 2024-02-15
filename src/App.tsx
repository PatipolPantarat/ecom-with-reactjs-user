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
  return (
    // <AuthProvider>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<MainLayout />}>
    //         <Route index element={<Products />} />
    //         <Route path="setspec" element={<SetSpec />} />
    //         <Route element={<ProtectedRoute />}>
    //           <Route path="cart" element={<Cart />} />
    //           <Route path="account" element={<AccountLayout />}>
    //             <Route index path="profile" element={<MyProfile />} />
    //             <Route path="address" element={<MyAddress />} />
    //             <Route path="favorites" element={<MyFavorites />} />
    //             <Route path="purchases" element={<MyPurchases />} />
    //           </Route>
    //         </Route>
    //         <Route path="login" element={<Login />} />
    //         <Route path="register" element={<Register />} />
    //         <Route path="*" element={<NotFound />} />
    //       </Route>
    //     </Routes>
    //   </Router>
    // </AuthProvider>
  );
}

export default App;
