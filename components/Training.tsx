import { companies, trainings } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Training = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mx-auto pt-20 pb-28"
      id="formations"
    >
      <h3 className="text-white text-2xl md:text-4xl font-bold">
        Nos Formations
        <span className="text-purple"> payantes</span>
      </h3>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {trainings.map((training) => (
          <Button
            key={training.id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {training.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {training.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
      <h3 className="text-white text-2xl md:text-4xl font-bold pt-12 pb-4">
        Mes
        <span className="text-purple"> Sponsors</span>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 ml-4 x22s:ml-0 gap-16 x22s:gap-20 pb-10 pt-4">
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <div className="flex items-center md:max-w-60 max-w-32 gap-3">
              <img
                src={company.img}
                alt={company.name}
                className="w-12 h-10 rounded object-center"
              />
              <span className="font-bold font-merriweather text-white">
                {company.name}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Training;
