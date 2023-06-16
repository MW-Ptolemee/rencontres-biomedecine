import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";

const Session7 = ({ textSize }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="px-2 md:container py-8 space-y-8">
    {/* <TtsButton /> */}

    <div>
      <div className="flex flex-wrap items-center mb-4">
        <button className="bg-[#f091a9] mr-4 dark:bg-black flex items-center text-white dark:text-white text-[10px] md:text-base py-2 px-1 md:px-4 font-bold">
          <span
            className={`w-max ${
              textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
            }`}
          >
            SANTÉ & SOCIÉTÉ
          </span>
        </button>
        <h4 className="text-sm md:text-xl mr-4 gotham-bold text-secondary dark:text-black pr-4 border-r-[4px] border-[#f091a9] dark:border-black">
          Jeudi 12 octobre
        </h4>
        <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">16h00 {`>`} 17h30</p>
      </div>

      <h2 className="md:text-4xl text-[#f091a9] dark:text-black gotham-bold mb-4">
      L’utilisation de données de santé au service des patients 
      </h2>

      <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
      L’accès facilité aux bases de remboursements de l’Assurance maladie et aux données hospitalières représente une opportunité 
      immense pour la recherche en santé et l’évaluation des prises en charge. Cela permet de mener des études médico-économiques
      mais aussi différents types d’études sur les pathologies et les parcours de soin. Cette session a pour objectif, 
      à travers 3 exemples concrets, d’illustrer l’apport de ces données et leur utilisation.
      </p>

      <hr className="border border-[#b3b3b3] dark:border-black mb-4" />

      <p className="space-x-2 mb-6">
        <span className="text-[#f091a9] dark:text-black gotham-bold">
          Modération :
        </span>
        <span className="text-secondary dark:text-black gotham-bold">
        Dr Axelle MENU-BRANTHOMME,
        </span>
        <span className="text-secondary dark:text-black">
        Health Data Hub, Paris et
        </span>
        <span className="text-secondary dark:text-black gotham-bold">
        Dr Brigitte THEVENIN LEMOINE,
        </span>
        <span className="text-secondary dark:text-black">
        France REIN
        </span>
      </p>

      <ul className="list-dsc list-disc text-[#f091a9] dark:text-black mb-8">
        <li className="mb-4">
          <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
          Surveillance des effets indésirables dans le SNDS dans le cadre de la biovigilance et de l'AMP Vigilance
          </h4>
          <span className="text-secondary dark:text-black mb-4">
            <span className="text-secondary dark:text-black text-sm md:text-base gotham-bold">
            Mme Gaëlle LEMARDELEY
            </span>{" "}
            et
            <span className="text-secondary dark:text-black text-sm md:text-base gotham-bold">
            {" "}Dr Cyril ASTRUGUE,
            </span>{" "}
            Agence de la biomédecine
          </span>
        </li>
        <li className="mb-4">
          <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
          Impact du parcours de soin des enfants avec une maladie rénale chronique sur l’inscription précoce et la greffe rénale préemptive
          </h4>
          <span className="text-secondary dark:text-black mb-4">
            <span className="text-secondary dark:text-black text-sm md:text-base gotham-bold">
            Dr Cyrielle PARMENTIER, 
            </span>{" "}
            Hôpital Armand-Trousseau, Paris
          </span>
        </li>
        <li className="mb-4">
          <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
          L’utilisation du SNDS pour mieux estimer les dépenses de santé par pathologie
          </h4>
          <span className="text-secondary dark:text-black mb-4">
            <span className="text-secondary dark:text-black text-sm md:text-base gotham-bold">
            M. Antoine RACHAS, 
            </span>{" "}
            Caisse nationale de l'Assurance Maladie, Paris
          </span>
        </li>
      </ul>

      <button className="gotham-bold border-2 border-[#f091a9] dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6">
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
          to="/Programme"
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

export default Session7;
