import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center text-gray-900 py-16 p-4 w-full z-50"
    >
      <h3 className="text-white text-2xl md:text-4xl font-bold">
        Transformer la <span className="text-purple">vision en réalité</span>
      </h3>
      <div className="container px-0 mx-auto flex flex-col md:flex-row items-start gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full h-full">
            <img
              src="/pascal/image00004.jpeg"
              alt="Pascal Cesar"
              className="rounded-lg shadow-lg w-full h-full max-h-[350px] object-cover object-center md:max-h-[800px] mt-14"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-white h-full mt-2 md:mt-12">
          <p className="text-base leading-relaxed mb-4">
            Je m&apos;appelle{" "}
            <span className="font-bold">Pascal Cesar</span>, un jeune
            entrepreneur sénégalais, conférencier inspirant et motivateur
            infatigable résidant en France. Avec un mélange unique de sens des
            affaires et de talent pour la motivation, j&apos;ai su me faire une
            place en tant que figure transformatrice dans le monde de
            l&apos;entrepreneuriat.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Depuis la création de plusieurs startups à succès jusqu&apos;à
            l&apos;inspiration de milliers de personnes par mes discours, mon
            parcours est un témoignage de la puissance de la vision, de la
            résilience et de la poursuite incessante de l&apos;excellence.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Je suis venu en France pour poursuivre mes études après avoir obtenu
            mon baccalauréat, et je suis depuis devenu une figure éminente de la
            communauté entrepreneuriale.
          </p>
          <h4 className="text-xl font-semibold mb-4">Points clés :</h4>
          <ul className="list-disc list-inside text-left mb-4">
            <li className="mb-2">
              <span className="font-bold">Fondateur de Kiasla :</span> Une
              marque de boutique en ligne innovante qui révolutionne le commerce
              électronique.
            </li>
            <li className="mb-2">
              <span className="font-bold">
                Propriétaire de la ferme Pouldor :
              </span>{" "}
              Une ferme durable et biologique contribuant aux communautés
              locales.
            </li>
            <li className="mb-2">
              <span className="font-bold">Philanthrope :</span> Fondateur
              d&apos;une association caritative dédiée à donner des dons à ceux
              dans le besoin.
            </li>
            <li className="mb-2">
              <span className="font-bold">Livre :</span> Auteur de &ldquo;La
              route vers la richesse&ldquo;, un guide complet pour réussir
              financièrement.
            </li>
            <li className="mb-2">
              <span className="font-bold">
                Founder &nbsp; 1 JEUNE, &nbsp;1 PROJET :
              </span>{" "}
              un groupe dans lequel, j’accompagne chaque jeune de manière
              personnalisée dans la réalisation de son projet du début à la fin.
            </li>
          </ul>
          <p className="text-lg font-italic leading-relaxed mb-4">
            Je crois en la devise :
            <span className="font-bold italic">
              &ldquo;Rêvez grand, travaillez dur, restez concentré et
              entourez-vous de bonnes personnes.&ldquo;
            </span>
          </p>
          {/* <p className="text-lg leading-relaxed">
            Rejoignez-moi dans ma mission d&apos;inspirer, d&apos;innover et de
            créer un impact durable.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default About;
