type iTheme = Record<string, Record<string, string>>;

export const theme = {
  fontSize: {
    XXXS: "12px",
    XXS: "14px",
    XS: "16px",
    SM: "20px",
    MD: "24px",
    M: "28px",
    LG: "32px",
    XL: "40px",
    XXL: "48px",
    Display: "64px",
    "11": "11px", // new model using pixel
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "22": "22px",
    "24": "24px",
    "26": "26px",
    "28": "28px",
    "30": "30px",
    "32": "32px",
    "34": "34px",
    "36": "36px",
    "38": "38px",
    "40": "40px",
    "42": "42px",
    "44": "44px",
    "46": "46px",
    "48": "48px",
  },
  lineHeight: {
    Default: "100%", // default
    XS: "115%",
    SM: "120%",
    MD: "133.333%",
    LG: "140%",
    XL: "150%",
    XXL: "170%",
    XXXL: "200%",
    "12": "12px", // new model using pixel
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "22": "22px",
    "24": "24px",
    "26": "26px",
    "28": "28px",
    "30": "30px",
    "32": "32px",
    "34": "34px",
    "36": "36px",
    "38": "38px",
    "40": "40px",
    "42": "42px",
    "44": "44px",
    "46": "46px",
    "48": "48px",
  },
  borderRadius: {
    None: "0px", // default
    SM: "8px",
    MD: "16px",
    LG: "24px",
    Pill: "500px", // >= 500px ?
    Circular: "50%" || "100%", // testar
  },
  borderWidth: {
    None: "0px", // default,
    Hairline: "1px",
    Thin: "2px",
    Thick: "4px",
    Heavy: "8px",
  },
  shadow: {
    Level1: "0px 1px 2px rgba(0, 0, 0, 0.16)",
    Level2: "0px 4px 8px rgba(0, 0, 0, 0.12)",
    Level3: "0px 8px 16px rgba(0, 0, 0, 0.08)",
    Level4: "0px 16px 32px rgba(0, 0, 0, 0.08)",
  },
  shadowOn: {
    // hover, active ?
    Level1: "0px 1px 2px rgba(0, 0, 0, 0.24);",
    Level2: "0px 4px 8px rgba(0, 0, 0, 0.24);",
    Level3: "0px 8px 16px rgba(0, 0, 0, 0.24);",
    Level4: "0px 16px 32px rgba(0, 0, 0, 0.24); ",
  },
  fontWeight: {
    900: "900",
    600: "600",
    500: "500",
    400: "400",
    300: "300",
  },
  spacing: {}, // como funcionaria com responsividade
  spacingInset: {},
  colors: {
    white: "#FFFFFF",
    transparent: "transparent",

    primaryLightest: "#F1F2F9",
    primaryLight: "#CDD2EB",
    primary: "#425DC7", // default
    primaryMedium: "#2E44A1",
    primaryDark: "#142159",

    neutralLow: "#333333", // default
    neutralLowLight: "#777777",
    neutralLowMedium: "#555555",
    neutralLowDark: "#000000",

    neutralHigh: "#FFFFFF", // default
    neutralHighLight: "#EEEEEE",
    neutralHighMedium: "#D5D5D5",
    neutralHighDark: "#BBBBBB",

    success: "#2EB042", // default
    successLight: "#D8EED9",
    successMedium: "#158F2E",
    successDark: "#005F10",

    warning: "#FA9600", // default
    warningLight: "#FFEBAF",
    warningMedium: "#FFBE00",
    warningDark: "#A94500",

    helper: "#F03460", // default
    helperLight: "#FFD8E0",
    helperMedium: "#EB0045",
    helperDark: "#91003E",

    themeDark: "#16161A",
    themeLightDark: "#E6E6E6",
    themeLowDark: "#1b1a1f",
    themeHighDark: "#0b0a0d",

    themeHighLight: "#f6f9fc",
    grayLight: "#EDF0F2",
    disabled: "#F1F1F7",

    // new colors

    brandHovered: '#5869B4',

    outlinedAndTextHover: "#F1F1F7",

    tonalFilled: "#EAECF6",
    tonalFilledHover: "#D5DAEC",

    iconDefaut: "#26282F",
    iconDisabled: "#A4A8B5",

    textNeutralDefaut: "#18191E",
    textDisabled: "#808391",

    dangerDefaut: "#EB0045",
    dangerHovered: "#BC0037",
  },
};

export const themeWithouthInterface: iTheme = { ...theme };

export type Theme = typeof theme;

export default theme;
