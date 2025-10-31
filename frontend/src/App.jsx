import AddListing from "./Components/AddListing";
import AllListings from "./Components/AllListings";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<AllListings />} />
        <Route path="/add-listing" element={<AddListing />} />
      </Routes>
      
    </>
  );
}

export default App;
