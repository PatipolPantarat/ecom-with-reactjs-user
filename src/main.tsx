import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import { CartProvider } from "./context/CartContext.tsx";

// Layout
// import App from "./App.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import AccountLayout from "./layouts/AccountLayout.tsx";
import SetSpecLayout from "./layouts/SetSpecLayout.tsx";
import DetailLayout from "./layouts/DetailLayout.tsx";
import CartLayout from "./layouts/CartLayout.tsx";

// Contents
import Login from "./components/contents/login.tsx";
import Register from "./components/contents/register.tsx";
import Products from "./components/contents/products/products.tsx";
import MyProfile from "./components/contents/account/myprofile.tsx";
import MyAddress from "./components/contents/account/myaddress.tsx";
import MyFavorites from "./components/contents/account/myfavorites.tsx";
import MyPurchases from "./components/contents/account/mypurchases.tsx";
import ProtectedRoute from "./utils/protectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "/setspec",
        element: <SetSpecLayout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <CartLayout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/detail",
        element: <DetailLayout />,
      },
      {
        path: "/account",
        element: (
          <ProtectedRoute>
            <AccountLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "profile",
            element: <MyProfile />,
          },
          {
            path: "address",
            element: <MyAddress />,
          },
          {
            path: "favorites",
            element: <MyFavorites />,
          },
          {
            path: "purchases",
            element: <MyPurchases />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
