
export const page = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};
