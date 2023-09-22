import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <header className={styles.header}>
      <Link className={styles.header__logo} to="/">
        <p>{t("header.logo")}</p>
      </Link>
      <select
        className={styles.header__languageSelect}
        onChange={changeLanguage}
        value={i18n.language}
      >
        <option value="en">English</option>
        <option value="tr">Turkish</option>
      </select>
      <Link to="/contact" className={styles.header__contact}>
        <p>{t("header.contact")}</p>
      </Link>
    </header>
  );
}
