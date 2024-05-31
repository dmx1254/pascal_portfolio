"use client";

import React, { useState } from "react";
import { Button } from "./ui/MovingBorders";
import SheetBookContent from "./SheetBookContent";

const Ebook = () => {
  const [isReveal, setIsReveal] = useState<boolean>(false);
  const handleReveal = () => setIsReveal(true);
  const handleRemoveReveal = () => setIsReveal(false);
  return (
    <section
      id="ebook"
      className="flex flex-col items-center gap-6 md:gap-10 text-gray-900 py-16 p-4 w-full rounded z-50"
    >
      <h3 className="text-white self-center text-center text-2xl md:text-4xl font-bold">
        Lire mon livre pour{" "}
        <span className="text-purple">atteindre le succès</span>
      </h3>
      <div
        className="py-6 rounded bg-gradient-to-r
from-violet-700 to-blue-800"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-10">
          {
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full h-full">
                <img
                  src="/pascal/ebook.jpeg"
                  alt="Couverture du livre de Pascal"
                  className="rounded-lg shadow-lg w-full h-full max-h-[700px] object-cover object-center"
                />
              </div>
            </div>
          }
          <div className="w-full md:w-1/2 text-white/85 h-full -mt-2">
            {/* <h3 className="text-xl font-bold mb-4">
              La route vers la richesse
            </h3> */}
            <p className="text-sm leading-relaxed mb-4">
              Découvrez le livre{" "}
              <span className="font-bold">
                &ldquo;La route vers la richesse&ldquo;
              </span>{" "}
              par Pascal Cesar Ndecky, une lecture incontournable pour quiconque
              souhaite atteindre le succès financier.
            </p>
            <span className="text-base font-bold">Introduction</span>
            <br />
            <p className="text-sm">
              La richesse est souvent associée à une vie luxueuse, avec des
              biens matériels abondants et une multitude d&apos;opportunités.
              Cependant, il existe une perspective alternative sur la richesse
              qui peut sembler paradoxale : être riche, c&apos;est avoir la vie
              d&apos;un pauvre, mais avec plus de sécurité. Cette idée
              sous-entend que la richesse ne se résume pas seulement à accumuler
              des possessions, mais plutôt à jouir d&apos;une tranquillité
              d&apos;esprit et d&apos;une stabilité financière. Dans cet
              article, nous explorerons cette notion intrigante et examinerons
              comment la sécurité peut être une composante essentielle de la
              richesse véritable.
            </p>
            <br />
            <p className="font-semibold text-sm">
              La recherche du bonheur au-delà de la richesse matérielle :
            </p>
            <p className="text-sm mt-1">
              Trop souvent, la richesse est considérée comme un moyen
              d&apos;acquérir des biens matériels et de vivre une vie
              somptueuse. Cependant, de nombreuses personnes fortunées se
              retrouvent piégées dans un cycle de consommation sans fin,
              cherchant toujours plus sans jamais atteindre la satisfaction. Au
              contraire, certaines personnes ayant une situation financière
              modeste semblent trouver une certaine forme de bonheur en se
              contentant de peu et en valorisant les relations humaines, la
              santé et la liberté...
              <SheetBookContent title="Voir plus" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ebook;
