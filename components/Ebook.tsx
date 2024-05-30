import React from "react";
import { Button } from "./ui/MovingBorders";

const Ebook = () => {
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
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full h-full">
              <img
                src="/pascal/ebook.jpeg"
                alt="Couverture du livre de Pascal"
                className="rounded-lg shadow-lg w-full h-full max-h-[500px] object-cover object-center"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-white h-full">
            <h3 className="text-3xl font-bold mb-4">
              La route vers la richesse
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Découvrez le livre{" "}
              <span className="font-bold">
                &ldquo;La route vers la richesse&ldquo;
              </span>{" "}
              par Pascal Cesar Ndecky, une lecture incontournable pour quiconque
              souhaite atteindre le succès financier. Ce livre offre des
              stratégies éprouvées et des conseils pratiques pour transformer
              vos rêves en réalité.
            </p>
            <h4 className="text-2xl font-semibold mb-4">
              Points clés du livre :
            </h4>
            <ul className="list-disc list-inside text-left mb-4 text-lg">
              <li className="mb-2">
                Des conseils pratiques pour gérer et investir votre argent
                efficacement.
              </li>
              <li className="mb-2">
                Des histoires inspirantes de réussite pour vous motiver.
              </li>
              <li className="mb-2">
                Des stratégies pour surmonter les obstacles financiers.
              </li>
              <li className="mb-2">
                Un guide étape par étape pour créer une entreprise prospère.
              </li>
            </ul>
            <div className="flex justify-center md:justify-start">
              <Button
                borderRadius="1.75rem"
                className="flex-1 text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
                duration={Math.floor(Math.random() * 5000 + 5000)}
              >
                <a
                  href="/path/to/book-purchase-page"
                  className="bg-transparent text-white-100 font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300"
                >
                  Acheter maintenant
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ebook;
