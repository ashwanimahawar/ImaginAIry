import React, { useEffect, useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SampleImages from "./SampleImages";
import { Route, Routes, useLocation } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import CreatePost from "./CreatePost";
import Footer from "./Footer";
import FeaturesSection from "./FeaturesSection";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";
import CookiesPreferences from "./CookiesPreferences";

export default function App() {
  const location = useLocation();
  const [, path] = location.pathname.split("/");
  //Cookie Consent Mechanism
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  

  useEffect(() => {
    // Check local storage for previous consent
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "accepted") {
      setAnalyticsEnabled(true); // Set the state if already accepted
    } else if (consent === "declined") {
      setAnalyticsEnabled(false); // Set the state if already declined
    }
  }, []);

  

  const enableAnalytics = () => {
    const analyticsID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
    console.log(analyticsID);
    // Load Google Analytics script dynamically after consent
    const gaScript = document.createElement("script");
    gaScript.type = "text/javascript";
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsID}`;

    // Insert the script into the document
    document.head.appendChild(gaScript);

    // Initialize Google Analytics once the script is loaded
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", analyticsID, { anonymize_ip: true });
  };

  const disableAnalytics = () => {
    setAnalyticsEnabled(false);
    console.log(analyticsEnabled);
    // Optionally, you can clear Google Analytics cookies here if needed
  };

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setAnalyticsEnabled(true);
    enableAnalytics(); // Load the script only after accepting
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    disableAnalytics(); // Just update the state
  };

  return (
    <>
      <Header />

      {/* Browser Router is a module from the React Router Dom, The element that we write on a path, gets rendered when the user hits that path. */}

      <Routes>
        <Route path="/" element={<HeroSection />} exact />
        <Route
          path="/create-post"
          element={
            <>
              <CreatePost />
              <SampleImages />
            </>
          }
          exact
        />
        <Route path="/explore" element={<SampleImages />} exact />
        <Route path="/about" element={<AboutUs />} exact />
        <Route path="/contact" element={<ContactUs />} exact />
        <Route path="/privacy" element={<PrivacyPolicy />} exact />
        <Route path="/terms" element={<Terms />} exact />
        <Route path="/cookies-preferences" element={<CookiesPreferences />} exact />
      </Routes>
      {(path === "" || path === "about" || path === "contact") && (
        <FeaturesSection />
      )}
      {path === "" && <SampleImages />}
      <Footer />

      <CookieConsent
        location="bottom"
        buttonText="I Understand"
        declineButtonText="Reject Cookies"
        enableDeclineButton
        onAccept={handleAccept}
        onDecline={handleDecline}
        buttonWrapperClasses="consentButtonDiv"
        containerClasses="consentContainer"
        buttonClasses="acceptButton"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Add a semi-transparent background
          backdropFilter: "blur(8px)", // Apply blur
          WebkitBackdropFilter: "blur(8px)", // Add vendor prefix for older browsers
          borderRadius: "8px",
          margin: "10px",
          width: "auto",
          color: "black",
          fontFamily: `"Inter", sans-serif`,
          alignItems: "center",
        }}
        buttonStyle={{
          color: "#fff",
          fontSize: "18px",
          fontWeight: "bold",
          backgroundColor: "#0000D1",
          padding: "6px 15px",
          borderRadius: "6px",
        }}
        declineButtonStyle={{
          color: "#afafaf",
          fontWeight: "bold",
          fontSize: "18px",
          backgroundColor: "#525252",
          padding: "6px 15px",
          borderRadius: "6px",
        }}
        expires={100}
      >
        We use cookies to provide you with a better browsing experience, analyze
        site traffic, and personalize content.{" "}
        <span id="tabletConsent">
          We also use third-party services such as Google Analytics to
          understand how you use our site and to improve our services.
        </span>{" "}
        <span id="laptopConsent">
          By clicking "I Understand", you consent to the use of cookies and the
          processing of your personal data for these purposes.
        </span>{" "}
        You may visit our{" "}
        <a
          href="/cookies-preferences"
          style={{ color: "red", textDecoration: "underline" }}
        >
          Cookies Preferences
        </a>{" "}
        page to learn more about the types of cookies we use and how to manage
        your preferences.{" "}
      </CookieConsent>
    </>
  );
}
