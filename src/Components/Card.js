import React from 'react';


const Card = ({ name, count, color, icon: Icon }) => {
  return (
    <div
      className={`h-64 w-96 rounded-lg shadow-lg text-white flex flex-col justify-center items-center ${color}`}
    >
      <Icon className="text-6xl mb-2" /> {/* Render the icon */}
      <h2 className="text-3xl font-bold mb-4">{count} {name}!</h2>
      <button className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-gray-200">
        View Details
      </button>
    </div>
  );
};

export default Card;