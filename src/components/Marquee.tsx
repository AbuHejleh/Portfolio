import { skills } from "../constants";

const Marquee = () => {
  const items = [...skills, ...skills];
  return (
    <div className="relative border-y border-line bg-acid text-ink overflow-hidden -rotate-[1.2deg] scale-[1.03] my-6">
      <div className="flex w-max animate-marquee py-4">
        {items.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="flex items-center gap-8 pr-8 font-display font-extrabold uppercase text-[28px] sm:text-[40px] tracking-[-0.02em] whitespace-nowrap"
          >
            {skill}
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z"
                fill="currentColor"
              />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
