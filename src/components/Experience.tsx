import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experiences } from "../constants";
import { sectionWapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import SectionHeading from "./SectionHeading";

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

interface RowProps extends Experience {
  index: number;
  open: boolean;
  onToggle: () => void;
}

const ExperienceRow: React.FC<RowProps> = ({
  index,
  title,
  date,
  company_name,
  icon,
  iconBg,
  points,
  open,
  onToggle,
}) => {
  const current = date.includes("Present");
  return (
    <motion.li
      variants={fadeIn("up", "spring", 0.1 * index, 0.75)}
      className="border-b border-line"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group w-full grid grid-cols-[56px_1fr_40px] md:grid-cols-[180px_72px_1fr_1fr_48px] items-center gap-x-5 gap-y-2 py-7 text-left"
      >
        <span className="hidden md:block font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
          {date}
        </span>
        <span
          className="w-14 h-14 rounded-full grid place-items-center overflow-hidden ring-1 ring-line transition-transform duration-500 group-hover:scale-110"
          style={{ background: iconBg }}
        >
          <img src={icon} alt={company_name} className="w-[72%] h-[72%] object-contain" />
        </span>
        <span>
          <span className="flex items-center gap-3 font-display font-bold text-[22px] sm:text-[32px] leading-tight tracking-[-0.02em] text-bone group-hover:text-acid transition-colors">
            {title}
            {current && (
              <span className="font-mono font-normal text-[10px] uppercase tracking-[0.18em] text-ink bg-acid rounded-full px-2.5 py-1">
                Now
              </span>
            )}
          </span>
          <span className="md:hidden block mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            {date}
          </span>
        </span>
        <span className="hidden md:block font-serif italic text-[22px] text-muted">
          {company_name}
        </span>
        <span
          className={`justify-self-end w-10 h-10 rounded-full border grid place-items-center text-[20px] transition-all duration-500 ${
            open
              ? "rotate-45 bg-acid border-acid text-ink"
              : "border-line text-bone group-hover:border-acid"
          }`}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="md:pl-[272px] pb-10">
              <p className="md:hidden font-serif italic text-[20px] text-muted mb-4">
                {company_name}
              </p>
              <ul className="grid lg:grid-cols-2 gap-x-10 gap-y-3 list-none">
                {points.map((point, i) => (
                  <li
                    key={`experience-point-${i}`}
                    className="grid grid-cols-[28px_1fr] text-[15px] leading-relaxed text-bone/80"
                  >
                    <span className="font-mono text-[11px] text-acid pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    experiences.length - 1
  );

  return (
    <>
      <SectionHeading
        index="02"
        label="What I have done so far"
        title={
          <>
            Work{" "}
            <span className="font-serif italic font-normal text-acid">
              experience
            </span>
          </>
        }
      />

      <ul className="list-none">
        {experiences.map((experience, index) => (
          <ExperienceRow
            key={experience.company_name}
            index={index}
            open={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            {...experience}
          />
        ))}
      </ul>
    </>
  );
};

export default sectionWapper({ Component: Experience, idName: "work" });
