import React from "react";

const Loader = () => {
  return (
    <div className="h-full w-full z-[1000] flex justify-center items-center overflow-hidden">
      <div className="animate-spin rounded-full h-48 w-48 border-t-2 border-b-2 border-gray-400"></div>
    </div>
  );
};

export default Loader;
