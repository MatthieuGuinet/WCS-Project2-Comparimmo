import React from "react";
import "../assets/styles/index.scss";
import "./About.scss";
// eslint-disable-next-line import/no-unresolved
import minilogo from "@assets/img/minilogo.jpg";
// eslint-disable-next-line import/no-unresolved
import cedric from "@assets/img/cedric.jpg";
// eslint-disable-next-line import/no-unresolved
import mathieu from "@assets/img/mathieu.jpg";
// eslint-disable-next-line import/no-unresolved
import antoine from "@assets/img/antoine.jpg";
// eslint-disable-next-line import/no-unresolved
import hugo from "@assets/img/hugo.jpg";

function About() {
  return (
    <div className="aboutContent">
      <div className="homeButton">
        <button type="button"> ABOUT US</button>
      </div>
      <section>
        <div className="aboutComparimmo">
          <div className="d-flex">
            <img src={minilogo} alt="" />
            <h2>COMPAR'IMMO</h2>
          </div>
          <p>
            Bienvenue sur notre site internet dédié à la comparaison des valeurs
            foncières des maisons et appartements sur les différentes communes
            de France. Grâce à notre outil de comparaison, nous facilitons la
            recherche de lieu pour acheter dans l’immobilier ou pour prendre
            connaissance des tendances du marché. Vous pouvez sélectionner une
            commune pour afficher ses informations principales, ou en
            sélectionner plusieurs pour comparer les prix moyens au m². Grâce à
            notre carte interractive, vous pouvez également séléctionner
            directement une commune et regarder les dernières ventes effectuées
            sur les appartements, maisons ou terrains dans la rue de votre
            choix.
          </p>
        </div>
        <div className="aboutAPi">
          <div className="d-flex">
            <img src={minilogo} alt="" />
            <h2> Ressources utilisées </h2>
          </div>
          <p>
            Pour réaliser ce site internet, plusieurs API ont été utilisées pour
            récupérer les données:
          </p>
          <ul>
            <li>
              <a
                href="https://datafoncier.cerema.fr/donnees/autres-donnees-foncieres/dvfplus-open-data"
                target="_blank"
                rel="noopener noreferrer"
              >
                DVF+ open-data par CEREMA
              </a>
            </li>
            <li>
              <a
                href="https://leafletjs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LEAFLET MAP
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://api.gouv.fr/documentation/api-geo"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Découpage Administratif - (API Geo)
              </a>
            </li>
          </ul>
        </div>

        <div className="aboutDev">
          <div className="teamDev">
            <img src={minilogo} alt="Logo Compar'Immo" />
            <h2>L'équipe de développeurs</h2>
          </div>
          <div className="trombi">
            <div className="dev">
              <img src={hugo} alt="Hugo" />
              <h2>Hugo CARNAZZA</h2>
            </div>
            <div className="dev">
              <img src={antoine} alt="Antoine" />
              <h2>Antoine CASSAGNE</h2>
            </div>
            <div className="dev">
              <img src={mathieu} alt="Mathieu" />
              <h2>Matthieu GUINET</h2>
            </div>
            <div className="dev">
              <img src={cedric} alt="Cédric" />
              <h2>Cédric PALACIO-VIDAL</h2>
            </div>
          </div>
          <p>
            Ce site Web a été réalisé dans le cadre du projet 2 de la formation
            “Développeur Web” à la Wild Code School.
          </p>{" "}
        </div>
      </section>
    </div>
  );
}

export default About;
