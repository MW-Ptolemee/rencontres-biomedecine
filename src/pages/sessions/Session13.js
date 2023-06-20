import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";

const Session13 = ({ textSize }) => {
  return (
    <div className="px-2 md:container py-8 space-y-8">
    {/* <TtsButton /> */}
    
    <div>
      <div className="flex flex-wrap items-center mb-4">
        <button className="bg-[#ef8661] mr-4 dark:bg-black flex items-center text-white dark:text-white text-[10px] md:text-base py-2 px-1 md:px-4 font-bold">
          <span
            className={`w-max ${
              textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
            }`}
          >
            RECHERCHE & INNOVATIONS
          </span>
        </button>
        <h4 className="text-sm md:text-xl mr-4 gotham-bold text-secondary dark:text-black pr-4 border-r-[4px] border-[#ef8661] dark:border-black">
          Vendredi 13 octobre
        </h4>
        <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">10h30 {`>`} 12h00</p>
      </div>

      <h2 className="md:text-4xl text-[#ef8661] dark:text-black gotham-bold mb-4">
      Les derniers développements en matière de recherche sur les cellules souches embryonnaires / IPS 
      </h2>


      <p className={`${textSize} space-x-2 mb-6`}>
        <span className="text-[#ef8661] dark:text-black gotham-bold">
          Modération :
        </span>
        <span className="text-secondary dark:text-black gotham-bold">
        Dr Laurent DAVID,
        </span>
        <span className="text-secondary dark:text-black">
        Nantes Université, CHU Nantes, Inserm, CNRS et
        </span>
        <span className="text-secondary dark:text-black gotham-bold">
        Mme Cécile MARTINAT,
        </span>
        <span className="text-secondary dark:text-black">
        Inserm, I-Stem, Evry
        </span>
      </p>

      <ul className="list-dsc list-disc text-[#ef8661] dark:text-black mb-8">
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            États des lieux des essais cliniques en France et dans le monde</h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Pr John DE VOS, 
              </span>{" "}
              Unité de Thérapie Cellulaire, Hôpital Saint-Eloi, Montpellier et président, French Society for Stem Cell Research (FSSCR)
            </span>
          </li>
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Auto-organization de cellules souches en modèles embryonnaires humains – Blastoids, Gastruloids, etc.
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              M. Nicolas RIVRON,
              </span>{" "}
              Institute of Molecular Biotechnology, Austrian Acadmy of Sciences, Vienne, Autriche
            </span>
          </li>
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Nouvelles questions éthiques soulevées par la recherche sur les cellules souches pluripotentes 
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              M. Bernard BAERTSCHI,
              </span>{" "}
              Université de Genève et Comité d’éthique de l'Inserm
            </span>
          </li>
        </ul>
        
       
      

      <button className="gotham-bold border-2 border-[#ef8661] dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6">
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

export default Session13;
