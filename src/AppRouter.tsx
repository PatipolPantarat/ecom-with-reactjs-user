// Routes
import Home from "./layouts/MainLayout";
import Products from "./components/contents/products/products";
import SetSpec from "./components/contents/setspec";
import Cart from "./components/contents/cart";
import NotFound from "./components/contents/notfound";

import { Routes, Route, Navigate } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
// import { useAuth } from "./context/AuthContext";

const AppRouter = () => {
  // const { isAuthenticated } = useAuth();
  return (
    <Routes>
      {/* {!isAuthenticated && (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <Login />}
      />
      <Route element={<ProtectedRoute requiredRole="admin" />}>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<AllProducts />} />
            <Route path="add" element={<AddProducts />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="categories" element={<Categories />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Route> */}

      <Route path="/products" element={<Home />}>
        <Route index element={<Products />} />
        <Route path="/products/setspec" element={<SetSpec />} />
        <Route path="/products/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to={<Home />} />} />
    </Routes>
  );
};

export default AppRouter;
