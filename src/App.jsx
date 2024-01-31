import React, { useEffect } from "react";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import MyAddresses from "./pages/MyAddresses";
import Protected from "./features/auth/components/Protected";
import { useDispatch, useSelector } from "react-redux";
import {
  checkAuthAsync,
  selectLoggedInUser,
  selectUserChecked,
} from "./features/auth/authSlice";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import OrderSuccess from "./pages/OrderSuccess";
import MyOrders from "./pages/MyOrders";
import MyAccount from "./pages/MyAccount";
import MyProfile from "./components/MyProfile";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import MenProducts from "./pages/MenProducts";
import WomenProducts from "./pages/WomenProducts";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";
import AdminProductListPage from "./pages/AdminProductListPage";
import AdminProductDetailPage from "./pages/AdminProductDetailPage";
import AdminProductForm from "./features/admin/components/AdminProductForm";
import AdminProductEditForm from "./features/admin/components/AdminProductEditForm";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminProductListPage />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form",
    element: (
      <ProtectedAdmin>
        <AdminProductForm />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form/edit/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductEditForm />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/productdetail/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/all-products",
    element: <Products />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/all-products/productdetail/:id",
    element: <ProductDetail />,
  },
  {
    path: "/user-cart",
    element: (
      <Protected>
        <Cart />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout />
      </Protected>
    ),
  },
  {
    path: "/myaddresses",
    element: (
      <Protected>
        <MyAddresses />
      </Protected>
    ),
  },
  {
    path: "/ordersuccess/:id",
    element: (
      <Protected>
        <OrderSuccess />
      </Protected>
    ),
  },
  {
    path: "/myorders",
    element: (
      <Protected>
        <MyOrders />
      </Protected>
    ),
  },
  {
    path: "/myaccount",
    element: (
      <Protected>
        <MyAccount />
      </Protected>
    ),
  },
  {
    path: "/myprofile",
    element: (
      <Protected>
        <MyProfile />
      </Protected>
    ),
  },
  {
    path: "/men-products",
    element: <MenProducts />,
  },
  {
    path: "/women-products",
    element: <WomenProducts />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms",
    element: <TermsAndConditions />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const userChecked = useSelector(selectUserChecked);

  useEffect(() => {
    dispatch(checkAuthAsync());
  }, []);

  useEffect(() => {
    if (user !== null) {
      dispatch(fetchItemsByUserIdAsync());
      dispatch(fetchLoggedInUserAsync());
    }
  }, [dispatch, user]);

  return <div>{userChecked && <RouterProvider router={router} />}</div>;
}

export default App;
