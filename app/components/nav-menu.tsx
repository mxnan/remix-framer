import  { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedNavMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = ["Discover", "Projects", "Payments"];

  return (
    <div className="relative flex font-medium">
      {menuItems.map((item, index) => (
        <motion.span
          key={item}
          className="text-sm px-2 py-2 text-stone-400 cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {item}
        </motion.span>
      ))}
      <AnimatePresence mode="wait">
        {hoveredIndex !== null && (
          <motion.span
            className="absolute bottom-0 h-1 w-full block 
              rounded-md bg-stone-300"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                type: "tween",
                stiffness: 100,
                damping: 15,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.5,
                delay: 0.3,
                type: "tween",
                stiffness: 100,
                damping: 15,
              },
            }}
            style={{
              left: `${hoveredIndex * 33.33}%`,
              width: '33.33%'
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedNavMenu;