import React from "react";
import TtsButton from "../components/Button/TtsButton";

const Accessibility = ({ textSize }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="px-2 md:container py-8 space-y-8">
      {/* <TtsButton /> */}

      <div className="">
        <h2 className="text-secondary dark:text-black gotham-bold text-3xl mb-4">
        Déclaration d’accessibilité
        </h2>
        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        L’Agence de la biomédecine s’engage à rendre ses sites Internet accessibles conformément à l’article 47<br />de la loi n° 2005-102 du 11 février 2005.
        </p>
        <h4 className="text-secondary dark:text-black gotham-bold text-[23px] mb-4">
        État de conformité
        </h4>
        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        Le site rencontres-biomedecine.fr est partiellement conforme avec le référentiel général 
        d’amélioration de l’accessibilité <a
              href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#contenu" target="_blank" className={`text-primary dark:text-black mb-4`}>RGAA version 4.1</a>. 
              <br />Les non-conformités et les éventuelles dérogations sont énumérées ci-dessous.
        </p>
      </div>

      <div className="">
        <h4 className="text-secondary dark:text-black gotham-bold text-[24px] mb-4">
        Résultats des tests
        </h4>
        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        • 91,66% des critères RGAA sont respectés.
        <br />• Le taux moyen de conformité du service en ligne s’élève à 94% (information facultative).<br />
        <br /><i>Il est précisé que les tests ont été réalisés sur un environnement de pré-production. Les résultats peuvent être différents sur la version publique du site.</i>

        </p>
      </div>

      <div className="">
        <h4 className="text-secondary dark:text-black gotham-bold text-[24px] mb-4">
        Contenus inaccessibles
        </h4>
        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        Ne sont listées ici que les non-conformités jugées les plus impactantes et présentes en quantités 
        importantes dans les pages du site internet : 
        </p>
      </div>

      <div className="">
        <h4 className="text-primary dark:text-black gotham-medium text-[23px] mb-4">
        Non conformité
        </h4>
        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        • Certains textes sont dans des balises ou certaines balises paragraphes sont vides et servent à faire des espaces.
        <br />• Pas de page plan du site.
        <br />• Pages non accessibles.
        <br />• Défilement vertical du formulaire, une fois l’inscription terminée.

        </p>
      </div>

      <div className="">
        <h4 className="text-primary dark:text-black gotham-medium text-[23px] mb-4">
        Dérogations pour charge disproportionnée
        </h4>
        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        Néant
        </p>
      </div>

      <div className="">
        <h4 className="text-primary dark:text-black gotham-medium text-[23px] mb-4">
        Contenus non soumis à l’obligation d’accessibilité
        </h4>
        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        Néant
        </p>
      </div>

      <div className="">
        <h4 className="text-secondary dark:text-black gotham-bold text-[24px] mb-4">
        Établissement de cette déclaration d’accessibilité
        </h4>
        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        Cette déclaration a été établie le 21/06/2023. 
        </p>
      </div>

      <div className="">
        <h4 className="text-primary dark:text-black gotham-medium text-[23px] mb-4">
        Technologies utilisées pour la réalisation [Du site web / De l’application mobile / Du service…]
        </h4>
        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        • HTML 5
        <br />• CSS 
        <br />• ReactJS 
        <br />• TailwindCSS
        <br />• JavaScript
        </p>
      </div>

      <div className="">
        <h4 className="text-secondary dark:text-black gotham-bold text-[24px] mb-4">
        Retour d’information et contact
        </h4>
        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        Si vous n’arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter 
        le responsable du site internet pour être orienté vers une alternative accessible ou obtenir le contenu sous une autre forme.
        <br />Contacter l’Agence de la biomédecine : <a
              href="https://www.agence-biomedecine.fr/Nous-contacter" target="_blank" className={`text-primary dark:text-black mb-4`}>https://www.agence-biomedecine.fr/Nous-contacter</a>
 
        </p>
      </div>

      <div className="">
        <h4 className="text-secondary dark:text-black gotham-bold text-[24px] mb-4">
        Voies de recours
        </h4>
        <p className={`text-secondary dark:text-black mb-6 ${textSize} `}>
        Cette procédure est à utiliser dans le cas suivant :
        <br />Vous avez signalé au responsable du site internet un défaut d’accessibilité qui vous empêche d’accéder à un contenu ou à un des services du portail et vous n’avez pas obtenu de réponse satisfaisante.
        <br />Écrire un message au Défenseur des droits via le <a
              href="https://formulaire.defenseurdesdroits.fr/code/afficher.php?ETAPE=accueil_2016" target="_blank" className={`text-primary dark:text-black mb-4`}>formulaire de contact</a>
<br /><br />• Contacter le délégué du Défenseur des droits dans votre région <a
              href="https://www.defenseurdesdroits.fr/saisir/delegues" target="_blank" className={`text-primary dark:text-black mb-4`}>https://www.defenseurdesdroits.fr/saisir/delegues</a>
<br />• Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) Défenseur des droits Libre réponse 71120 75342 Paris CEDEX 07 ;
<br />• Contacter le Défenseur des droits par téléphone : 09 69 39 00 00.

 
        </p>
      </div>

    </div>
  );
};

export default Accessibility;
