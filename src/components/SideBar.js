import React from "react";
import img1 from "../assets/img1.jpg";
import img1Grey from "../assets/img1_grey.png";

const SideBar = ({ darkMode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-0 md:w-[30%]">
      <div className="hidden md:block mb-4">
        <img
          className="md:w-full md:h-auto mb-4"
          src={darkMode === "light" ? img1Grey : img1}
          alt="Pr Michel TSIMARATOS"
        />
        <h4 className="text-secondary dark:text-black gotham-bold">Pr Michel TSIMARATOS,</h4>
        <p className="text-secondary dark:text-black font-medium">
          Directeur général adjoint de l’Agence de la biomédecine, en charge des
          stratégies médicales et scientifiques
        </p>
      </div>

      {/* <div>
        <img
          className="md:w-64 md:h-64 mb-4"
          src="https://images.unsplash.com/photo-1511285605577-4d62fb50d2f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
          alt="title"
        />
        <h4 className="text-secondary font-bold">Prénom Nom,</h4>
        <p className="text-secondary font-medium">fonction, organisme</p>
      </div> */}
    </div>
  );
};

export default SideBar;
