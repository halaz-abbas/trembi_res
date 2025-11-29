import React, { useState, useEffect } from "react";
import Navbar from "./shared/components/navbar/NavBar";
import Home from "./features/home/pages/Home";
import ContactUs from "./features/contactus/pages/ContactUs";
import Restaurant from "./features/res/pages/Resturant";
import ProductDetails from "./features/productdetails/pages/ProductDetails";
import MyCart from "./features/cart/pages/MyCart";
import CheckoutPage from "./features/chacout/pages/CheckoutPage";
import PlaceOrderPages from "./features/placeorder/pages/PlaceOrderPages";
import ConfirmPages from "./features/confirm/pages/ConfirmPages";
import ProfilePages from "./features/profile/pages/ProfllePages";
import RegesterFormPages from "./features/regesterform/pages/RegesterFormPages";
import RegisterStep2Pages from "./features/regesterform/pages/RegisterStep2Pages";
import RegisterStep3Pages from "./features/regesterform/pages/RegisterStep3Pages";
import RegisterSuccessPages from "./features/regesterform/pages/RegisterSuccessPages";
import LoginPages from "./features/regesterform/pages/LoginPages";
import Loading from "./shared/components/loading/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./shared/components/footer/footer";
import styles from "./App.module.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<ContactUs />} />
          <Route path="/services" element={<Restaurant />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/place-order" element={<PlaceOrderPages />} />
          <Route path="/confirm" element={<ConfirmPages />} />
          <Route path="/profile" element={<ProfilePages />} />
          <Route path="/register" element={<RegesterFormPages />} />
          <Route path="/register-step2" element={<RegisterStep2Pages />} />
          <Route path="/register-step3" element={<RegisterStep3Pages />} />
          <Route path="/register-success" element={<RegisterSuccessPages />} />
          <Route path="/login" element={<LoginPages />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
