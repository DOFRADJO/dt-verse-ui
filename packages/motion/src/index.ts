export const easeOut = [0.16, 1, 0.3, 1] as const;

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35, ease: easeOut } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

export const slideUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.2 } }
};

export const staggerContainer = (stagger = 0.06, delay = 0) => ({
  initial: {},
  animate: {
    transition: { staggerChildren: stagger, delayChildren: delay }
  }
});

export const staggerItem = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOut } }
};