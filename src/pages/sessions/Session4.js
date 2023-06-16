import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";

const Session4 = ({ textSize }) => {
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
          Jeudi 12 octobre
        </h4>
        <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">14h00 {`>`} 15h30</p>
      </div>

      <h2 className="md:text-4xl text-[#a1c517] dark:text-black gotham-bold mb-4">
      Examen génétique : quel accès aux soins dans un contexte technologique évolutif ?
      </h2>

      

      <p className="space-x-2 mb-6">
        <span className="text-[#a1c517] dark:text-black gotham-bold">
          Modération :
        </span>
        <span className="text-secondary dark:text-black gotham-bold">
        Dr Pascale LEVY,
        </span>
        <span className="text-secondary dark:text-black">
        Agence de la biomédecine et
        </span>
        <span className="text-secondary dark:text-black gotham-bold">
        Pr Daniel SHERMAN,
        </span>
        <span className="text-secondary dark:text-black">
        Fondation maladies rares
        </span>
      </p>

      <ul className="list-dsc list-disc text-[#a1c517] dark:text-black mb-8">
        <li className="mb-4">
          <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
          Les nouveaux accès, les nouveaux besoins : état des lieux des évolutions technologiques, du panel aux tests fonctionnels en passant par le génome </h4>
          <span className="text-secondary dark:text-black mb-4">
            <span className="text-secondary dark:text-black text-sm md:text-base gotham-bold">
            Pr Stanislas LYONNET,{" "} 
            </span>
            Institut Imagine, Paris
          </span>
        </li>
        <li className="mb-4">
          <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
          Enjeux des études en sciences humaines et sociales pour améliorer les étapes du parcours de soins en génétique
          </h4>
          <span className="text-secondary dark:text-black mb-4">
            <span className="text-secondary dark:text-black text-sm md:text-base gotham-bold">
            Mme Hélène BERRUE-GAILLARD,{" "}  
            </span>
            Alliance maladies rares et Maladies Rares Infos
          </span>
        </li>
        <li className="mb-4">
          <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
          Vers un remboursement, impact sur la prescription des examens de génétique
          </h4>
          <span className="text-secondary dark:text-black mb-4">
            <span className="text-secondary dark:text-black text-sm md:text-base gotham-bold">
            Mme Florence JUSOT,{" "}  
            </span>
            Université Paris Dauphine
          </span>
        </li>
      </ul>

      <button className="gotham-bold border-2 border-[#a1c517] dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6">
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

export default Session4;
