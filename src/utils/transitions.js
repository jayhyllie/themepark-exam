import { useEffect, useRef } from "react";

export const slideVariants = {
  hiddenRight: {
    x: "100%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },
};
export const slidersVariants = {
  hover: {
    scale: 1.2,
    backgroundColor: "var(--clr-accent)",
  },
};
export const dotsVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -10,
    scale: 1.2,
    transition: { type: "spring", stiffness: 1000, damping: "10" },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

export const buttonVariants = {
  whileHover: {
    scale: 1.1
  },
  whileTap: {
    scale: 0.9
  },
  transition: { 
    ease: "easeInOut"
  }
}

export const cardContent = {
  initial: { height: "0", opacity: 0 },
  animate: { height: "70px", opacity: 1 },
  transition: { ease: "easeIn" },
};

export const useDimensions = ref => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
  }, [ref]);

  return dimensions.current;
}

export const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const ListVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const ListItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    pointerEvents: "unset",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    pointerEvents: "none",
    transition: {
      y: { stiffness: 1000 },
    },
  },
};