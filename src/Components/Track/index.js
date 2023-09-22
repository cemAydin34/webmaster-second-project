import styles from "./track.module.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  FaRegCheckCircle,
  FaRegMoneyBillAlt,
  FaChartLine,
  FaHandHoldingUsd,
  FaBalanceScale,
  FaChartPie,
} from "react-icons/fa";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Track() {
  const { t } = useTranslation();
  return (
    <section className={styles.main}>
      <div className={styles.main__iconContainer}>
        <img src="/images/2.png" alt="keep-track-icon" />
        <p className={styles.main__iconContainer__keepTrackText}>
          {t("track.keepTrackText")}
        </p>
      </div>
      <div className={`${styles.main__container} container-fluid`}>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 mt-5">
            <h2 className={styles.main__container__title}>
              {t("track.title")}
            </h2>
            <p className={styles.main__container__description}>
              {t("track.description")}
            </p>
            <ul className={styles.main__container__list}>
              <li className={styles.main__container__list__item}>
                <FaRegCheckCircle size={20} color="#7ea9ff" />
                <span className={styles.main__container__list__item__text}>
                  {t("track.list.item1")}
                </span>
              </li>
              <li className={styles.main__container__list__item}>
                <FaHandHoldingUsd size={20} color="#7ea9ff" />
                <span className={styles.main__container__list__item__text}>
                  {t("track.list.item2")}
                </span>
              </li>
              <li className={styles.main__container__list__item}>
                <FaBalanceScale size={20} color="#7ea9ff" />
                <span className={styles.main__container__list__item__text}>
                  {t("track.list.item3")}
                </span>
              </li>
              <li className={styles.main__container__list__item}>
                <FaRegMoneyBillAlt size={20} color="#7ea9ff" />
                <span className={styles.main__container__list__item__text}>
                  {t("track.list.item4")}
                </span>
              </li>
              <li className={styles.main__container__list__item}>
                <FaChartLine size={20} color="#7ea9ff" />
                <span className={styles.main__container__list__item__text}>
                  {t("track.list.item5")}
                </span>
              </li>
              <li className={styles.main__container__list__item}>
                <FaChartPie size={20} color="#7ea9ff" />
                <span className={styles.main__container__list__item__text}>
                  {t("track.list.item6")}
                </span>
              </li>
            </ul>
          </div>
          <div
            className={`${styles.main__container__videoContainer} col-sm-12 col-md-6 mt-5`}
          >
            <div className={styles.main__container__video}>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#0d0e0e"
                  viewBox="0 0 24 24"
                  width="100px"
                  height="100px"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M2.5 2.5v19l19-9.5-19-9.5z" />
                </svg>
              </button>
              <p>
                <span>{t("track.part1")},</span> {t("track.part2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
