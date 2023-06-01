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

    neutralHigh: "#EEEEEE", // default
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

    // new DS colors

    textNeutralDefault: "#18191E",
    textNeutralSubtle: "#26282F",
    textNeutralSubtlest: "#4D505E",

    textInverseDefault: '#FFFFFF',
    textInverseSubtle: '#F1F1F7',
    textInverseSubtlest: '#E0E2E8',

    textDisabled: "#808391",

    textBrand: '#2E44A1',

    textDanger: '#EB0045',
    textSuccess: '#167E32',
    textWarning: '#66470A',
    textWarningInverse: '#18191E',
    textDiscovery: '#2E44A1',
    textInformation: '#2E44A1',

    linkDefault: '#2E44A1',
    linkHovered: '#1C2961',
    linkPressed: '#2E44A1',

    bgBrandBoldDefault: '#2E44A1',
    bgBrandBoldHovered: '#5869B4',
    bgBrandBoldPressed: '#2E44A1',
    bgBrandSubtleDefault: '#EAECF6',
    bgBrandSubtleHovered: '#D5DAEC',
    bgBrandSubtlePressed: '#EAECF6',

    bgNeutralSubtlestDefault: '#FFFFFF',
    bgNeutralSubtlestHovered: '#F1F1F7',
    bgNeutralSubtlestPressed: '#FFFFFF',
    bgNeutralSubtleDefault: '#F1F1F7',
    bgNeutralSubtleHovered: '#E0E2E8',
    bgNeutralSubtlePressed: '#F1F1F7',
    bgNeutralBoldDefault: '#1C2961',

    bgInputDefault: '#FFFFFF',
    bgInputHovered: '#F6F6F9',
    bgInputPressed: '#FFFFFF',

    bgSelectedBoldDefault: '#2E44A1',
    bgSelectedBoldHovered: '#5869B4',
    bgSelectedBoldPressed:'#2E44A1',
    bgSelectedSubtleDefault: '#F1F1F7',
    bgSelectedSubtleHovered: '#E0E2E8',
    bgSelectedSubtlePressed: '#F1F1F7',

    bgDisabledDefault: '#F1F1F7',

    bgDangerSubtleDefault: '#FEF2F6',
    bgDangerSubtleHovered: '#FCD9E3',
    bgDangerSubtlePressed: '#F8A6BE',
    bgDangerBoldDefault: '#EB0045',
    bgDangerBoldHovered: '#BC0037',
    bgDangerBoldPressed: '',
    
    bgWarningSubtleDefault: '#FFFBF4',
    bgWarningSubtleHovered: '#FFF3DD', 
    bgWarningSubtlePressed: '#FFE4AE',
    bgWarningBoldDefault: '#FFD075',
    bgWarningBoldHovered: '#FFC452',
    bgWarningBoldPressed: '#FFB119',

    bgSuccessSubtleDefault: '#DDF0E2',
    bgSuccessSubtleHovered: '#F4FAF5',
    bgSuccessSubtlePressed: '#DDF0E2',
    bgSuccessBoldDefault: "#167E32",
    bgSuccessBoldHovered: '#105E26',
    bgSuccessBoldPressed: '#0B3F19',

    bgDiscoverySubtleDefault: '#EAECF6',
    bgDiscoverySubtleHovered: '#D5DAEC',
    bgDiscoverySubtlePressed: '#B6BEDE',
    bgDiscoveryBoldDefault: '#2E44A1',
    bgDiscoveryBoldPHovered: '#253681',
    bgDiscoveryBoldPressed: '#1C2961',

    borderDefault: '#E0E2E8',
    borderBold: '#C8CCD5',
    borderInverse: '#F1F1F7',
    borderInput: '#C8CCD5',
    borderDisabled: '#C8CCD5',
    borderFocused: '#5869B4',
    borderSelected: '#2E44A1',
    borderBrand: '#2E44A1',

    borderDanger: '#EB0045',
    borderSuccess: '#167E32',
    borderWarning: '#66470A',
    borderDiscovery: '#2E44A1',
    borderInformation: '#253681',

    iconDefault: '#26282F',
    iconSubtle: '#4D505E',
    iconSubtlest: '#616473',
    iconInverse: '#FFFFFF',
    iconDisabled: '#A4A8B5',
    iconSelected: '#2E44A1',
    iconBrand: '#2E44A1',

    iconDanger: '#EB0045',
    iconSuccess: '#167E32',
    iconWarning: '#66470A',
    iconDiscovery: '#2E44A1',
    iconInformation: '#253681',

    outlinedAndTextHover: "#F1F1F7",

    tonalFilled: "#EAECF6",
    tonalFilledHover: "#D5DAEC",
    
    textNeutralLowDark: "#101010",
  },
};

export const themeWithouthInterface: iTheme = { ...theme };

export type Theme = typeof theme;

export default theme;
