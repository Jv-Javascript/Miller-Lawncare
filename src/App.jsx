import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Movinginfo from "./Components/Movinginfo/Movinginfo";
import Moscroll from "./Components/Moscroll/Moscroll";
import About from "./Components/About/About";
import Motionabout from "./Components/Motionabout/Motionabout";
import Mo3d from "./Components/Mo3d/Mo3d";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Moscroll />
      <Movinginfo />
      <Motionabout />
      <Mo3d />
    </div>
  );
};

export default App;
