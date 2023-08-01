import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed top-0 bg-black h-full w-full z-[1000] flex justify-center items-center overflow-hidden">
      <div className="animate-spin rounded-full h-48 w-48 border-t-2 border-b-2 border-gray-400"></div>
    </div>
  );
};

export default PageLoader;
