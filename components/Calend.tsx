"use client";

import { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";

const Calend = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="calend">
      {isClient && (
        <PopupWidget
          url="https://calendly.com/pascalcesarcontact"
          rootElement={document.getElementById("root")}
          text="Plannifier un appel!"
          textColor="#ffffff"
          color="#00a2ff"
        />
      )}
    </div>
  );
};

export default Calend;
