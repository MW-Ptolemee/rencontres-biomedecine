import React from "react";
import TtsButton from "../components/Button/TtsButton";
import infoImg from "../assets/img_loc.png";
import infoImg2 from "../assets/img3.png";

const Information = ({ textSize, darkMode }) => {
  window.scrollTo({ top: 0, behavior: "auto" });
  return (
    <div className="px-2 md:container py-8">
      {/* <TtsButton /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
        <div className="lg:pr-36">
          <div className="mb-8">
            <h2
              className={`text-primary dark:text-black gotham-bold ${textSize} mb-2`}
            >
              DATES ET HORAIRES :
            </h2>
            <p
              className={`text-secondary dark:text-black gotham-bold ${textSize}`}
            >
              Jeudi 12 octobre 2023
            </p>
            <p className={`${textSize} text-secondary dark:text-black mb-4`}>
              de 10h00 à 17h30 - Accueil à partir de 09h30
            </p>
            <p
              className={`text-secondary dark:text-black gotham-bold ${textSize}`}
            >
              Vendredi 13 octobre 2023
            </p>
            <p className={`text-secondary dark:text-black mb-4 ${textSize}`}>
              de 08h30 à 14h30 - Accueil à partir de 08h00
            </p>
          </div>

          <div className="mb-8">
            <h2
              className={`text-primary dark:text-black gotham-bold ${textSize} mb-2`}
            >
              INSCRIPTION :
            </h2>
            <p className={`${textSize} text-secondary dark:text-black`}>
              Clôture des inscriptions le{" "}
              <span className="gotham-bold">lundi 9 octobre 2023</span>. <br />
              La participation à cet événement est gratuite mais l’inscription
              est obligatoire.
            </p>
          </div>

          <div>
            <h2
              className={`text-primary dark:text-black gotham-bold ${textSize} mb-2`}
            >
              CONTACTS :
            </h2>

            <p
              className={`text-secondary dark:text-black  gotham-bold ${textSize}`}
            >
              Secrétariat de l’événement
            </p>
            
            <a
              href="mailto: contact@rencontres-biomedecine.fr"
              className={`text-primary dark:text-black ${textSize} mb-4`}
            >
              contact@rencontres-biomedecine.fr
            </a>

            <p
              className={`text-secondary dark:text-black gotham-bold ${textSize}`}
            >
              Contact pour les journalistes
            </p>
            <a
              href="mailto: presse@biomedecine.fr"
              className={`text-primary dark:text-black ${textSize} mb-8 md:mb-0`}
            >
              presse@biomedecine.fr
            </a>
          </div>
        </div>

        <div className="pr-8">
          <div className="mb-8">
            <h2
              className={`text-primary dark:text-black gotham-bold ${textSize} mb-2`}
            >
              LIEU DES RENCONTRES :
            </h2>
            <p
              className={`text-secondary dark:text-black  gotham-bold ${textSize}`}
            >
              Cité internationale universitaire de Paris
            </p>
            <p className={`${textSize} text-secondary dark:text-black mb-4`}>
              Maison internationale, <br /> 17 boulevard Jourdan - 75014 Paris
            </p>
          </div>

          <div className="mb-8">
            <h2
              className={`text-primary dark:text-black gotham-bold ${textSize} mb-2`}
            >
              ACCÈS :
            </h2>
            <p
              className={`${textSize} text-secondary dark:text-black gotham-bold`}
            >
              RER B
            </p>
            <p className={`${textSize} text-secondary dark:text-black mb-4`}>
              Station « Cité Universitaire »
            </p>

            <p
              className={`${textSize} text-secondary dark:text-black gotham-bold`}
            >
              Tram
            </p>
            <p className={`${textSize} text-secondary dark:text-black mb-4`}>
              Ligne T3a, station « Cité Universitaire »
            </p>

            <p
              className={`${textSize} text-secondary dark:text-black gotham-bold`}
            >
              Parking
            </p>
            <p className={`${textSize} text-secondary dark:text-black`}>
              Parking Charlety à 500 mètres,
              <br />
              17 avenue Pierre de Coubertin (Paris 13)
            </p>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.0135621821323!2d2.335986376916172!3d48.81980267132699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671a1a98df859%3A0x1c4282bc491b8270!2sCit%C3%A9%20Internationale%20Universitaire%20de%20Paris!5e0!3m2!1sen!2s!4v1685924478228!5m2!1sen!2s"
          className="w-full h-[400px]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <img
          className="w-full object-cover bg-center h-full"
          src={darkMode === "light" ? infoImg2 : infoImg}
          alt="Cité internationale universitaire de Paris"
        />
      </div>
    </div>
  );
};

export default Information;
