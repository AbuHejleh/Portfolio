// Tech.tsx

import React from "react";
import { sectionWapper } from "../hoc";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas"; // Assuming BallCanvas is default exported

const Tech: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default sectionWapper({ Component: Tech, idName: "tech" });
