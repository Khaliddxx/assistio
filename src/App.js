import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";

import whatsapp from "./Assets/whatsapp.svg";

import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
