import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";


const SessionPleniere = ({ textSize }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="px-2 md:container py-8 space-y-8">
      {/* <TtsButton /> */}

      <div>
        <div className="flex flex-wrap items-center mb-4">
        <button className="bg-secondary mr-4 dark:bg-black flex items-center text-white dark:text-white text-[10px] md:text-base py-2 px-1 md:px-4 gotham-bold">
            <span
              className={`w-max ${
                textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
              }`}
            >
              PLÉNIÈRE
            </span>
          </button>
          <h4 className="text-sm md:text-xl mr-4 gotham-bold text-secondary dark:text-black pr-4 border-r-[4px] border-secondary dark:border-black">
            Jeudi 12 octobre
          </h4>
          <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">10h00 {`>`} 10h30</p>
        </div>

        <h2 className="md:text-4xl text-secondary dark:text-black gotham-bold mb-4">
        Ouverture officielle
        </h2>

        <p className={`${textSize} space-x-2 mb-6`}>
        <span className="text-secondary dark:text-black">
            Discours de
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
            Mme Marine JEANTET,
          </span>
          <span className="text-secondary dark:text-black">
            directrice de l’Agence de la biomédecine
          </span>
         <span className="text-secondary dark:text-black">
         <br />Discours du
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
          Pr Michel TSIMARATOS,
          </span>
          <span className="text-secondary dark:text-black">
          directeur général adjoint en charge des stratégies médicales et scientifiques de l’Agence de la biomédecine
          </span>
        </p>
        {/* <button className="gotham-bold border-2 border-secondary dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-secondary hover:text-white dark:hover:bg-black dark:hover:text-white">
          <Link
            to="/Inscription"
            className={`w-max ${
              textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
            }`}
          >
            Je m’inscris aux Rencontres
          </Link>
        </button> */}

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

export default SessionPleniere;
