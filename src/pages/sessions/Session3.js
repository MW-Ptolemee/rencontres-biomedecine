import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";

const Session3 = ({ textSize }) => {
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
        <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">14h00 {`>`} 15h30</p>
      </div>

      <h2 className="md:text-4xl text-[#f091a9] dark:text-black gotham-bold mb-4">
      Un pilotage innovant d’une politique de santé publique : 
      le comité de suivi de la mise en œuvre de la loi de bioéthique
      </h2>
        
          <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
          Le comité de suivi de la loi de bioéthique en matière d’Assistance médicale à la procréation (AMP) 
          traduit une expérience innovante de politique de santé publique en rassemblant les partenaires 
          impliqués dans la mise en œuvre des évolutions législatives : professionnels de santé, associations et institutionnels. 
          Cette expérience a forgé une façon de procéder qui, au fil des séances, s’est enrichie et a favorisé les échanges pour assurer 
          un suivi des sujets tant sur un plan organisationnel que réglementaire. Un praticien de centre d’AMP au cœur 
          de la pratique clinico-biologique, une représentante d’association correspondant à un nouveau public ayant recours 
          à l’AMP et un représentant de la DGS en charge des questions règlementaires de ce domaine échangeront leurs points de vue. 
          Ces visions croisées témoigneront de l’apport dans les différents champs explorés au bénéfice de la mise en œuvre effective 
          d’une loi mobilisant tous les acteurs de la démocratie sanitaire.
        </p> 

        <hr className="border border-[#b3b3b3] dark:border-black mb-4" />

        <p className={`${textSize} space-x-2 mb-6`}>
        <span className="text-[#f091a9] dark:text-black gotham-bold">
          Modération :
        </span>
        <span className="text-secondary dark:text-black gotham-bold">
        Dr Claire DE VIENNE,
        </span>{" "}
        <span className="text-secondary dark:text-black">
        Agence de la biomédecine
        </span>
      </p>

      
          <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
          Regards croisés entre différents membres du comité</h4>
          <span className={`${textSize} text-secondary dark:text-black mb-4`}>
            <span className="text-secondary dark:text-black gotham-bold">
            • Dr Sophie MIRALLIE, 
            </span>{" "}
            CHU de Nantes
          </span>{" "}
          <span className={`${textSize} text-secondary dark:text-black mb-4`}>
            <span className="text-secondary dark:text-black gotham-bold">
            <br /> • M. Laurent BUTOR, 
            </span>{" "}
            direction générale de la santé, Paris
          </span>
          <span className={`${textSize} text-secondary dark:text-black mb-4`} >
          
            <br />• Un représentant d’une association membre du comité <br /><br />
          </span>
         

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

export default Session3;
