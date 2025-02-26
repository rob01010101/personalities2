import React, { useState } from "react";
import { developerList } from "./data"; // Ensure data.ts contains your developer list

const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(true);
  const developer = developerList[index];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % developerList.length);
  };

  const handleBack = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? developerList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center flex flex-col items-center">
        <h1 className="text-2xl font-bold">female singer artists</h1>
        <h2 className="text-gray-500 mt-1">Robby Pineda - C-PEITEL3</h2>

        <div className="mt-4 flex flex-col items-center">
          <img
            src={developer.url}
            alt={developer.alt}
            className="w-40 h-40 object-cover rounded-full border-2 border-gray-300"
          />
        </div>

        <h2 className="text-xl font-semibold mt-4">{developer.name}</h2>
        <p className="text-gray-600">{developer.role}</p>

        {showDescription && (
          <p className="text-sm text-gray-500 mt-2 px-4">{developer.description}</p>
        )}

        <button
          onClick={() => setShowDescription(!showDescription)}
          className="mt-2 text-blue-500 hover:underline focus:outline-none"
        >
          {showDescription ? "Hide Description" : "Show Description"}
        </button>

        <div className="flex justify-between w-full mt-4">
          <button
            onClick={handleBack}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
          >
            Next
          </button>
        </div>

        <p className="text-gray-400 text-sm mt-2">
          {index + 1} of {developerList.length}
        </p>
      </div>
    </div>
  );
};

export default App;