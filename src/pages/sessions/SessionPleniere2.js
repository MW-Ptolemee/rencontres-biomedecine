import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";


const SessionPleniere2 = ({ textSize }) => {
  return (
    <div className="px-2 md:container py-8 space-y-8">
      {/* <TtsButton /> */}

      <div>
        <div className="flex flex-wrap items-center mb-4">
        <button className="bg-secondary mr-4 dark:bg-black flex items-center text-white dark:text-white text-[10px] md:text-base py-2 px-1 md:px-4 font-bold">
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
          <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">10h30 {`>`} 12h00</p>
        </div>

        <h2 className="md:text-4xl text-secondary dark:text-black gotham-bold mb-4">
        Plénière d’ouverture
        </h2>

        <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
        Table ronde - L’intelligence artificielle et éthique, <br />quels enjeux pour les domaines de la biomédecine demain ?
            </h4>

        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        Les avancées technologiques spectaculaires de l’intelligence artificielle (IA) constituent un formidable outil au service des domaines de la biomédecine. 
        Ces dernières décennies ont ainsi vu l’émergence de dispositifs innovants d’aide à la décision, 
        à la prédiction ou encore à la chirurgie. Cette table ronde sera l’occasion de mettre en lumière quelques technologies innovantes mais également de parler 
        de leurs applications sur le terrain et de la façon dont elles sont accueillies par les équipes soignantes. Ces dispositifs d’IA, porteurs de promesses et d’inquiétudes, 
        ouvrent la voie vers de nouvelles réflexions éthiques et réglementaires, que nos experts mettront en avant tout au long de la discussion. 
        <i>« La création d'une IA serait le plus grand événement de l'histoire de l'humanité. Mais il pourrait aussi être l'ultime. »</i>&nbsp;
        Cette citation de S.&nbsp;Hawking, penseur éclairé du 21<sup>e</sup> siècle, nous rappelle que l’IA peut révolutionner notre monde mais 
        qu’il faut rester vigilant et veiller à ce qu’elle soit utilisée à bonne escient.
        </p>

        <hr className="border border-[#b3b3b3] dark:border-black mb-4" />    

        <ul className={`${textSize} list-dsc list-disc text-primary dark:text-black mb-8`}>      
            <span className="text-secondary dark:text-black mb-4">
              <span className="text-secondary dark:text-black gotham-bold">
              M. Claude KIRCHNER,
              </span>{" "}
              directeur du Comité national pilote d’éthique du numérique, membre du CCNE, directeur de recherche émérite d’Inria
            </span>
            <span className="text-secondary dark:text-black mb-4">
              <span className="text-secondary dark:text-black gotham-bold">
              <br />Pr Alexandre LOUPY,
              </span>{" "}
              professeur de néphrologie et d’épidémiologie, hôpital Necker-Enfants malades et directeur de l’équipe « Approches multidimensionnelles en transplantation d'organes » au Centre de recherche PARCC INSERM
            </span>
            <span className="text-secondary dark:text-black mb-4">
              <span className="text-secondary dark:text-black gotham-bold">
              <br />M. Bertrand PAILHÈS,
              </span>{" "}
              directeur des technologies et de l’innovation de la CNIL
            </span>
            <span className="text-secondary dark:text-black mb-4">
              <span className="text-secondary dark:text-black gotham-bold">
              <br />Pr Catherine RONGIÈRES,
              </span>{" "}
              professeur Université de Strasbourg, responsable adjoint du pôle de Gynécologie Obstétrique et Fertilité, chef du Service Clinico Biologique d’AMP des Hôpitaux universitaires de Strasbourg
            </span>
            <span className="text-secondary dark:text-black mb-4">
              <span className="text-secondary dark:text-black gotham-bold">
              <br />Mme Marine JEANTET,
              </span>{" "}
              directrice générale de l’Agence de la biomédecine
            </span>
         
          
        </ul>
        <p className={`${textSize} space-x-2 mb-6`}>
        <span className="text-secondary dark:text-black">
        Animation par
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
          Mme Danielle MESSAGER,
          </span>
          <span className="text-secondary dark:text-black">
            journaliste (France Inter)
          </span>
        </p>

        <button className="gotham-bold border-2 border-secondary dark:border-black dark:bg-white flex items-center text-secondary gotham-bold dark:text-black text-sm md:text-base py-2 px-4 font-bold mb-4 md:mb-6 hover:bg-secondary hover:text-white dark:hover:bg-black dark:hover:text-white">
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

export default SessionPleniere2;
