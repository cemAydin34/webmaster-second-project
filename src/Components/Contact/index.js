import styles from "./contact.module.css";
import Header from "../Header";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Header />

      <section className={styles.section}>
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          {t("contact.sectionTitle")}
        </h2>

        <p className="text-center w-responsive mx-auto mb-5">
          {t("contact.sectionDescription")}
        </p>

        <div className="row align-items-center justify-content-center">
          <div className="col-sm-12 col-md-6 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0 mt-3">
                    <label htmlFor="name">{t("contact.nameLabel")}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control pt-0"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0 mt-3">
                    <label htmlFor="email">{t("contact.emailLabel")}</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control pt-0"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form my-3">
                    <label htmlFor="subject">
                      {t("contact.subjectLabel")}{" "}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control pt-0"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label htmlFor="message">{t("contact.messageLabel")}</label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="1"
                      className="form-control md-textarea pt-0"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left mt-4">
              <a
                style={{
                  background: "transparent",
                  border: "1px solid #fff",
                }}
                className="btn btn-primary w-100"
              >
                {t("contact.sendButton")}
              </a>
            </div>
          </div>

          <div className="col-sm-12 col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <FaMapMarkerAlt size={32} />
                <p>{t("contact.address")}</p>
              </li>

              <li>
                <FaPhone size={32} />
                <p>{t("contact.phoneNumber")}</p>
              </li>

              <li>
                <FaEnvelope size={32} />
                <p>contact@salonium.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
