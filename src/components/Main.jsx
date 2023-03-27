import bgMain from "../assets/img/bg-main.jpg";

import React from "react";
import { Parallax } from "react-parallax";

const Main = () => {
  return (
    <main className="main container">
      <Parallax bgImage={bgMain} bgImageAlt="Flores" strength={200}>
        <div style={{ height: "600px" }}> </div>
      </Parallax>
    </main>
  );
};

export default Main;
