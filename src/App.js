import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import whatsapp from "./Assets/whatsapp.svg";

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { Suspense, useState } from "react";

import { translationEn } from "./Content/translationEn";
import { translationAr } from "./Content/translationAr";

import { useEffect } from "react";
import Footer from "./Components/Footer/Footer";

i18n.use(initReactI18next).init({
  resources: {
    en: translationEn,
    ar: translationAr,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

function App() {
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

  const [currentLanguage, setCurrentLanguage] = useState(null);
  return (
    <Suspense fallback="Loading...">
      <div className={`App ${currentLanguage === "ar" ? "arabic" : ""}`}>
        <NavBar
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        />
        <div>
          <motion.a
            animate={{ scale: [0.8, 1, 0.8] }}
            initial={{ scale: 0.8 }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="whatsapp"
            href="https://wa.me/+447405650178?text=Hello! I would like some of your amazing help with my research!"
          >
            <img src={whatsapp} alt="whatsapp" />
          </motion.a>
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />

            {/* <Route
            path="/checkout"
            element={<Checkout />}
            render={(props) => <Checkout {...props} />}
          ></Route> */}
          </Routes>
        </Router>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
