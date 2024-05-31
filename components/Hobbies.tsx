import Image from "next/image";
import React from "react";

const Hobbies = () => {
  return (
    <div className=" flex items-center justify-center w-full py-20">
      <div className="flex flex-col md:flex-row items-center w-full mx-auto gap-10 rounded-lg overflow-hidden">
        <section className="w-full flex flex-col items-center justify-between p-0">
          {/* <h2 className="text-2xl font-bold mb-4">
            Pascal César Ndecky : Un Pilote Passionné
          </h2> */}
          <div className="w-full flex flex-col md:flex-row items-center mt-0 md:mt-60">
            <Image
              src="/pascal/pilote.jpg"
              alt="Pascal César Ndecky en tant que pilote"
              width={300}
              height={300}
              className="rounded-lg mb-4 md:mb-0 md:mr-4"
            />
            <p className="text-white-200 max-w-[300px]">
              Pascal César Ndecky n&apos;est pas seulement un entrepreneur
              accompli, il est également un pilote d&apos;avion par passion.
              Durant ses temps libres, Pascal s&apos;envole vers les cieux,
              trouvant une liberté et une inspiration uniques dans le vol. Pour
              lui, piloter un avion est bien plus qu&apos;un simple passe-temps
              : c&apos;est une manière de repousser ses propres limites et de
              trouver de nouvelles perspectives sur la vie et les affaires. Sa
              passion pour l&apos;aviation reflète son caractère aventureux et
              son désir constant d&apos;explorer de nouveaux horizons.
            </p>
          </div>
        </section>

        <section className="w-full flex flex-col items-center justify-between p-0 mb-0 md:mb-20">
          {/* <h2 className="text-2xl font-bold mb-4">
            Pascal César Ndecky : Conférence à Odoo
          </h2> */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <Image
              src="/pascal/conf.jpg"
              alt="Pascal César Ndecky en conférence à Odoo"
              width={300}
              height={400}
              className="rounded-lg mb-4 md:mb-0 md:mr-4"
            />
            <p className="text-white-200 max-w-[300px]">
              Pascal César Ndecky est également un conférencier accompli et
              motivateur. Il a partagé ses expériences sur
              l&apos;entrepreneuriat, l&apos;innovation et la persévérance, tout
              en soulignant l&apos;importance de l&apos;utilisation des
              technologies modernes pour transformer les entreprises. Son
              discours a motivé de nombreux participants à poursuivre leurs
              propres rêves et à exploiter leur potentiel maximal.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hobbies;
