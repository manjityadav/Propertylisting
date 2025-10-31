import React, { useState } from "react";
import axios from "axios";
import Header from "../header";
import { useNavigate } from "react-router-dom";

const AddListing = () => {
  const [type, setType] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProperty = {
      type,
      propertyName,
      price,
      location,
      description,
      imageUrl,
    };

    try {
       navigate("/");
      await axios.post("http://localhost:8000/api/properties", newProperty);
        // Navigate to home
     
      console.log("form subbmitted");
      alert("✅ Property added successfully!");
      // Reset all fields
      setType("");
      setPropertyName("");
      setPrice("");
      setLocation("");
      setDescription("");
      setImageUrl("");
    } catch (err) {
      console.error("❌ Error adding property:", err);
      alert("Failed to add property ❌");
    }
  };
  return (
    <>
      <Header />
      <div className="flex items-center justify-center p-10 bg-gray-200 min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white font-semibold w-4/5 p-10 rounded flex flex-col shadow-lg"
        >
          <h1 className="font-semibold mb-5 text-xl text-center">
            Add Property
          </h1>

          {/* Type */}
          <label className="font-semibold mb-2">Type</label>
          <select
            className="border rounded px-3 mb-5 text-md bg-white py-2"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="">Select Type</option>
            <option value="Plot">Plot</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
          </select>

          {/* Property Name */}
          <label className="font-semibold mb-2">Property Name</label>
          <input
            className="border px-5 mb-5 py-2 rounded"
            placeholder="Enter Property name"
            type="text"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            required
          />

          {/* Price */}
          <label className="font-semibold mb-2">Price</label>
          <input
            className="border px-5 py-2 mb-5 rounded"
            placeholder="Enter Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          {/* Location */}
          <label className="font-semibold mb-2">Location</label>
          <input
            className="border px-5 py-2 mb-5 rounded"
            placeholder="Enter Location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          {/* Description */}
          <label className="font-semibold mb-2">Description</label>
          <textarea
            className="border px-5 rounded mb-3 py-2"
            placeholder="Enter short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          {/* Image URL */}
          <label className="font-semibold mb-2">Image URL</label>
          <input
            className="border px-5 py-2 mb-5 rounded"
            placeholder="Image URL"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          {/* Submit Button */}
          <button
         
            type="submit"
            className="bg-blue-500 text-white cursor-pointer py-2 rounded font-semibold hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddListing;
