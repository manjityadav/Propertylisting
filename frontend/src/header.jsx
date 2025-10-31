import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
     <div className=" bg-gray-200 border-black-1 pt-7 flex justify-between p-2 items-center px-12 ">
        <Link to="/" className='font-bold cursor-pointer text-xl'>Mini Property Listing Dashboard</Link>
        <Link to="/add-Listing" className='bg-blue-500 py-2 cursor-pointer px-4 font-medium rounded text-white'>Add Property</Link>
     </div>
    </>
  )
}

export default Header
