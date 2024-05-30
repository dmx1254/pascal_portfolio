import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white">
      <p
        style={{
          color: "rgb(4,7,29)",
        }}
        className="text-lg font-extralight font-monteserrat"
      >
        Loading...
      </p>
    </div>
  );
};

export default Loading;
