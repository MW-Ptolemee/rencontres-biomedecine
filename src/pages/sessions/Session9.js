import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";

const Session9 = ({ textSize }) => {
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
          <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">08h30 {`>`} 10h00</p>
        </div>

        <h2 className="md:text-4xl text-[#a1c517] dark:text-black gotham-bold mb-4">
        Perspectives dans le champ des diagnostics en période anténatale
        </h2>

        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        Les avancées technologiques dans le champ de la génétique permettent une analyse rapide, globale et fiable, 
        à partir de faibles quantités d’ADN. Trois experts exposeront les opportunités d’application de telles analyses 
        génétiques en matière de diagnostic prénatal. En premier lieu, à partir de quelques cellules recueillies très précocement 
        sur l’embryon cultivé <i>in vitro</i>, dans l’optique de l’amélioration technique du diagnostic préimplantatoire. 
        Puis, à partir de l’ADN libre fœtal circulant dans le sang maternel en tout début de la grossesse, pour contribuer 
        au diagnostic non invasif lors de grossesses à risque connu de maladie monogénique. Enfin, sur les cellules fœtales 
        prélevées <i>in utero</i> lors d’un signe d’appel échographique afin d’identifier une cause génétique à l’affection dont 
        est atteint le fœtus et d’adapter le suivi de la grossesse. Les avantages et les limites de ces nouveaux outils 
        d’analyse génomique seront particulièrement débattus dans le contexte spécifique de la médecine fœtale. 
        </p> 

        <hr className="border border-[#b3b3b3] dark:border-black mb-4" />

        <p className={`${textSize} space-x-2 mb-6`}>
          <span className="text-[#a1c517] dark:text-black gotham-bold">
            Modération :
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
          Dr Bénédicte DEMEER,
          </span>
          <span className="text-secondary dark:text-black">
          Agence de la biomédecine et
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
          Pr Véronique HOUFFLIN DEBARGE,
          </span>
          <span className="text-secondary dark:text-black">
          CHU de Lille
          </span>
        </p>

        <ul className="list-dsc list-disc text-[#a1c517] dark:text-black mb-8">
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            L’utilisation d’outils pangénomiques pour le diagnostic préimplantatoire dans le contexte de la réglementation française</h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Pr Pierre RAY, 
              </span>{" "}
              CHU de Grenoble Alpes
            </span>
          </li>
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Les avancées du diagnostic prénatal non invasif des maladies monogéniques
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Dr Juliette NECTOUX,
              </span>{" "}
              Hôpital Cochin, Paris
            </span>
          </li>
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Séquençage d’exome : quels apport et enjeux en diagnostic prénatal ?
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Pr Tania ATTIE-BITACH,
              </span>{" "}
              Hôpital Necker-Enfants Malades, Paris
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

export default Session9;
