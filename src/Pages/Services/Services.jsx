import React from "react";
import "./Services.scss";

import { useTranslation } from "react-i18next";

import ServiceCardList from "../../Components/ServiceCardList/ServiceCardList";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="services-page">
      <div className="hero">
        <div className="overlay">
          <h1 className="header-title">{t("servicesHeader")}</h1>
          <div className="flex-horiz hire-btn"></div>
        </div>
      </div>

      <p className="desc">{t("servicesDesc")}</p>

      <ServiceCardList />
    </div>
  );
};

export default Services;
