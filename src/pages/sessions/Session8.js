import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";

const Session8 = ({ textSize }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="px-2 md:container py-8 space-y-8">
      {/* <TtsButton /> */}

      <div>
        <div className="flex flex-wrap items-center mb-4">
          <button className="bg-[#00a895] mr-4 dark:bg-black flex items-center text-white dark:text-white text-[10px] md:text-base py-2 px-1 md:px-4 gotham-bold">
            <span
              className={`w-max ${
                textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
              }`}
            >
              PRATIQUES MÉDICALES
            </span>
          </button>
          <h4 className="text-sm md:text-xl mr-4 gotham-bold text-secondary dark:text-black pr-4 border-r-[4px] border-[#00a895] dark:border-black">
            Jeudi 12 octobre
          </h4>
          <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">
            16h00 {`>`} 17h30
          </p>
        </div>

        <h2 className="md:text-4xl text-[#00a895] dark:text-black gotham-bold mb-4">
        Les enjeux d’une collaboration européenne renforcée dans le don et la transplantation
        </h2>

        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        Les États membres de l'Union Européenne et du Conseil de l'Europe partagent des principes fondamentaux en matière de transplantation, 
        tels que l'éthique du don, l'équité de l'accès aux soins et la solidarité. Ces principes sont notamment portés par les instances européennes au travers de conventions, 
        règlements, directives et recommandations. Le partage de ces valeurs a permis la mise en place de coopérations entre États dans le cadre de projets soutenus 
        par la Commission européenne ou d'alliances, telle que la South Alliance for Transplant (SAT) regroupant les pays du sud de l’Europe (Espagne, France, Grèce, Italie, Portugal, République Tchèque et Suisse). 
        Plusieurs exemples de collaborations seront présentés au cours de cette session. <span className="text-secondary dark:text-black gotham-bold">Dr Vincent KARAM</span> et <span className="text-secondary dark:text-black gotham-bold">Mme Rita PITEIRA</span> parleront de deux projets, BRAVEST et EGALITE, 
        visant à tirer les leçons de la crise Covid au niveau européen. Le <span className="text-secondary dark:text-black gotham-bold">Dr Beatriz DOMINGUEZ</span> évoquera le programme de don croisé de rein mis en place au sein de l'alliance SAT. 
        Enfin, le <span className="text-secondary dark:text-black gotham-bold">Dr Franz IMMER</span> dressera un état des lieux de la plateforme d'échanges d'organes européenne Foedus.
      </p>

      <hr className="border border-[#b3b3b3] dark:border-black mb-4" />



        <p className={`${textSize} space-x-2 mb-6`}>
          <span className="text-[#00a895] dark:text-black gotham-bold">
            Modération :
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
          Pr Emanuele COZZI,
          </span>
          <span className="text-secondary dark:text-black">
          Padua University Hospital, Italie et
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
          Pr Michel TSIMARATOS,
          </span>
          <span className="text-secondary dark:text-black">
          Directeur général adjoint en charge des stratégies médicales et scientifiques, Agence de la biomédecine 
          </span>
          
        </p>


        <a href="https://www.youtube.com/watch?v=0IHBaQKso-A&list=PLOOURn-ifRuStQm6iyXQuQb3ND4R5jltT&index=5" target="_blank">
            <button className="gotham-bold border-2 bg-secondary border-secondary hover:border-primary dark:border-black dark:bg-white flex items-center text-white gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-primary hover:text-white dark:hover:bg-black dark:hover:text-white">
      
            Voir la vidéo de la session
          
        </button>
        </a>

        <ul className="list-dsc list-disc text-[#00a895] dark:text-black mb-8">
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Les leçons de la crise Covid – l’anticipation de potentielles crises sanitaires
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              Projet BRAVEST :{" "}
              <span className="text-secondary dark:text-black gotham-bold">
              Dr Vincent KARAM,
              </span>{" "}
              ESOT Registries General Manager, European Society for Organ Transplantation,<br />Amsterdam, Pays-Bas 
            </span>
            <br />
         
         <span className="text-secondary dark:text-black gotham-bold">
           &nbsp;
             </span>
           <a href="https://ptolemee.com/rencontres-biomedecine/12-10_16h_Les-enjeux-dune-collaboration-europeenne_KARAM-Vincent.pdf" target="_blank">
           <button className="gotham-bold border-2 border-[#00a895] dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-[#00a895] hover:text-white dark:hover:bg-black dark:hover:text-white">
     
           Voir la présentation
         
       </button>
       </a>
         
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              Projet EGALITE :{" "}
              <span className="text-secondary dark:text-black gotham-bold">
              Mme Rita PITEIRA,
              </span>{" "}
              Barcelona Tissue Bank, Espagne <br />
            </span>
            
         
         <span className="text-secondary dark:text-black gotham-bold">
           &nbsp;
             </span>
           <a href="https://ptolemee.com/rencontres-biomedecine/12-10_16h_Les-enjeux-dune-collaboration-europeenne_PITEIRA-Rita.pdf" target="_blank">
           <button className="gotham-bold border-2 border-[#00a895] dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-[#00a895] hover:text-white dark:hover:bg-black dark:hover:text-white">
     
           Voir la présentation
         
       </button>
       </a>
          </li>
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Collaboration internationale dans le domaine du don croisé de rein : l’exemple de la South Alliance for&nbsp;Transplantation{" "}
            
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Dr Beatriz DOMINGUEZ-GIL,
              </span>{" "}
              Organizacion Nacional de Transplantes, Madrid, Espagne
            </span>
          </li>
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Plateforme FOEDUS – Bilan depuis 2015 
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black gotham-bold">
              Dr Franz IMMER,
              </span>{" "}
              Swisstransplant, Berne, Suisse et président de Foedus
            </span>
            <br />
         
         <span className="text-secondary dark:text-black gotham-bold">
           &nbsp;
             </span>
           <a href="https://ptolemee.com/rencontres-biomedecine/12-10_16h_Les-enjeux-dune-collaboration-europeenne_IMMER-Franz.pdf" target="_blank">
           <button className="gotham-bold border-2 border-[#00a895] dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-[#00a895] hover:text-white dark:hover:bg-black dark:hover:text-white">
     
           Voir la présentation
         
       </button>
       </a>
         </li>
        
         </ul>

        <p className="space-x-2 mb-6">
          <span className="text-secondary dark:text-black">
          *Session en anglais, une traduction vous sera proposée.
          </span>
          <span className="text-secondary dark:text-black">
          <i>Session in English, translation available.</i>
          </span>
        </p>

        {/* <button className="gotham-bold border-2 border-[#00a895] dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-[#00a895] hover:text-white dark:hover:bg-black dark:hover:text-white">
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

export default Session8;
