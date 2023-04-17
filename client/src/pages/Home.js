import React from "react";
import MapComponent from "../components/MapComponent";

import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="container">

      <h1>Welcome to Kid-Starter!</h1>
      <p>Kid-Starter is a platform that brings the lemonade stand into the present.
        Each virtual "stand" has been created buy kids for kids to benefit their organizations. Every organization 
       receives 100% of the profits! Find a stand near you today.
      </p>
      <Link to="/Store"> Find a Stand!</Link>
      <MapComponent />
    </div>
    
  );
};


export default Home;
