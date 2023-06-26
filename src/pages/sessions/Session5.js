import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";

const Session5 = ({ textSize }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="px-2 md:container py-8 space-y-8">
    {/* <TtsButton /> */}

    <div>
      <div className="flex flex-wrap items-center mb-4">
        <button className="bg-primary mr-4 dark:bg-black flex items-center text-white dark:text-white text-[10px] md:text-base py-2 px-1 md:px-4 font-bold">
          <span
            className={`w-max ${
              textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
            }`}
          >
            SCIENCE & ÉTHIQUE
          </span>
        </button>
        <h4 className="text-sm md:text-xl mr-4 gotham-bold text-secondary dark:text-black pr-4 border-r-[4px] border-primary dark:border-black">
          Jeudi 12 octobre
        </h4>
        <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">16h00 {`>`} 17h30</p>
      </div>


      


      <h2 className="md:text-4xl text-primary dark:text-black gotham-bold mb-4">
      Les organoïdes : état des lieux, perspectives et questionnements éthiques
      </h2>

      <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
      Le terme organoïde désigne un assemblage tridimensionnel d’un ou plusieurs types cellulaires, qui mime la micro-anatomie d’un organe et assure, 
      {" "} <i>in vitro</i>, une ou plusieurs de ses fonctions. Le comportement de cet assemblage de cellules, qui mime le fonctionnement physiologique 
      d’un organe, fait des organoïdes un des nouveaux outils de prédilection de la recherche en biologie, avec des applications thérapeutiques envisageables à terme.{" "}  
      <span className="text-secondary dark:text-black gotham-bold">Mme Antonietta MESSINA</span> présentera l’état des recherches sur les organoïdes de foie. Certains organoïdes soulèvent des questions éthiques inédites 
      qui font actuellement l’objet de réflexions : il s’agit notamment des organoïdes neuraux. <span className="text-secondary dark:text-black gotham-bold">M. Olivier GOUREAU</span> présentera l’exemple des organoïdes de rétine 
      et le <span className="text-secondary dark:text-black gotham-bold">Pr Hervé CHNEIWEISS</span> exposera l’état des réflexions éthiques autour de ces modèles.
      </p>

      <hr className="border border-[#b3b3b3] dark:border-black mb-4" />

      <p className={`${textSize} space-x-2 mb-6`}>
        <span className="text-primary dark:text-black gotham-bold">
          Modération :{" "} 
        </span>
        <span className="text-secondary dark:text-black gotham-bold">
        Pr Jérôme LARGHERO,
        </span>
        <span className="text-secondary dark:text-black">
         Unité de Thérapie Cellulaire et Centre MEARY de Thérapie Cellulaire et Génique,<br />Hôpital Saint-Louis, Paris et
        </span>
        <span className="text-secondary dark:text-black gotham-bold">
         M. Frank YATES,
        </span>
        <span className="text-secondary dark:text-black">
        SupBiotech, Villejuif et CEA/SupBiotech, Fontenay-aux-Roses
        </span>
      </p>

      <ul className="list-dsc list-disc text-primary dark:text-black mb-8">
        <li className="ml-4 mb-4">
          <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
          Organes hépatiques pour la biologie et la médecine</h4>
          <span className={`${textSize} text-secondary dark:text-black mb-4`}>
            <span className="text-secondary dark:text-black gotham-bold">
            Mme Antonietta MESSINA,{" "}  
            </span>
            Inserm, CHU Paul Brousse, Villejuif
          </span>
        </li>
        <li className="ml-4 mb-4">
          <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
          Les organoïdes neuraux : exemple de la rétine
          </h4>
          <span className={`${textSize} text-secondary dark:text-black mb-4`}>
            <span className="text-secondary dark:text-black gotham-bold">
            M. Olivier GOUREAU,{" "} 
            </span>
            Inserm, Institut de la vision – Sorbonne Université, Paris
          </span>
        </li>
        <li className="ml-4 mb-4">
          <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
          Enjeux éthiques liés à la recherche sur les organoïdes
          </h4>
          <span className={`${textSize} text-secondary dark:text-black mb-4`}>
            <span className="text-secondary dark:text-black gotham-bold">
            Pr Hervé CHNEIWEISS,{" "} 
            </span>
            Inserm, Institut du cerveau, Paris
          </span>
        </li>
      </ul>

      <button className="gotham-bold border-2 border-primary dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-primary hover:text-white dark:hover:bg-black dark:hover:text-white">
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

export default Session5;
