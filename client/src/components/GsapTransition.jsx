import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SellerDashboard from "../pages/SellerDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ProtectedRoute";

const GsapTransition = () => {

    const nodeRef = useRef(null);
    const location = useLocation();
    console.log("The location is : ", location);

// Whenever location changes, this use effect runs because is useEffect hook ko hum dependent banane wale hai location ke upar

    // When a page renders, useEffect runs first
    useEffect(() => {
        if (nodeRef.current) {
            gsap.fromTo(nodeRef.current, { opacity: 0 }, { opacity: 1, duration: 1});
        }
    }, [location]);
    // When we keep dependency array empty, it means this page call happens whenever it refreshes
  
    //  For GSAP :
    // 1) target
    // 2) logic


    return (
    <div ref={nodeRef} >
        <Toaster />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<ProtectedRoute children={<Login />} requiresAuth={false} />} 
          />
          <Route path="/signup" element={<ProtectedRoute children={<Signup />} requiresAuth={false} />} 
          />
          <Route path="/seller/profile" element={<ProtectedRoute children={<SellerDashboard />} />} 
          />
          <Route path="/buyer/profile" element={<ProtectedRoute children={<BuyerDashboard />} />} 
          />
        </Routes>
    </div>
  );
};

export default GsapTransition;