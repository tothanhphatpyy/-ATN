import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Box } from "zmp-ui";
import loadable from "@loadable/component";

import { useUser } from "@atom/user/useUser";
import { useAuth } from "@hooks/useAuth";
import { GlobalLoading } from "@components/common/global-loading";
import { ConfirmModal } from "@components/common/confirm-modal";
import { globalLoadingRef } from "@components/common/global-loading/GlobalLoading";
import { confirmModalRef } from "@components/common/confirm-modal/ConfirmModal";
import HeaderLayout from "@layouts/header/LayoutHeader";
import BottomNavigation from "@routes/BottomNavigation";

/*Pages */
const Home = loadable(() => import("@pages/home"));
const Category = loadable(() => import("@pages/category"));
const Cart = loadable(() => import("@pages/cart"));
const Product = loadable(() => import("@pages/product"));
const Search = loadable(() => import("@pages/search"));
const Profile = loadable(() => import("@pages/profile"));
const Address = loadable(() => import("@pages/address"));
const Affiliate = loadable(() => import("@pages/affiliate"));
const Wishlist = loadable(() => import("@pages/wishlist"));
const OrderHistory = loadable(() => import("@pages/order-history"));

/*Pages-components */
const Products = loadable(() => import("@pages/components/products"));
const Categories = loadable(() => import("@pages/components/categories"));
const Sliders = loadable(() => import("@pages/components/sliders"));
const Demo = loadable(() => import("@pages/demo/Demo"));

const ZaloRoutes = () => {
  const { userInfo } = useUser();
  const { loginZalo } = useAuth();

  useEffect(() => {
    if (!userInfo?.xid) loginZalo();
  }, []);

  return (
    <Box flex flexDirection="column" className="h-screen">
      <div className="bg-light dark__bg-1100 container-app">
        <GlobalLoading ref={globalLoadingRef} />
        <ConfirmModal ref={confirmModalRef} />
        <ToastContainer />
        <Routes>
          <Route element={<HeaderLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile/*" element={<ProfileRoutes />} />
            <Route path="/components/*" element={<ComponentRoutes />} />
          </Route>
          <Route path="*" element={<Navigate to="/errors/404" replace />} />
        </Routes>
        <BottomNavigation />
      </div>
    </Box>
  );
};

export default ZaloRoutes;

const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="address" element={<Address />} />
      <Route path="affiliate" element={<Affiliate />} />
      <Route path="order-history" element={<OrderHistory />} />
      <Route path="wishlist" element={<Wishlist />} />
    </Routes>
  );
};

const ComponentRoutes = () => {
  return (
    <Routes>
      <Route path="products/:productLayout" element={<Products />} />
      <Route path="categories/:categoryLayout" element={<Categories />} />
      <Route path="sliders/:sliderLayout" element={<Sliders />} />
      <Route path="demo-form" element={<Demo />} />
    </Routes>
  );
};
