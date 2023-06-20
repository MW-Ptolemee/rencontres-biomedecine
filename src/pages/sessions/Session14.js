import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";

const Session14 = ({ textSize }) => {
  return (
    <div className="px-2 md:container py-8 space-y-8">
      {/* <TtsButton /> */}

      <div>
        <div className="flex flex-wrap items-center mb-4">
          <button className="bg-[#00a895] mr-4 dark:bg-black flex items-center text-white dark:text-white text-[10px] md:text-base py-2 px-1 md:px-4 font-bold">
            <span
              className={`w-max ${
                textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
              }`}
            >
              PRATIQUES MÉDICALES
            </span>
          </button>
          <h4 className="text-sm md:text-xl mr-4 gotham-bold text-secondary dark:text-black pr-4 border-r-[4px] border-[#00a895] dark:border-black">
            Vendredi 13 octobre
          </h4>
          <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">
            10h30 {`>`} 12h00
          </p>
        </div>

        <h2 className="md:text-4xl text-[#00a895] dark:text-black gotham-bold mb-4">
        Qualité des greffons de CSH dans des situations critiques 
        </h2>

        

        <p className={`${textSize} space-x-2 mb-6`}>
          <span className="text-[#00a895] dark:text-black gotham-bold">
            Modération :
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
          Dr Federico GARNIER,
          </span>
          <span className="text-secondary dark:text-black">
          Agence de la biomédecine et
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
          Dr Marie PRAT-LEPESANT,
          </span>
          <span className="text-secondary dark:text-black">
          Société française de bio ingénierie cellulaire et tissulaire
          </span>
        </p>

        <ul className="list-dsc list-disc text-[#00a895] dark:text-black mb-8">
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Impact de la cryopréservation des greffons de CSH pendant la pandémie Covid-19
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Dr Edouard FORCADE,
              </span>{" "}
              CHU de Bordeaux
            </span>
          </li>
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Usage du Plerixafor pour les donneurs mauvais mobilisateurs de CSH 
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Dr Angela GRANATA,
              </span>{" "}
              Institut Paoli-Calmettes, Marseille
            </span>
          </li>
        </ul>

        <button className="gotham-bold border-2 border-[#00a895] dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6">
          <Link
            to="/Inscription"
            className={`w-max ${
              textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
            }`}
          >
            Je m’inscris aux Rencontres
          </Link>
        </button>

        <button className="gotham-bold bg-primary-light dark:bg-black flex items-center space-x-1 md:space-x-2 text-secondary dark:text-white text-sm md:text-base py-2 px-4 font-bold mr-[1px] md:mr-[8px]">
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
            to="/friday-october-13"
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

export default Session14;
