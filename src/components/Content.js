import React from "react";
import Title from "./Title";
import SideBar from "./SideBar";
import { text } from "./Data";
import img1 from "../assets/img1.jpg";
import img1Grey from "../assets/img1_grey.png";
import img2 from "../assets/img2.webp";
import img2Grey from "../assets/img2_grey.png";

const Content = ({ textSize, darkMode }) => {

  return (
    <div>
      <div className="mt-3 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 mb-4">
        <div className="md:w-[70%]">
        <p className={`text-secondary dark:text-black ${textSize} mb-4`}>
            {text.p8}{" "}
          </p>

          <p className={`text-secondary dark:text-black ${textSize} mb-4`}>
          Le vote de la nouvelle loi relative à la bioéthique en 2021 puis l’adoption des
          plans ministériels de nos trois champs d’activité en 2022, ont fixé un cadre
          stratégique clair à l’Agence pour les années à venir. Notre rôle de référent
          pour les activités de la biomédecine doit nous permettre de mobiliser et de
          travailler étroitement avec l’ensemble des acteurs concernés pour réussir le
          déploiement opérationnel de ces décisions stratégiques et toujours mieux
          répondre aux besoins des patients <span className="italic">in fine.</span>
          </p>

        <Title title={text?.h3} textSize={`md:text-[22px]`} />

          <p className={`text-secondary dark:text-black ${textSize} mb-4`}>
            {text.p10}
          </p>

          
         
          

          
          

          

          <div className="md:hidden">
            <img
              className="md:w-full md:h-auto mb-4"
              src={darkMode === "light" ? img2Grey : img2}
              alt="Mme Marine JEANTET"
            />
            <h4 className="text-secondary dark:text-black gotham-bold">
              Mme Marine JEANTET,
            </h4>
            <p className="text-secondary dark:text-black font-medium">
              Directeur général adjoint de l’Agence de la biomédecine, en charge
              des stratégies médicales et scientifiques
            </p>
          </div>
        </div>

        <SideBar darkMode={darkMode} />
      </div>

      <hr className="border-2 mb-8" />

      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="hidden md:block md:w-[30%]">
          <img
            className="md:w-full mb-4"
            src={darkMode === "light" ? img1Grey : img1}
            alt="Pr Michel TSIMARATOS"
          />
          <h4 className="text-secondary dark:text-black gotham-bold">Pr Michel TSIMARATOS,</h4>
          <p className="text-secondary dark:text-black font-medium">
          Directeur général adjoint de l’Agence de la biomédecine, en charge des stratégies médicales et scientifiques
          </p>
        </div>

        <div className="md:w-[70%]">
        <Title title={text?.h1} textSize={`md:text-[22px]`} />

          <p className={`text-secondary dark:text-black ${textSize} mb-4`}>
          Ce nouveau temps fort intervient deux ans après la dernière édition des
          Journées de l’Agence de la biomédecine consacrée à la nouvelle loi relative à
          la bioéthique. Celle-ci a été suivie de près par l’adoption des trois nouveaux
          plans ministériels pour les activités pilotées par l’Agence, puis de l’élaboration
          d’un cadre de coopération avec les associations et les usagers du système
          de santé, un an plus tard.<span className="gotham-bold"> Fort de ces nouvelles feuilles de route stratégiques,
          j’ai voulu réorienter notre événement en créant les Rencontres de la
          biomédecine.</span> 
          </p>

          

          <p className={`text-secondary dark:text-black ${textSize} mb-4`}>
            {text.p2} 
          </p>
          
          <p className={`text-secondary dark:text-black ${textSize} mb-4`}>
          Ce changement réaffirme également le rôle central de l’Agence dans ses
          domaines de compétence. Coordonner les professionnels du don, de la
          greffe et de l’AMP, mobiliser pour mettre en action, réfléchir avec les experts
          et les usagers pour améliorer les pratiques, font partie des savoir-faire de
          l’Agence, afin de répondre à un seul et même enjeu que nous partageons tous
          :<span className="gotham-bold"> apporter un accompagnement toujours plus adapté aux patients.</span>
            
          </p>
         
          <p className={`text-secondary dark:text-black ${textSize} mb-4`}>
            {text.p4}
          </p>

          <p className={`text-secondary dark:text-black ${textSize} mb-4`}>
            {text.p5}
          </p>
          
          <ul className="text-secondary text-lg mb-4 md:pl-4">
            <li className="gotham-bold text-secondary dark:text-black list-disc">
              <span className="text-primary dark:text-black">{text?.l1}</span>
            </li>
            <li className="gotham-bold text-secondary dark:text-black list-disc">
              <span className="text-accent-dark dark:text-black">
                {text?.l2}
              </span>
            </li>
            <li className="gotham-bold text-secondary dark:text-black list-disc">
              <span className="text-[#00a894] dark:text-black">{text?.l3}</span>
            </li>
            <li className="gotham-bold text-secondary dark:text-black list-disc">
              <span className="text-[#f091a8] dark:text-black">{text?.l4}</span>
            </li>
            <li className="gotham-bold text-secondary dark:text-black list-disc">
              <span className="text-[#f08761] dark:text-black">{text?.l5}</span>
            </li>
          </ul>

          

          <p className={`text-secondary dark:text-black ${textSize} mb-4`}>
            {text.p6}
          </p>

          <p className={`text-secondary dark:text-black ${textSize} mb-4`}>
            {text.p7}
          </p>

        </div>
        <div className="hidden mb-4">
        <img
          className="md:w-full md:h-auto mb-4"
          src={darkMode === "light" ? img2Grey : img2}
          alt="Mme Marine JEANTET"
        />
        <h4 className="text-secondary dark:text-black gotham-bold">Mme Marine JEANTET,</h4>
        <p className="text-secondary dark:text-black font-medium">
        Directrice générale de l’Agence de la biomédecine
        </p>
      </div>

        <div className="md:hidden md:w-[30%]">
          <img
            className="md:w-full mb-4"
            
            src={darkMode === "light" ? img1Grey : img1}
            alt="Pr Michel TSIMARATOS"
          />
          <h4 className="text-secondary dark:text-black gotham-bold">Pr Michel TSIMARATOS,</h4>
          <p className="text-secondary dark:text-black font-medium">
          Directeur général adjoint de l’Agence de la biomédecine, en charge des
          stratégies médicales et scientifiques
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Content;
