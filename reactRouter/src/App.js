import React from "react";
import Error from "./Error";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import User from './User'
import { Routes, Route,Navigate } from "react-router-dom";

const App = () => {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path = '/:fname/:lname' element = {<User />} />
          <Route element={<Navigate to = '/'/>} /> 
      </Routes>
      <h3>Add '/anything/anything' in the url to see useParam effects.</h3>
      <h3>Add '/kartik/madaan' to use useLocation Effects.</h3>
    </>
  );
};

export default App;
