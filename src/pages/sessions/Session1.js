import React from "react";
import TtsButton from "../../components/Button/TtsButton";
import { Link } from "react-router-dom";

const Session1 = ({ textSize }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });  
  return (
    <div className="px-2 md:container py-8 space-y-8">
      {/* <TtsButton /> */}

      <div>
        <div className="flex flex-wrap items-center mb-4">
          <button className="bg-primary mr-4 dark:bg-black flex items-center text-white dark:text-white text-[10px] md:text-base py-2 px-1 md:px-4 gotham-bold">
            <span
              className={`w-max ${
                textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
              }`}
            >
              SCIENCE & ÉTHIQUE
            </span>
          </button>
          <h4 className="text-sm md:text-xl mr-4 gotham-bold text-secondary dark:text-black pr-4 border-r-[4px] border-primary dark:border-black">
            Jeudi 12 octobre
          </h4>
          <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">14h00 {`>`} 15h30</p>
        </div>

        <h2 className="md:text-4xl text-primary dark:text-black gotham-bold mb-4">
          Aux frontières de la transplantation : la xénogreffe !
        </h2>

        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        Résoudre la pénurie d’accès à la greffe par l’utilisation d’organes animaux est une idée ancienne. 
        D’ailleurs, les premières xénotransplantations ne concernaient pas des organes, mais des tissus (os, peau) et des cellules (sang), 
        dès le 17<sup>ème</sup> siècle. Il faudra attendre le début du 20<sup>ème</sup> siècle pour qu’un chirurgien lyonnais ne tente la greffe 
        d’un rein de chèvre sur un humain. Cette session débutera donc par une réflexion philosophique sur la frontière entre l’homme 
        et l’animal. Un état de l’art de la xénogreffe sera ensuite présenté, suivi du témoignage d’un praticien américain en pointe 
        sur cette discipline assez peu connue du grand public mais dont les récentes avancées pourraient bien remettre ce sujet 
        à l’ordre du jour européen.
        </p> 

        <hr className="border border-[#b3b3b3] dark:border-black mb-4" />

        <p className={`${textSize} space-x-2 mb-6`}>
          <span className="text-primary dark:text-black gotham-bold">
            Modération :
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
            Pr Gilles BLANCHO,
          </span>
          <span className="text-secondary dark:text-black">
            CHU Nantes et
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
            Pr François KERBAUL,
          </span>
          <span className="text-secondary dark:text-black">
            Agence de la biomédecine
          </span>
        </p>

        <ul className="list-dsc list-disc text-primary dark:text-black mb-8">
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Les xénogreffes transgressent-elles les frontières philosophiques ?
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              M. Jean Michel BESNIER,
              </span>{" "}
              Paris Sorbonne Université
            </span>
          </li>
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
              La xénogreffe en 2023 : état de l’art
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
                Pr Olivier BASTIEN,
              </span>{" "}
              Agence de la biomédecine
            </span>
          </li>
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Advances in xenotransplantation. US reality 
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Muhammad M MOHIUDDIN MD. D.Sc (Hon),
              </span>{" "}
              University of Maryland School of Medicine, États-Unis
            </span>
          </li>
        </ul>

        <button className="gotham-bold border-2 border-primary dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-primary hover:text-white dark:hover:bg-black dark:hover:text-white">
          <Link
            to="/Inscription"
            className={`w-max ${
              textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
            }`}
          >
            Je m’inscris aux Rencontres
          </Link>
        </button>

        <button className="gotham-bold bg-primary-light dark:bg-black flex items-center space-x-1 md:space-x-2 text-secondary dark:text-white text-sm md:text-base py-2 px-4 font-bold mr-[1px] md:mr-[8px] hover:bg-secondary hover:text-white dark:hover:bg-black dark:hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:w-8 md:h-8 -ml-1 md:-ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <Link
            to="/Programme/#session12matin"
            className={`w-max ${
              textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
            }`}
          >
            Revenir au programme
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Session1;
