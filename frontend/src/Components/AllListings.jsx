import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import Header from "../header";
import axios from "axios";

const AllListings = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    axios
      .get("https://propertylisting-659i.onrender.com/api/properties")
      .then((response) => {
        setInfo(response.data);
        setFilteredInfo(response.data); // initially show all
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 🔍 Handle filter change
  const handleFilterChange = (e) => {
    const selectedType = e.target.value;
    setFilterType(selectedType);

    if (selectedType === "All") {
      setFilteredInfo(info);
    } else {
      const filtered = info.filter(
        (item) => item.type.toLowerCase() === selectedType.toLowerCase()
      );
      setFilteredInfo(filtered);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <>
      <Header />
      <div className="px-12 mt-2">
        <div>
          <h5 className="font-semibold text-xl">Property Listings</h5>

          {/* Filter Dropdown */}
          <select
            className="border border-black rounded px-3 mt-3 text-md bg-white py-1 w-52"
            value={filterType}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Plot">Plot</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>

        {/* Cards */}
        <div className="w-full gap-3 flex flex-wrap mt-4">
          {filteredInfo.length > 0 ? (
            filteredInfo.map((d, index) => (
              <ListingCard
                key={index}
                type={d.type}
                propertyName={d.propertyName}
                location={d.location}
                imageurl={d.imageurl}
                price={d.price}
                description={d.description}
              />
            ))
          ) : (
            <p className="mt-10 text-gray-600 text-lg">No properties found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AllListings;
