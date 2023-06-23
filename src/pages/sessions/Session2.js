import React from "react";
import { Link } from "react-router-dom";
import TtsButton from "../../components/Button/TtsButton";

const Session2 = ({ textSize }) => {
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
          <p className="text-secondary dark:text-black text-sm md:text-xl py-4 md:ml-0">14h00 {`>`} 15h00</p>
        </div>

        <h2 className="md:text-4xl text-[#a1c517] dark:text-black gotham-bold mb-4">
        Le parcours de soin post-greffe de CSH
        </h2>

        {/* <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum,
          leo nec pharetra sodales, enim nisl euismod ante, vel rhoncus enim
          sapien faucibus sapien. Fusce dignissim sit amet risus fringilla
          egestas. Quisque et mi non augue fringilla condimentum in quis elit.
          Curabitur et euismod metus, a tempor magna. Phasellus non venenatis
          enim, sit amet convallis felis. Sed urna leo, faucibus nec nibh
          dictum, vestibulum faucibus orci. Nunc purus eros, ultricies eu
          gravida non, tincidunt vel urna. Mauris in tempor nibh. Aliquam
          molestie ut eros sit amet accumsan. Aliquam ac tincidunt nisi. Fusce
          et eleifend ligula. Phasellus rhoncus mauris vel interdum fermentum.
          Fusce iaculis fermentum ornare. Integer iaculis blandit auctor.
          Integer vestibulum augue quis porttitor tempo
        </p>

        <hr className="border border-[#b3b3b3] dark:border-black mb-4" /> */}

        <p className={`${textSize} space-x-2 mb-6`}>
          <span className="text-[#a1c517] dark:text-black gotham-bold">
            Modération :
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
          Mme Catherine BAUER, 
          </span>
          <span className="text-secondary dark:text-black">
          association RESTART et
          </span>
          <span className="text-secondary dark:text-black gotham-bold">
          Dr Daniel HABOLD, 
          </span>
          <span className="text-secondary dark:text-black">
          ARS Nouvelle Aquitaine
          </span>
        </p>

<ul className="list-dsc list-disc text-[#a1c517] dark:text-black mb-8">
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Rôle d'une structure associative dans le parcours de soins post greffe</h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black text-sm md:text-base gotham-bold">
              Mme Anne-Pierre PICKAERT, 
              </span>{" "}
              associations EGMOS et Laurette Fugain
            </span>
          </li>
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Le parcours du patient cancéreux dans la stratégie décennale
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black text-sm md:text-base gotham-bold">
              Dr Tereza COMAN,
              </span>{" "}
              Département d'Hématologie, Institut Gustave Roussy, Villejuif
            </span>
          </li>
          <li className="ml-4 mb-4">
            <h4 className="text-secondary dark:text-black md:text-2xl gotham-bold mb-2">
            Le parcours du patient cancéreux dans la stratégie décennale
            </h4>
            <span className={`${textSize} text-secondary dark:text-black mb-4`}>
              <span className="text-secondary dark:text-black text-sm md:text-base gotham-bold">
              Dr Catherine FAUCHER,
              </span>{" "}
              Agence de la biomédecine
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

export default Session2;
