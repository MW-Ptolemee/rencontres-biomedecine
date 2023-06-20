import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";

const Session6 = ({ textSize }) => {
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
          Jeudi 12 octobre
        </h4>
        <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">16h00 {`>`} 17h30</p>
      </div>

      <h2 className="md:text-4xl text-[#ef8661] dark:text-black gotham-bold mb-4">
      Innovation dans la greffe de tissus : focus sur la cornée 
      </h2>


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
        Banque Française des Yeux, Paris
        </span>
      </p>

      <p className={`${textSize} space-x-2 mb-6`}>
      
          <span className="text-secondary dark:text-black mb-4">
            <span className="text-secondary dark:text-black text-sm md:text-base gotham-bold">
            Pr Gilles THURET,{" "}  
            </span>
            CHU de Saint Etienne
          </span>
          <span className="text-secondary dark:text-black mb-4">
            <span className="text-secondary dark:text-black text-sm md:text-base gotham-bold">
            <br />Pr Vincent BORDERIE,{" "}  
            </span>
            Centre Ophtalmologique National des Quinze-Vingt, Paris
          </span>
          <span className="text-secondary dark:text-black mb-4">
            <span className="text-secondary dark:text-black text-sm md:text-base gotham-bold">
            <br />Pr Eric GABISON,{" "}  
            </span>
            Fondation Ophtalmologique Rothschild, Paris
          </span>
          </p>
        
       
      

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
