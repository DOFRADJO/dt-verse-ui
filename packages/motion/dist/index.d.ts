declare const easeOut: readonly [0.16, 1, 0.3, 1];
declare const fadeIn: {
    initial: {
        opacity: number;
    };
    animate: {
        opacity: number;
        transition: {
            duration: number;
            ease: readonly [0.16, 1, 0.3, 1];
        };
    };
    exit: {
        opacity: number;
        transition: {
            duration: number;
        };
    };
};
declare const slideUp: {
    initial: {
        opacity: number;
        y: number;
    };
    animate: {
        opacity: number;
        y: number;
        transition: {
            duration: number;
            ease: readonly [0.16, 1, 0.3, 1];
        };
    };
    exit: {
        opacity: number;
        y: number;
        transition: {
            duration: number;
        };
    };
};
declare const staggerContainer: (stagger?: number, delay?: number) => {
    initial: {};
    animate: {
        transition: {
            staggerChildren: number;
            delayChildren: number;
        };
    };
};
declare const staggerItem: {
    initial: {
        opacity: number;
        y: number;
    };
    animate: {
        opacity: number;
        y: number;
        transition: {
            duration: number;
            ease: readonly [0.16, 1, 0.3, 1];
        };
    };
};

export { easeOut, fadeIn, slideUp, staggerContainer, staggerItem };
