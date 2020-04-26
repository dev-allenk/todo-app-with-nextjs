export const MAIN_COLOR = "#4c80f1";

const size = {
  tablet: 768,
  desktop: 1200,
};
export const device = {
  tablet: `(min-width: ${size.tablet}px) and
           (max-width: ${size.desktop - 1}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
};
