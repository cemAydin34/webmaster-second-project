import styles from "./manage.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useTranslation } from "react-i18next";

export default function Manage() {
  const { t } = useTranslation();

  const titles = t("manage.titles", { returnObjects: true });

  const cardInformation = t("manage.cardInformation", { returnObjects: true });

  return (
    <>
      <section className={styles.main}>
        {titles.map((title, index) => {
          return (
            <h2 className={`${styles.main__sliderTitle}`} key={index}>
              {title}
            </h2>
          );
        })}
      </section>

      <div className={`${styles.cardContainer} container-fluid`}>
        <div className="row px-3 justify-content-evenly">
          {cardInformation.map((card, index) => {
            return (
              <div
                className={`${styles.cardContainer__card} card col-sm-12 col-md-3`}
                key={index}
              >
                <div
                  className={`${styles.cardContainer__card__cardBody} card-body`}
                >
                  <h5 className="card-title fs-3">{card.title}</h5>
                  <p
                    className={`${styles.cardContainer__card__cardText} card-text`}
                  >
                    {card.text}
                  </p>
                  <button className={styles.cardContainer__card__btn}>
                    {card.button}
                  </button>
                  <ul className={styles.cardContainer__card__cardFeatures}>
                    {card.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <a href="#" className={styles.cardContainer__card__link}>
                    {card.tag}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

/* I want these titles to slide without the need for user interaction, outside of the screen, infinitely, like a movie title poster. */
