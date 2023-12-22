import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Logo = () => {
  return (
    <div className="group flex items-center">
      <Link to="/">
        <motion.svg
          width="75px"
          viewBox="0 0 400 300"
          initial={"hidden"}
          animate="visible"
        >
          {/* Starto of first shape */}
          <motion.line
            x1="50"
            y1="100"
            x2="50"
            y2="215"
            stroke="#7014E0"
            variants={draw}
            custom={0.1}
          />

          <motion.line
            x1="130"
            y1="43"
            x2="44"
            y2="113"
            stroke="#7014E0"
            variants={draw}
            custom={0.2}
          />
          <motion.line
            x1="124"
            y1="55"
            x2="124"
            y2="250"
            stroke="#7014E0"
            variants={draw}
            custom={0.5}
          />

          {/* end of first shape */}

          <motion.line
            x1="190"
            y1="275"
            x2="116"
            y2="236"
            stroke="#7014E0"
            variants={draw}
            custom={0.7}
          />

          <motion.line
            x1="130"
            y1="113"
            x2="44"
            y2="183"
            stroke="#7014E0"
            variants={draw}
            custom={0.9}
          />

          <motion.line
            x1="81"
            y1="102"
            x2="96"
            y2="120"
            stroke="#6C0404"
            variants={draw}
            custom={1.5}
          />

          <motion.line
            x1="170"
            y1="280"
            x2="294"
            y2="22"
            stroke="#7014E0"
            variants={draw}
            custom={0.7}
          />
        </motion.svg>
      </Link>
      <Link
        className="group-hover:text-purple-700 duration-200 ease-in font-bold text-[3rem] "
        to="/"
      >
        TechVerse
      </Link>
    </div>
  );
};

export default Logo;
