import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./hero.module.css";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.main}>
      <h2 className={styles.main__mainTitle}>
        <span className={styles.main__mainTitleSpan}>{t("hero.part1")} </span>
        {t("hero.part2")}
      </h2>
      <p className={styles.main__description}>{t("hero.description")}</p>
      <div className={styles.main__btnGroup}>
        <button
          className={`${styles.main__btnGroup__btn} ${styles.main__btnGroup__startBtn}`}
        >
          {t("hero.startBtn")}
        </button>
        <button
          className={`${styles.main__btnGroup__btn} ${styles.main__btnGroup__demoBtn}`}
        >
          {t("hero.demoBtn")}
        </button>
      </div>
      <span className={styles.main__span}>{t("hero.discover")}</span>
      <img
        src="/images/1.png"
        alt="hero-manage-icon"
        className={styles.main__yonetIcon}
      />
      <p className={styles.main__yonetText}>{t("hero.yonetText")}</p>
    </section>
  );
}
