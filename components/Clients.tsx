import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="flex flex-col items-center py-20" id="testimonials">
      <h3 className="text-white text-2xl md:text-4xl font-bold">
        Témoignages de <span className="text-purple"> Clients Satisfaits</span>
      </h3>
      <div className="flex flex-col items-center justify-center gap-y-8 mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Clients;
