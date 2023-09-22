import styles from "./footer.module.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const columns = t("footer.columns", { returnObjects: true });

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container-fluid`}>
        <div className="row">
          {columns.map((column, index) => (
            <div className="col-sm-6 col-md-3" key={index}>
              <h2 className="mb-3">{column.title}</h2>
              {column.links ? (
                <ul
                  style={{
                    paddingLeft: "0",
                    listStyle: "none",
                  }}
                >
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
          <div className={`${styles.footer__inputContainer} col-sm-6 col-md-3`}>
            <h2 className="mb-3">{t("footer.newsletter.title")}</h2>
            <p>{t("footer.newsletter.description")}</p>
            <div className={styles.footer__inputContainer__input}>
              <input type="text" placeholder="Email" />
              <button>{t("footer.newsletter.button")}</button>
            </div>
            <div style={{ marginTop: "20px" }}>
              <FaFacebookF
                style={{ marginRight: "25px", cursor: "pointer" }}
                color="white"
              />
              <FaTwitter
                style={{ marginRight: "25px", cursor: "pointer" }}
                color="white"
              />
              <FaInstagram
                style={{ marginRight: "25px", cursor: "pointer" }}
                color="white"
              />
              <FaYoutube
                style={{ marginRight: "25px", cursor: "pointer" }}
                color="white"
              />
              <FaLinkedinIn color="white" style={{ cursor: "pointer" }} />
            </div>
            <p className="mt-2 fs-6 fw-bold text-end">Salonium</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
