import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";

const Session6 = ({ textSize }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="px-2 md:container py-8 space-y-8">
    {/* <TtsButton /> */}
    
    <div>
      <div className="flex flex-wrap items-center mb-4">
        <button className="bg-[#ef8661] mr-4 dark:bg-black flex items-center text-white dark:text-white text-[10px] md:text-base py-2 px-1 md:px-4 gotham-bold">
          <span
            className={`w-max ${
              textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
            }`}
          >
            RECHERCHE & INNOVATIONS
          </span>
        </button>
        <h4 className="text-sm md:text-xl mr-4 gotham-bold text-secondary dark:text-black pr-4 border-r-[4px] border-[#ef8661] dark:border-black">
          Jeudi 12 octobre
        </h4>
        <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">16h00 {`>`} 17h30</p>
      </div>

      <h2 className="md:text-4xl text-[#ef8661] dark:text-black gotham-bold mb-4">
      Innovation dans la greffe de tissus : focus sur la cornée 
      </h2>

      <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
      Le prélèvement des tissus cornéens chez des donneurs reste, aujourd’hui encore, 
      le traitement de référence pour restaurer la vue dans certaines pathologies. 
      Cependant, de grands progrès sont accomplis chaque jour par les chercheurs dans ce domaine. 
      L’occasion nous est donnée dans cette session de comprendre comment nous pourrions améliorer l’accès à 
      la greffe de cornée en modifiant sa conservation, découvrir les avancées en thérapie cellulaire et discuter 
      des utilisations thérapeutiques de «&nbsp;la cornée artificielle » … Préparez vos questions, le débat sera passionnant !
        </p> 

        <hr className="border border-[#b3b3b3] dark:border-black mb-4" />

      <p className={`${textSize} space-x-2 mb-6`}>
        <span className="text-[#ef8661] dark:text-black gotham-bold">
          Modération :
        </span>
        <span className="text-secondary dark:text-black gotham-bold">
        Dr Isabelle MARTINACHE,
        </span>
        <span className="text-secondary dark:text-black">
        Agence de la biomédecine et
        </span>
        <span className="text-secondary dark:text-black gotham-bold">
        Pr Marc MURAINE,
        </span>
        <span className="text-secondary dark:text-black">
        CHU de Rouen, Hôpital Charles Nicolle, association Banque Française des Yeux, Paris
        </span>
      </p>

      <ul className="list-dsc list-disc text-[#ef8661] dark:text-black mb-8">
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Amélioration de la conservation des cornées : Active Storage Machine</h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Pr Gilles THURET, 
              </span>{" "}
              CHU Saint-Étienne et laboratoire "Biologie, ingénierie et imagerie pour l'Ophtalmologie, BiiO", Université Jean Monnet, Saint-Étienne
            </span>
          </li>
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Thérapie cellulaire en ophtalmologie
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Pr Vincent BORDERIE,
              </span>{" "}
              Hôpital National des 15-20, Paris
            </span>
          </li>
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Alternatives à la greffe : cornée artificielle et endothélium synthétique
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Pr Eric GABISON,
              </span>{" "}
              Fondation Ophtalmologique Rothschild, Université Paris cité
            </span>
          </li>
        </ul>
        
       
      

      <button className="gotham-bold border-2 border-[#ef8661] dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-[#ef8661] hover:text-white dark:hover:bg-black dark:hover:text-white">
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

export default Session6;
