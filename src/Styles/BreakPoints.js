export const breakPoints = {
  sm: 460, // for small mobiles
  md: 768, // for tablets and bigger mobiles
  lg: 1280, // for laptop and bigger tablets
  xl: 1920, // for bigger screens
};

export const device = {
  sm: `@media(max-width: ${breakPoints.sm}px)`,
  md: `@media(max-width: ${breakPoints.md}px)`,
  lg: `@media(max-width: ${breakPoints.lg}px)`,
  xl: `@media(max-width: ${breakPoints.xl}px)`,
};
