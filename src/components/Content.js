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
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 mb-4">
        <div className="md:w-[70%]">
        <p className={`text-secondary dark:text-black ${textSize} mb-4`}>
            {text.p8}{" "}
          </p>

          <p className={`text-secondary dark:text-black ${textSize} mb-4`}>
            {text.p9}{" "}
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
            {text.p1}
          </p>

          

          <p className={`text-secondary dark:text-black ${textSize} mb-4`}>
            {text.p2}
          </p>
          
          <p className={`text-secondary dark:text-black ${textSize} mb-4`}>
            {text.p3}
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
