import React from "react";
import { motion } from "framer-motion";
import { sectionWapper } from "../hoc";
import { technologies, skills } from "../constants";
import { fadeIn } from "../utils/motion";
import { BallCanvas } from "./canvas";
import SectionHeading from "./SectionHeading";

const Tech: React.FC = () => {
  return (
    <>
      <SectionHeading
        index="03"
        label="Tools I reach for"
        title={
          <>
            The{" "}
            <span className="font-serif italic font-normal text-acid">
              stack
            </span>
          </>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 border-l border-line">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", 0.1 * index, 0.75)}
            className="relative border-r border-b border-line aspect-square flex flex-col justify-between p-5 hover:bg-ink-100 transition-colors"
          >
            <span className="flex justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              <span>{technology.name}</span>
              <span className="text-acid">0{index + 1}</span>
            </span>
            <div className="w-full h-[70%] cursor-grab active:cursor-grabbing">
              <BallCanvas icon={technology.icon} />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={fadeIn("", "", 0.3, 0.75)}
        className="mt-10 text-[20px] sm:text-[26px] leading-snug text-muted max-w-4xl"
      >
        Also fluent in{" "}
        {skills.slice(0, 8).map((skill, index, list) => (
          <span key={skill}>
            <span className="text-bone">{skill}</span>
            {index < list.length - 1 ? ", " : "."}
          </span>
        ))}
      </motion.p>
    </>
  );
};

export default sectionWapper({ Component: Tech, idName: "tech" });
