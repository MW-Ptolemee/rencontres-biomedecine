import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";

const Session12 = ({ textSize }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="px-2 md:container py-8 space-y-8">
    {/* <TtsButton /> */}

    <div>
      <div className="flex flex-wrap items-center mb-4">
        <button className="bg-[#f091a9] mr-4 dark:bg-black flex items-center text-white dark:text-white text-[10px] md:text-base py-2 px-1 md:px-4 gotham-bold">
          <span
            className={`w-max ${
              textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
            }`}
          >
            SANTÉ & SOCIÉTÉ
          </span>
        </button>
        <h4 className="text-sm md:text-xl mr-4 gotham-bold text-secondary dark:text-black pr-4 border-r-[4px] border-[#f091a9] dark:border-black">
          Vendredi 13 octobre
        </h4>
        <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">08h30 {`>`} 10h00</p>
      </div>

      <h2 className="md:text-4xl text-[#f091a9] dark:text-black gotham-bold mb-4">
      L’opposition au don d’organes et de tissus
      </h2>

      <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
      L’opposition au don d’organes et de tissus, si elle est prévue dans la Loi n’en demeure pas moins un sujet 
      de préoccupation depuis de nombreuses années. Il s’agit d’un phénomène assurément multifactoriel 
      dont le seul système de soins ne peut être tenu comme responsable. Dans une session très ouverte, 
      des intervenants de tous horizons, issus du droit, de la santé ou du monde associatif nous présenteront 
      les déterminants de ce refus en France. Enfin, le témoignage d’une praticienne espagnole, pays « bon élève » 
      en matière d’opposition en Europe, nous permettra de comprendre les facteurs clés de succès. 
        </p> 

        <hr className="border border-[#b3b3b3] dark:border-black mb-4" />

      <p className={`${textSize} space-x-2 mb-6`}>
        <span className="text-[#f091a9] dark:text-black gotham-bold">
          Modération :
        </span>
        <span className="text-secondary dark:text-black gotham-bold">
        Dr Benoît AVERLAND,
        </span>
        <span className="text-secondary dark:text-black">
        Agence de la biomédecine 
        </span>
        
      </p>

      <ul className="list-dsc list-disc text-[#f091a9] dark:text-black mb-8">
        <li className="ml-4 mb-4">
          <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
          Prélèvement d'organes et de tissus dans le droit : un projet collectif à l'époque de l'individualité ?
          </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
            <span className="text-secondary dark:text-black gotham-bold">
            Mme Valérie DEPADT,
            </span>{" "}
            Sorbonne Paris Nord
          </span>
        </li>
        <li className="ml-4 mb-4">
          <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
          Déterminants de l'opposition : résultats d'une étude menée par l'Agence de la biomédecine
          </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
            <span className="text-secondary dark:text-black gotham-bold">
            Dr Régis BRONCHARD, 
            </span>{" "}
            Agence de la biomédecine
          </span>
        </li>
        <li className="ml-4 mb-4">
          <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
          Modèle espagnol et taux d'opposition
          </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
            <span className="text-secondary dark:text-black gotham-bold">
            Dr Chloé BALLESTE, 
            </span>{" "}
            Donation & Transplantation Institute - DTI, Barcelone, Espagne
          </span>
        </li>
        <li className="ml-4 mb-4">
          <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
          Associations : quelles sont les actions possibles ?
          </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
            <span className="text-secondary dark:text-black gotham-bold">
            M. Pierre LEMARCHAL, 
            </span>{" "}
            Association Grégory Lemarchal, membre du Collectif Greffes+, Chambéry
          </span>
        </li>
      </ul>

      <button className="gotham-bold border-2 border-[#f091a9] dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-[#f091a9] hover:text-white dark:hover:bg-black dark:hover:text-white">
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
          to="/vendredi-13-octobre"
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

export default Session12;
