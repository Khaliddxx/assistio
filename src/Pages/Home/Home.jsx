import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
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
import { Trans, useTranslation } from "react-i18next";

const ProcessCard = ({ img, text }) => {
  return (
    <div className="process-card">
      <img src={img} alt="" />
      <h4>{text}</h4>
    </div>
  );
};

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
            <Trans components={{ span: <span />, br: <br /> }}>tagline</Trans>
          </motion.h1>
          {/* <motion.h1
            initial={{ x: -500, y: 200, scale: 0.1 }}
            animate={{ x: 0, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="header-txt"
          >
            Unlocking the <span className="inverted">Potantial</span> of
            Academic <span className="inverted">Research</span> and{" "}
            <span className="inverted">Analysis</span>
          </motion.h1> */}
          <motion.p
            initial={{ x: 500, scale: 0.1 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="description text-align-right"
          >
            {t("intro")}
          </motion.p>
          <motion.div
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="btns"
          >
            <Button onClick={() => navigate("/services")} className="btn">
              {t("cta1")}
            </Button>
            <Button className="btn btn2">{t("cta2")}</Button>
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
          <h5>{t("ensuringTitle")}</h5>
          <p>{t("ensuringDesc")}</p>
        </div>
      </div>

      <div className="process">
        <motion.h1
          initial={{ x: -500, scale: 0.1 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="header-txt"
        >
          {t("processTitle")}
        </motion.h1>
        <motion.p
          initial={{ x: 500, scale: 0.1 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="header-txt"
        >
          {t("processDesc")}
        </motion.p>
        <div className="process-cards">
          <ProcessCard img={p1} text={t("service1Header")} />
          <ProcessCard img={p2} text={t("service2Header")} />
          <ProcessCard img={p3} text={t("service3Header")} />
          <ProcessCard img={p4} text={t("service4Header")} />
          <ProcessCard img={p5} text={t("service5Header")} />
          <ProcessCard img={p6} text={t("service6Header")} />
          <ProcessCard img={p7} text={t("service7Header")} />
          <ProcessCard img={p8} text={t("service8Header")} />
          <ProcessCard img={p9} text={t("service9Header")} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{ marginBottom: "32px" }}
            onClick={() => navigate("/services")}
            className="btn"
          >
            {t("viewMore")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
