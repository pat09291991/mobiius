export const goingTop = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const goingDown = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const rightToLeft = {
  hidden: {
    opacity: 0,
    x: 50, // Set x to a negative value for right-to-left animation
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const leftToRight = {
  hidden: {
    opacity: 0,
    x: -100, // Change y to x and set a negative value
  },
  visible: {
    opacity: 1,
    x: 0, // Change y to x and set it to 0
    transition: {
      duration: 1,
    },
  },
};
