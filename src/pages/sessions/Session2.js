import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";

const Session2 = ({ textSize }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="px-2 md:container py-8 space-y-8">
      {/* <TtsButton /> */}

      <div>
        <div className="flex flex-wrap items-center mb-4">
          <button className="bg-[#a1c517] mr-4 dark:bg-black flex items-center text-white dark:text-white text-[10px] md:text-base py-2 px-1 md:px-4 gotham-bold">
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
        Le parcours de soin post-greffe de CSH
        </h2>

       <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
       L’allogreffe de cellules souches hématopoïétiques (CSH) est une stratégie thérapeutique curative de nombreuses pathologies hématologiques. 
       Cependant, la prise en charge du patient se poursuit plusieurs mois après la greffe. 
       Cette session s’intéresse à la période post-greffe de CSH, quand les patients reprennent leur vie, mise entre parenthèse pendant la maladie, tout en gérant les conséquences de la greffe. 
       Le rôle des structures associatives dans le parcours post greffe sera évoqué. Un projet pilote de structuration du suivi post allogreffe à long terme sera présenté, 
       puis les perspectives ouvertes par la possibilité de recueillir des données de suivi dans la base nationale de données de santé (SNDS) abordées.
        </p>

        <hr className="border border-[#b3b3b3] dark:border-black mb-4" />

        <p className={`${textSize} space-x-2 mb-6`}>
          <span className="text-[#a1c517] dark:text-black gotham-bold">
            Modération :
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
          Mme Catherine BOUVIER-BAUER, 
          </span>
          <span className="text-secondary dark:text-black">
          association RESTART et
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
          Dr Daniel HABOLD, 
          </span>
          <span className="text-secondary dark:text-black">
          ARS Nouvelle-Aquitaine
          </span>
        </p>

        <button className="gotham-bold bg-secondary dark:bg-black flex items-center space-x-1 md:space-x-2 text-white dark:text-white text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-primary hover:text-white dark:hover:bg-black dark:hover:text-white">
          {/* <svg
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
          </svg> */}
          <Link
            to="#"
            className={`w-max ${
              textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
            }`}
          >
            Voir la vidéo de la session
          </Link>
        </button>


<ul className="list-dsc list-disc text-[#a1c517] dark:text-black mb-8">
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Rôle d'une structure associative dans le parcours de soins post greffe</h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Mme Anne-Pierre PICKAERT, 
              </span>{" "}
              associations EGMOS et Laurette Fugain
            </span><br />
         
          <span className="text-secondary dark:text-black gotham-bold">
            &nbsp;
              </span>
            <a href="https://ptolemee.com/rencontres-biomedecine/12-10_14h_Le%20parcours-de-soin-post-greffe-de-CSH_PICKAERT-Anne-Pierre.pdf" target="_blank">
            <button className="gotham-bold border-2 border-[#a1c517] dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-[#a1c517] hover:text-white dark:hover:bg-black dark:hover:text-white">
      
            Voir la présentation
          
        </button>
        </a>
          </li>
         
          </ul>

          <ul className="list-dsc list-disc text-[#a1c517] dark:text-black mb-8">
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Le suivi à long terme du patient allogreffé dans la stratégie décennale
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Dr Tereza COMAN,
              </span>{" "}
              Institut Gustave Roussy, Villejuif
            </span><br />

            <span className="text-secondary dark:text-black gotham-bold">
            &nbsp;
              </span>
            <a href="https://ptolemee.com/rencontres-biomedecine/12-10_14h_Le-parcours-de-soin-post-greffe-de-CSH_COMAN-Tereza.pdf" target="_blank">
            <button className="gotham-bold border-2 border-[#a1c517] dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-[#a1c517] hover:text-white dark:hover:bg-black dark:hover:text-white">
      
            Voir la présentation
          
        </button>
        </a>
          </li>
         
          </ul>

          <ul className="list-dsc list-disc text-[#a1c517] dark:text-black mb-8">
          
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Le suivi post étude Funnel Plot
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Dr Catherine FAUCHER,
              </span>{" "}
              Agence de la biomédecine
            </span><br />
            <span className="text-secondary dark:text-black gotham-bold">
            &nbsp;
              </span>
            <a href="https://ptolemee.com/rencontres-biomedecine/12-10_14h_Le-parcours-de-soin-post-greffe-de-CSH_FAUCHER-Catherine.pdf" target="_blank">
            <button className="gotham-bold border-2 border-[#a1c517] dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-[#a1c517] hover:text-white dark:hover:bg-black dark:hover:text-white">
      
            Voir la présentation
          
        </button>
        </a>
          </li>
         
          </ul>
        

        {/* <button className="gotham-bold border-2 border-[#a1c517] dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-[#a1c517] hover:text-white dark:hover:bg-black dark:hover:text-white">
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

export default Session2;
