import React, { useState } from "react";
import { X } from "lucide-react";

const ListingCard = (prob) => {
  console.log(prob)
  const [show, setShow] = useState(false);

  return (
    <div className="mt-5">
      {/* Card */}
      <div className="w-70 h-44 bg-white shadow-md rounded-xl p-4 flex flex-col justify-between overflow-hidden">
        <h2 className="font-bold text-xl">{prob.propertyName}</h2>
        <h4 className="font-semibold text-gray-600">{prob.type}</h4>
        <p className="text-gray-700 text-sm">
          {prob.description}
        </p>
        <div className="flex justify-between items-center mt-3">
          <h5 className="font-semibold">&#8377;{prob.price}</h5>
          <button
            onClick={() => setShow(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded cursor-pointer"
          >
            View
          </button>
        </div>
      </div>

      {/* Modal */}
      {show && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-[500px] max-w-[90%] rounded-lg shadow-lg p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 cursor-pointer right-3 text-gray-500 hover:text-gray-700"
            >
              <X />
            </button>

            <h1 className="font-semibold text-xl mb-4">View Details</h1>

            <img
              className="h-56 w-full object-cover rounded"
              src={prob.imageurl}
              alt="Property"
            />

            <div className="mt-4">
              <h2 className="mb-2 font-bold text-lg">{prob.typ}</h2>
              <p className="text-gray-700 text-sm mb-3">
               {prob.description}
              </p>

              <div className="flex justify-between text-gray-600 font-medium">
                <h5>{prob.location}</h5>
                <h5> &#8377; {prob.price}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingCard;
