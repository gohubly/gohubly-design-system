type iTheme = Record<string, Record<string, string>>

export const theme = {
  fontSize: {
    XXXS: '12px',
    XXS: '14px',
    XS: '16px',
    SM: '20px',
    MD: '24px',
    M: '28px',
    LG: '32px',
    XL: '40px',
    XXL: '48px',
    Display: '64px',
  },
  lineHeight: {
    Default: '100%', // default
    XS: '115%',
    SM: '120%',
    MD: '133.333%',
    M: '32px', // new model with pixel TODO: 
    LG: '140%',
    XL: '150%',
    XXL: '170%',
    XXXL: '200%',
  },
  borderRadius: {
    None: '0px', // default
    SM: '8px',
    MD: '16px',
    LG: '24px',
    Pill: '500px', // >= 500px ?
    Circular: '50%' || '100%', // testar
  },
  borderWidth: {
    None: '0px', // default,
    Hairline: '1px',
    Thin: '2px',
    Thick: '4px',
    Heavy: '8px',
  },
  shadow: {
    Level1: '0px 1px 2px rgba(0, 0, 0, 0.16)',
    Level2: '0px 4px 8px rgba(0, 0, 0, 0.12)',
    Level3: '0px 8px 16px rgba(0, 0, 0, 0.08)',
    Level4: '0px 16px 32px rgba(0, 0, 0, 0.08)',
  },
  shadowOn: { // hover, active ?
    Level1: '0px 1px 2px rgba(0, 0, 0, 0.24);',
    Level2: '0px 4px 8px rgba(0, 0, 0, 0.24);',
    Level3: '0px 8px 16px rgba(0, 0, 0, 0.24);',
    Level4: '0px 16px 32px rgba(0, 0, 0, 0.24); ',
  },
  fontWeight: {
    900: '900',
    600: '600',
    500: '500',
    400: '400',
    300: '300',
  },
  spacing: {}, // como funcionaria com responsividade
  spacingInset: {},
  colors: {
    white: '#FFFFFF',
    transparent: 'transparent',

    primaryLightest: '#F1F2F9',
    primaryLight: '#CDD2EB',
    primary: '#425DC7', // default
    primaryMedium: '#2E44A1',
    primaryDark: '#142159',

    neutralLow: '#333333', // default
    neutralLowLight: '#777777',
    neutralLowMedium: '#555555',
    neutralLowDark: '#000000',

    neutralHigh: '#FFFFFF', // default
    neutralHighLight: '#EEEEEE',
    neutralHighMedium: '#D5D5D5',
    neutralHighDark: '#BBBBBB',

    success: '#2EB042', // default
    successLight: '#D8EED9',
    successMedium: '#158F2E',
    successDark: '#005F10',

    warning: '#FA9600', // default
    warningLight: '#FFEBAF',
    warningMedium: '#FFBE00',
    warningDark: '#A94500',

    helper: '#F03460', // default
    helperLight: '#FFD8E0',
    helperMedium: '#EB0045',
    helperDark: '#91003E',

    themeDark: '#16161A',
    themeLightDark: '#E6E6E6',
    themeLowDark: '#1b1a1f',
    themeHighDark: '#0b0a0d',

    themeHighLight: '#f6f9fc',

    grayLight: '#EDF0F2',

    disabled: 'rgba(20,33,89,0.1)',

    outlinedAndTextHover: 'rgba(20, 33, 89, 0.05)',

    tonalFilled: 'rgba(20,33,89,0.1)',
    tonalFilledHover: 'rgba(20, 33, 89, 0.15)',
  }
}

export const themeWithouthInterface: iTheme = { ...theme }

export type Theme = typeof theme

export default theme