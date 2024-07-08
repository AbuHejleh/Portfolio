import { BallCanvas } from "./canvas";
import { sectionWapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 ">
      {technologies.map((techonlogy) => (
        <div className="w-28 h-28 " key={techonlogy.name}>
          <BallCanvas icon={techonlogy.icon} />
        </div>
      ))}
    </div>
  );
};

export default sectionWapper({ Component: Tech, idName: "tech" });
