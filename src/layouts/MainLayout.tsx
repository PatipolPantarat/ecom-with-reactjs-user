import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../utils/protectedRoute";
import { useAuth } from "../context/AuthContext";

import { Navbar } from "../components/navbar";
import NotFound from "../components/contents/notfound";
import Products from "../components/contents/products/products";
import SetSpec from "../components/contents/setspec";
import AccountLayout from "./AccountLayout";
import Cart from "../components/contents/cart";
import Register from "../components/contents/register";
import Login from "../components/contents/login";
import UserProfile from "../components/contents/account/userprofile";

export default function MainLayout() {
  const { isAuthenticated } = useAuth();
  return (
    <section className="flex flex-col">
      <div className="max-h-16 fixed w-full z-10">
        <Navbar />
      </div>
      <div className="mt-16 pt-5 min-h-screen ">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/setspec" element={<SetSpec />} />
          {/* <Route
            path="/account"
            element={
              <ProtectedRoute>
                <AccountLayout />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/account/*"
            element={
              <ProtectedRoute>
                <AccountLayout>
                  <Routes>
                    <Route index element={<Navigate to="/account/profile" />} />
                    <Route path="profile" element={<UserProfile />} />
                  </Routes>
                </AccountLayout>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/register"
            element={isAuthenticated ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}
