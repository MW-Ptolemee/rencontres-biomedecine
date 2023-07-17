import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";

const Session10 = ({ textSize }) => {
  
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="px-2 md:container py-8 space-y-8">
      {/* <TtsButton /> */}

      <div>
        <div className="flex flex-wrap items-center mb-4">
          <button className="bg-[#a1c517] mr-4 dark:bg-black flex items-center text-white dark:text-white text-[10px] md:text-base py-2 px-1 md:px-4 font-bold">
            <span
              className={`w-max ${
                textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
              }`}
            >
              PARCOURS DE SOIN
            </span>
          </button>
          <h4 className="text-sm md:text-xl mr-4 gotham-bold text-secondary dark:text-black pr-4 border-r-[4px] border-[#a1c517] dark:border-black">
            Vendredi 13 octobre
          </h4>
          <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">10h30 {`>`} 12h00</p>
        </div>

        <h2 className="md:text-4xl text-[#a1c517] dark:text-black gotham-bold mb-4">
        L'AMP pour les femmes seules : quel accompagnement vers la parentalité ?
        </h2>

        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        La loi de bioéthique du 2 août 2021 a ouvert l’Assistance médicale à la procréation (AMP) aux femmes non mariées. 
        Si cette opportunité de fonder une famille a été pleinement réfléchie lors de la préparation de la loi et lors 
        du débat parlementaire, il importe maintenant de se tourner vers sa mise en œuvre effective tant du point 
        de vue des professionnels de santé que des personnes ayant recours à une telle approche. 
        La session réunira un praticien de l'AMP, responsable d'un centre de don de gamètes, en contact régulier avec les personnes demandeuses, 
        une représentante de l'association accompagnant les mamans et les futures mamans solos et un praticien de la petite enfance. 
        Chacune apportera son expérience dont le fruit commun permettra de bâtir un chemin fiable et serein pour fonder une famille. 
        </p> 

        <hr className="border border-[#b3b3b3] dark:border-black mb-4" />

        <p className={`${textSize} space-x-2 mb-6`}>
          <span className="text-[#a1c517] dark:text-black gotham-bold">
            Modération :
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
          Pr Philippe JONVEAUX,
          </span>
          <span className="text-secondary dark:text-black">
          Agence de la biomédecine < br/>et
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
          Dr Sarah BYDLOWSKI,
          </span>
          <span className="text-secondary dark:text-black">
          Association de Santé Mentale du XIII<sup>ème</sup> arrondissement de Paris (ASM13) et< br/>Université de Paris Cité, Boulogne-Billancourt
          </span>
          
        </p>

        <ul className="list-dsc list-disc text-[#a1c517] dark:text-black mb-8">
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            L’accompagnement et le rôle des professionnels de l’AMP auprès d’un nouveau public</h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Pr Rachel LEVY, 
              </span>{" "}
              CECOS, Hôpital Tenon, AP-HP, Sorbonne Université, Paris
            </span>
          </li>
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            La maternité solo : une vision de la parentalité
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Mme Margaux GANDELON,
              </span>{" "}
              Association Mam’en Solo
            </span>
          </li>
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Le rôle de la parentalité dans la petite enfance
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Pr Brigitte CHABROL,
              </span>{" "}
              Hôpital Timone Enfants, Marseille
            </span>
          </li>
        </ul>

        

        <button className="gotham-bold border-2 border-[#a1c517] dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-[#a1c517] hover:text-white dark:hover:bg-black dark:hover:text-white">
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

export default Session10;
