import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

interface Props {
  index: string;
  label: string;
  title: React.ReactNode;
}

const SectionHeading: React.FC<Props> = ({ index, label, title }) => (
  <motion.div
    variants={textVariant(0.1)}
    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-line pb-8"
  >
    <h2 className={styles.sectionHeadText}>{title}</h2>
    <p className={`${styles.sectionSubText} flex items-center gap-3 md:pb-4`}>
      <span className="text-acid">({index})</span>
      {label}
    </p>
  </motion.div>
);

export default SectionHeading;
