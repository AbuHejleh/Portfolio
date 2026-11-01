import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "";
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} w-full fixed top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-ink/80 backdrop-blur-md border-b border-line"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-[1440px] mx-auto">
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => {
            setActive("");
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <span className="grid place-items-center w-9 h-9 rounded-full bg-acid text-ink font-display font-extrabold text-[13px] transition-transform duration-500 group-hover:rotate-[360deg]">
            AR
          </span>
          <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-bone">
            Abdel Rahman
            <span className="hidden sm:inline text-muted"> / Front-End & Mobile</span>
          </span>
        </Link>

        <ul className="list-none hidden md:flex flex-row items-center gap-1">
          {navLinks.map((link, index) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.title)}
                className={`group flex items-baseline gap-1.5 px-4 py-2 rounded-full font-mono text-[12px] uppercase tracking-[0.16em] transition-colors ${
                  active === link.title
                    ? "bg-bone text-ink"
                    : "text-muted hover:text-bone"
                }`}
              >
                <span
                  className={`text-[10px] ${
                    active === link.title ? "text-ink/60" : "text-acid"
                  }`}
                >
                  0{index + 1}
                </span>
                {link.title}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a
              href="#contact"
              onClick={() => setActive("Contact")}
              className="flex items-center gap-2 border border-line rounded-full px-4 py-2 font-mono text-[12px] uppercase tracking-[0.16em] text-bone hover:border-acid transition-colors"
            >
              <span className="pulse-dot w-2 h-2 rounded-full bg-acid" />
              Open to work
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={toggle ? "Close menu" : "Open menu"}
          aria-expanded={toggle}
          className="md:hidden relative z-50 w-11 h-11 rounded-full border border-line flex flex-col justify-center items-center gap-[5px]"
          onClick={() => setToggle(!toggle)}
        >
          <span
            className={`block h-px w-5 bg-bone transition-transform duration-300 ${
              toggle ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-bone transition-transform duration-300 ${
              toggle ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 z-40 bg-acid text-ink flex flex-col justify-end px-6 pb-14"
          >
            <ul className="list-none flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <li key={link.id} className="border-b border-ink/15 pb-2">
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}
                    className="flex items-baseline gap-4 font-display font-extrabold text-[56px] leading-none tracking-[-0.03em]"
                  >
                    <span className="font-mono font-normal text-[12px] tracking-[0.2em]">
                      0{index + 1}
                    </span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
