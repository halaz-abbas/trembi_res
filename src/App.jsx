import React, { useState, useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Import components
import Navbar from "./shared/components/navbar/NavBar";
import Footer2 from "./shared/components/footer2/footer2";
import Footer from "./shared/components/footer/footer";
import Loading from "./shared/components/loading/Loading";

// Import pages
import Home from "./home/pages/Home";
import ContactUs from "./contactus/pages/ContactUs";
import Restaurant from "./res/pages/Resturant";
import ProductDetails from "./productdetails/pages/ProductDetails";
import MyCart from "./cart/pages/MyCart";
import FlatCart from "./flat/cartflat/components/cartFlat";
import CheckoutPage from "./chacout/pages/CheckoutPage";
import PlaceOrderPages from "./placeorder/pages/PlaceOrderPages";
import ConfirmPages from "./confirm/pages/ConfirmPages";
import ProfilePages from "./profile/pages/ProfllePages";
import RegesterFormPages from "./regesterform/pages/RegesterFormPages";
import RegisterStep2Pages from "./regesterform/pages/RegisterStep2Pages";
import RegisterStep3Pages from "./regesterform/pages/RegisterStep3Pages";
import RegisterSuccessPages from "./regesterform/pages/RegisterSuccessPages";
import LoginPages from "./regesterform/pages/LoginPages";
import ReserveDetails from "./erservo/ReserveDetails";

import styles from "./App.module.css";

function AppContent() {
  const location = useLocation();
  const isFlatPage = location.pathname.includes('/flat');
  const isCartPage = location.pathname === '/cart';
  
  return (
    <div className={styles.appContainer}>
      {!isCartPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<ContactUs />} />
        <Route path="/flat" element={<Restaurant />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/reserve" element={<ReserveDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<FlatCart />} />
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
      {(isFlatPage || isCartPage) ? <Footer2 /> : <Footer />}
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // التحقق من localStorage لمعرفة إذا كان التطبيق قد تم تحميله من قبل
    const hasLoadedBefore = localStorage.getItem('appHasLoaded');
    
    if (hasLoadedBefore) {
      setLoading(false);
      setHasLoaded(true);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        setHasLoaded(true);
        localStorage.setItem('appHasLoaded', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (loading && !hasLoaded) {
    return <Loading />;
  }

  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}