import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SampleImages from "./SampleImages";
import {Route, Routes, useLocation } from "react-router-dom";
import CreatePost from "./CreatePost";
import Footer from "./Footer";
import FeaturesSection from "./FeaturesSection";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

export default function App() {

    const location = useLocation();
    const [ , path] = location.pathname.split("/");

    return (
        <>
        <Header />

        {/* Browser Router is a module from the React Router Dom, The element that we write on a path, gets rendered when the user hits that path. */}
        
        <Routes>
            <Route path="/" element={<HeroSection />} exact/>
            <Route path="/create-post" element={<><CreatePost /><SampleImages /></> } exact/>
            <Route path="/explore" element={<SampleImages />} exact/>
            <Route path="/about" element={<AboutUs />} exact/>
            <Route path="/contact" element={<ContactUs />} exact/>
        </Routes>
        {path === "" | path === "about" | path === "contact" && <FeaturesSection />}
        {path === "" && <SampleImages />}
        <Footer />
        
        </>
    );
}
