import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn } from "../utils/motion";
import { sectionWapper } from "../hoc";
import SectionHeading from "./SectionHeading";

interface props {
  index: number;
  title: string;
  icon: string;
  description: string;
}

const ServiceRow: React.FC<props> = ({ index, title, icon, description }) => {
  return (
    <motion.li
      variants={fadeIn("up", "spring", 0.15 * index, 0.75)}
      className="group relative grid grid-cols-[48px_1fr] md:grid-cols-[80px_1.1fr_1.4fr_64px] items-center gap-x-6 gap-y-3 py-8 border-b border-line overflow-hidden"
    >
      <span className="absolute inset-0 bg-acid origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] -z-10" />
      <span className="font-mono text-[12px] text-muted group-hover:text-ink transition-colors">
        0{index + 1}
      </span>
      <h3 className="font-display font-bold text-[28px] sm:text-[40px] tracking-[-0.02em] text-bone group-hover:text-ink transition-colors">
        {title}
      </h3>
      <p className="col-start-2 md:col-start-auto text-muted text-[15px] leading-relaxed max-w-md group-hover:text-ink/80 transition-colors">
        {description}
      </p>
      <img
        src={icon}
        alt=""
        className="hidden md:block w-12 h-12 object-contain justify-self-end grayscale group-hover:grayscale-0 group-hover:rotate-12 transition-all duration-500"
      />
    </motion.li>
  );
};

const About = () => {
  return (
    <>
      <SectionHeading
        index="01"
        label="Introduction"
        title={
          <>
            Hello,{" "}
            <span className="font-serif italic font-normal text-acid">
              I make
            </span>{" "}
            things.
          </>
        }
      />

      <div className="mt-14 grid md:grid-cols-[1fr_2fr] gap-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 0.75)}
          className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted leading-loose"
        >
          TypeScript / JavaScript / Dart
          <br />
          React / Node.js / Flutter / Three.js
        </motion.p>
        <motion.p
          variants={fadeIn("", "", 0.25, 0.75)}
          className="text-bone text-[22px] sm:text-[30px] leading-[1.35] tracking-[-0.01em]"
        >
          I'm a software developer who learns fast and works closely with
          clients to build{" "}
          <span className="font-serif italic text-acid">
            efficient, scalable
          </span>{" "}
          and user-friendly products that solve real problems. Let's work
          together to bring your ideas to life.
        </motion.p>
      </div>

      <ul className="mt-20 list-none border-t border-line">
        {services.map((service, index) => (
          <ServiceRow key={service.title} index={index} {...service} />
        ))}
      </ul>
    </>
  );
};

export default sectionWapper({ Component: About, idName: "about" });
