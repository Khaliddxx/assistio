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
import { Suspense } from "react";

import { translationEn } from "./Content/translationEn";
import { translationAr } from "./Content/translationAr";

import { useEffect } from "react";

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

  const currentLanguage = i18n.language;
  return (
    <Suspense fallback="Loading...">
      <div className={`App ${currentLanguage === "ar" ? "arabic" : ""}`}>
        <NavBar />
        <div>
          <motion.div
            animate={{ scale: [0.8, 1, 0.8] }}
            initial={{ scale: 0.8 }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="whatsapp"
          >
            <img src={whatsapp} alt="whatsapp" />
          </motion.div>
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
      </div>
    </Suspense>
  );
}

export default App;
