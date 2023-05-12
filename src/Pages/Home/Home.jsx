import React from "react";
import "./Home.scss";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import heroImg from "../../Assets/hero-image.svg";
import ensuring from "../../Assets/Home/ensuring.svg";
import p1 from "../../Assets/Home/p1.svg";
import p2 from "../../Assets/Home/p2.svg";
import p3 from "../../Assets/Home/p3.svg";
import p4 from "../../Assets/Home/p4.svg";
import p5 from "../../Assets/Home/p5.svg";
import p6 from "../../Assets/Home/p6.svg";
import p7 from "../../Assets/Home/p7.svg";
import p8 from "../../Assets/Home/p8.svg";
import p9 from "../../Assets/Home/p9.svg";

const ProcessCard = ({ img, text }) => {
  return (
    <div className="process-card">
      <img src={img} alt="" />
      <h4>{text}</h4>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <div className="left">
          <motion.h1
            initial={{ x: -500, y: 200, scale: 0.1 }}
            animate={{ x: 0, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="header-txt"
          >
            Unlocking the <span className="inverted">Potantial</span> of
            Academic <span className="inverted">Research</span> and{" "}
            <span className="inverted">Analysis</span>
          </motion.h1>
          <motion.div
            initial={{ x: 500, scale: 0.1 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="description"
          >
            At Assistio, we understand that academic research and analysis is
            the key to unlocking the potential of any field. Our cutting-edge
            services leverage the latest technologies and methodologies to
            endure that you have the most up-to-date and reliable information at
            your fingertips ✨
          </motion.div>
          <motion.div
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="btns"
          >
            <Button className="btn">Our Services</Button>
            <Button className="btn btn2">About us</Button>
          </motion.div>
        </div>
        <motion.div
          initial={{}}
          animate={{ x: [0, 5, 5, 0, 0], y: [0, 0, 5, 5, 0], scale: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="right"
        >
          <img src={heroImg} alt="hero image" />
        </motion.div>
      </div>

      <div className="ensuring">
        <div className="left">
          <img src={ensuring} alt="" />
        </div>
        <div className="right">
          <h5>Ensuring your academic success!</h5>
          <p>
            We have worked on a range of projects over the years, from
            small-scale research papers to large-scale data analysis. Our
            portfolio includes case studies, statistical reports, and in-depth
            research papers on a variety of topics.
          </p>
        </div>
      </div>

      <div className="process">
        <motion.h1
          initial={{ x: -500, scale: 0.1 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="header-txt"
        >
          Assistio Research Process
        </motion.h1>
        <motion.p
          initial={{ x: 500, scale: 0.1 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="header-txt"
        >
          Assistio research process diagram provides a visual representation of
          our step-by-step approach, which includes:
        </motion.p>
        <div className="process-cards">
          <ProcessCard img={p1} text="Topic Selection" />
          <ProcessCard img={p2} text="Proposal Writing" />
          <ProcessCard img={p3} text="Literature Review" />
          <ProcessCard img={p4} text="Methodology" />
          <ProcessCard img={p5} text="Data Collection" />
          <ProcessCard img={p6} text="Data Analysis" />
          <ProcessCard img={p7} text="Results & Discussion" />
          <ProcessCard img={p8} text="Conclusion & Recommendations" />
          <ProcessCard img={p9} text="Manuscript Writing & Publications" />
        </div>
      </div>
    </div>
  );
};

export default Home;
