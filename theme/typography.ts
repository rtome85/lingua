export const fontFamily = {
  regular: 'Nunito_400Regular',
  semiBold: 'Nunito_600SemiBold',
  bold: 'Nunito_700Bold',
} as const;

export const fontSize = {
  displayLg: 32,
  displayMd: 24,
  h1: 20,
  h2: 16,
  bodyLg: 16,
  body: 14,
  bodySm: 12,
  caption: 11,
} as const;

// Multipliers
const tight = 1.2;  // Display / Headings
const normal = 1.5; // Body / Caption

export const typography = {
  displayLg: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.displayLg,
    lineHeight: Math.round(fontSize.displayLg * tight),
  },
  displayMd: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.displayMd,
    lineHeight: Math.round(fontSize.displayMd * tight),
  },
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h1,
    lineHeight: Math.round(fontSize.h1 * tight),
  },
  h2: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.h2,
    lineHeight: Math.round(fontSize.h2 * tight),
  },
  bodyLg: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodyLg,
    lineHeight: Math.round(fontSize.bodyLg * normal),
  },
  body: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.body,
    lineHeight: Math.round(fontSize.body * normal),
  },
  bodySm: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.bodySm,
    lineHeight: Math.round(fontSize.bodySm * normal),
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.caption,
    lineHeight: Math.round(fontSize.caption * normal),
  },
} as const;
