import React from "react";
import TtsButton from "../components/Button/TtsButton";
import Session from "../components/Session";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { octSession, octSession2 } from "../components/Data";

const Oct = ({ handleText }) => {
  const textSize = "text-xl md:text-2xl";
  window.scrollTo({ top: 0, behavior: "auto" });
  return (
    <div className="px-2 md:container py-8">
      {/* <TtsButton /> */}

      <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
        <Title title="PROGRAMME" />

        <div className="flex">
          <Link
            to="/Programme"
            className="border-[3px] border-program-button dark:border-black hover:bg-program-button duration-100 transition-all dark:bg-black flex items-center space-x-1 md:space-x-2 text-secondary dark:text-white text-[10px] md:text-base py-1 px-1 md:px-4 font-bold mr-[1px] md:mr-[8px]"
          >
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
            <span
              className={`w-max ${
                textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
              }`}
            >
              Jeudi 12 octobre
            </span>
          </Link>
          <Link
            to="/vendredi-13-octobre"
            className="bg-secondary dark:bg-black flex items-center space-x-1 md:space-x-2 text-white dark:text-white text-[10px] md:text-base py-1 px-1 md:px-4 font-bold"
          >
            <span
              className={`w-max ${
                textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
              }`}
            >
              Vendredi 13 octobre
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-8 md:h-8 -mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="mb-4 md:mb-8">
        <div className="bg-program-button dark:bg-black p-4 md:p-8">
          <div className="flex flex-row items-center gap-8 text-sm md:text-base text-secondary mb-4 ">
            <p className="dark:text-white">08h30 {">"} 10h00</p>
            <h1 className="gotham-bold dark:text-white md:text-xl">Sessions parallèles</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-4">
          <Session
            data={octSession}
            handleText={handleText}
            textSize={textSize}
          />












          </div>
        </div>

        <div className="flex flex-row md:items-center space-x-8 text-sm md:text-base text-secondary p-4 md:p-8">
          <p className="">10h00 {">"} 10h30</p>
          <p>Pause </p>
        </div>

        <div className="bg-program-button dark:bg-black p-4 md:p-8">
          <div className="flex flex-row items-center gap-8 text-sm md:text-base text-secondary mb-4 ">
            <p className="dark:text-white">10h30 {">"} 12h00</p>
            <h1
              className={`${
                textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
              } dark:text-white md:text-xl`}
            >
              Sessions parallèles
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-4">

 

          <Session
            data={octSession2}
            handleText={handleText}
            textSize={textSize}
          />







          </div>
        </div>
      </div>

      <div className="flex flex-row gap-8 bg-program-button dark:bg-black text-sm md:text-base text-secondary dark:text-white p-4 md:p-8 mb-4 ">
        <p className="">12h15 {">"} 13h00</p>

        <div className="w-[50%] md:w-max text-start flex flex-col">
          <p
            className={`${
              textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
            } mb-2 md:mb-0 md:text-xl`}
          >
            Conférence de clôture
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:gap-8">
            <p
              className={`${
                textSize === "text-xl md:text-2xl" ? `gotham` : ``
              } mb-2 md:mb-0`}
            >
               <span className="text-secondary dark:text-white gotham-bold">
              Pr Jean-François DELFRAISSY,{" "}
              </span>
             
              président du Comité consultatif national d'éthique <br/> 
              pour les sciences de la vie et de la santé
              
              </p>
              <a href="https://www.youtube.com/watch?v=E5OIwJGmk2Y&list=PLOOURn-ifRuStQm6iyXQuQb3ND4R5jltT&index=18" target="_blank"> <button className="w-max flex items-center border-2 font-bold border-secondary dark:border-white px-3 py-2  hover:bg-secondary hover:text-white dark:hover:bg-white dark:hover:text-black">
            <span className="text-[10px] md:text-[14px] mr-1 md:mr-2">
             VOIR LA VIDÉO         
            </span>
          </button>
          </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-8 bg-program-button dark:bg-black text-sm md:text-base text-secondary dark:text-white p-4 md:p-8 mb-4 ">
        <p className="">13h00 {">"} 13h20 </p>

        <div className="w-[50%] md:w-max text-start flex flex-col">
          <p
            className={`${
              textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
            } mb-2 md:mb-0 md:text-xl`}
          >
            Prise de parole
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:gap-2">
            <p
              className={`${
                textSize === "text-xl md:text-2xl" ? `gotham` : ``
              } mb-2 md:mb-0`}
            >
           
            <span className="text-secondary dark:text-white gotham-bold">
            Madame Agnès FIRMIN LE BODO,{" "}
              </span>
             
              ministre déléguée chargée de l’Organisation territoriale et des Professions de santé
             </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row md:items-center space-x-8 text-sm md:text-base text-secondary p-4 md:p-8">
          <p className="">Jusqu’à 14h30</p>
          <p>Cocktail déjeunatoire </p>
        </div>

        <div className="md:flex justify-center items-center">
        <div></div>
        {/* <a href="https://ptolemee.fr/rencontres-biomedecine/PROGRAMME-RBM-2023.pdf" target="_blank">
        <button className="relative flex items-center space-x-2 text-secondary dark:text-black font-bold border-[2px] border-primary dark:border-black px-4 py-2">
          <span className="text-xs">TÉLÉCHARGER LE PROGRAMME </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-primary dark:text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </button>
        </a> */}
      </div> 
    </div>
  );
};

export default Oct;
