import React from "react";
import TtsButton from "../components/Button/TtsButton";

const Faq = ({ textSize }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="px-2 md:container py-8 space-y-8">
      {/* <TtsButton /> */}

      <div className="">
        <h2 className="text-secondary dark:text-black gotham-bold text-3xl mb-4">
        Foire aux questions (FAQ)
        </h2>
        <h4 className="text-secondary dark:text-black gotham-bold text-[23px] mb-4">
        Comment s’inscrire aux Rencontres de la biomédecine ?
        </h4>
        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        Le formulaire d’inscription est disponible dans la rubrique <a
              href="Inscription" className={`text-primary dark:text-black mb-4`}>Inscription</a>. <br />Aucune inscription n’est possible par mail, ni par téléphone.
        </p>
      </div>

      <div className="">
        <h4 className="text-secondary dark:text-black gotham-bold text-[23px] mb-4">
        Est-il possible de suivre l’événement à distance ?
        </h4>
        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        Les Rencontres de la biomédecine se dérouleront en présentiel uniquement.
        </p>
      </div>

      <div className="">
        <h4 className="text-secondary dark:text-black gotham-bold text-[23px] mb-4">
        Je n’ai pas reçu la confirmation de mon inscription, est-ce normal ? Que dois-je faire ?
        </h4>
        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        Si l’email de confirmation n’est pas arrivé dans votre boîte de réception correspondant à l’adresse saisie lors de votre inscription, 
        nous vous invitons à vérifier vos spams. Si vous ne retrouvez pas cet email, nous vous conseillons de recommencer la procédure, 
        une erreur de saisie dans votre adresse mail a pu être commise.<br />
        Si ces difficultés persistent, n’hésitez pas à nous contacter : <a
              href="mailto: contact@rencontres-biomedecine.fr" className={`text-primary dark:text-black mb-4`}>contact@rencontres-biomedecine.fr</a>
        </p>
      </div>

      <div className="">
        <h4 className="text-secondary dark:text-black gotham-bold text-[23px] mb-4">
        Sera-t-il possible de modifier son choix de sessions le jour-même ?
        </h4>
        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        Pour des raisons d’organisation, il est préférable d’assister à la session à laquelle vous vous êtes inscrit(e). <br />Néanmoins, vous pourrez modifier votre choix le jour-même et assister à une autre session.
        </p>
      </div>
    </div>
  );
};

export default Faq;
