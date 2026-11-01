import { motion } from "framer-motion";

import { styles } from "../styles";
import { OrbCanvas } from "./canvas";
import { experiences } from "../constants";

const Line = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
  <span className="block overflow-hidden">
    <span className="block animate-rise" style={{ animationDelay: `${delay}s` }}>
      {children}
    </span>
  </span>
);

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden grid-lines">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(200,240,74,0.10),transparent_55%)]" />

      <div className="absolute inset-0 md:left-[38%] md:-right-[8%] top-[10%] md:top-0 h-[62vh] md:h-full opacity-90">
        <OrbCanvas />
      </div>

      <div
        className={`${styles.paddingX} relative z-10 max-w-[1440px] mx-auto min-h-screen flex flex-col justify-end pb-10 pt-32 pointer-events-none`}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`${styles.sectionSubText} mb-6 flex items-center gap-3`}
        >
          <span className="h-px w-10 bg-acid" />
          Portfolio — Since 2020
        </motion.p>

        <h1 className={styles.heroHeadText}>
          <Line delay={0.1}>Abdel</Line>
          <Line delay={0.22}>
            Rahman<span className="text-acid">.</span>
          </Line>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-line pt-6 pointer-events-auto"
        >
          <div className="col-span-2">
            <p className="font-serif italic text-bone text-[26px] sm:text-[34px] leading-[1.1] max-w-[520px]">
              I build web apps, interfaces and mobile apps that feel{" "}
              <span className="text-acid">fast</span> in the hand.
            </p>
          </div>
          <div>
            <p className={styles.sectionSubText}>Currently</p>
            <p className="mt-2 text-bone text-[15px]">
              React Native Developer
              <br />
              <span className="text-muted">at Ejada</span>
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div>
              <p className={styles.sectionSubText}>Track record</p>
              <p className="mt-2 font-mono text-bone text-[15px]">
                {String(experiences.length).padStart(2, "0")} roles
              </p>
            </div>
            <a
              href="#about"
              className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-bone"
            >
              <span className="grid place-items-center w-10 h-10 rounded-full border border-line group-hover:bg-acid group-hover:text-ink group-hover:border-acid transition-colors">
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </span>
              Scroll
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
