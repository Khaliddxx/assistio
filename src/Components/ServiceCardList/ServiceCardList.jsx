import React from "react";
import "./ServiceCardList.scss";

import { useTranslation } from "react-i18next";

import ServiceCard from "../ServiceCard/ServiceCard";
import s1 from "../../Assets/Services/s1.png";

const ServiceCardList = () => {
  const { t } = useTranslation();
  return (
    <div className="service-card-list">
      <ServiceCard
        img={s1}
        title={t("service1Header")}
        desc={t("service1Desc")}
      />
      {/* <ServiceCard
        img={s1}
        title={t("service2Header")}
        desc={t("service2Desc")}
      />
      <ServiceCard
        img={s1}
        title={t("service3Header")}
        desc={t("service3Desc")}
      />
      <ServiceCard
        img={s1}
        title={t("service4Header")}
        desc={t("service4Desc")}
      /> */}
    </div>
  );
};

export default ServiceCardList;
