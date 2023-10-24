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