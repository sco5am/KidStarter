import React from "react";
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className="container">
      <h1>title text</h1>
      <p>Here is some txt</p>
      <Link to="/Store"> Find a Store!</Link>
    </div>
  );
};


export default Home;
