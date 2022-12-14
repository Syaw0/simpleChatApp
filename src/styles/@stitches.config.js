import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  keyframes,
  createTheme,
  globalCss,
  theme,
  config,
} = createStitches({
  theme: {
    colors: {
      bg: 'rgba(254, 251, 253 ,1)',
      bg100: 'rgba(254, 251, 253 ,0.1)',
      bg200: 'rgba(254, 251, 253 ,0.2)',
      bg300: 'rgba(254, 251, 253 ,0.3)',
      bg400: 'rgba(254, 251, 253 ,0.4)',
      bg500: 'rgba(254, 251, 253 ,0.5)',
      bg600: 'rgba(254, 251, 253 ,0.6)',
      bg700: 'rgba(254, 251, 253 ,0.7)',
      bg800: 'rgba(254, 251, 253 ,0.8)',
      bg900: 'rgba(254, 251, 253 ,0.9)',

      onBg: 'rgba(27,27,29 ,1)',
      onBg100: 'rgba(27,27,29 ,0.1)',
      onBg200: 'rgba(27,27,29 ,0.2)',
      onBg300: 'rgba(27,27,29 ,0.3)',
      onBg400: 'rgba(27,27,29 ,0.4)',
      onBg500: 'rgba(27,27,29 ,0.5)',
      onBg600: 'rgba(27,27,29 ,0.6)',
      onBg700: 'rgba(27,27,29 ,0.7)',
      onBg800: 'rgba(27,27,29 ,0.8)',
      onBg900: 'rgba(27,27,29 ,0.9)',

      primary: 'rgba(75, 96, 122,1)',
      primary100: 'rgba(75, 96, 122,0.1)',
      primary200: 'rgba(75, 96, 122,0.2)',
      primary300: 'rgba(75, 96, 122,0.3)',
      primary400: 'rgba(75, 96, 122,0.4)',
      primary500: 'rgba(75, 96, 122,0.5)',
      primary600: 'rgba(75, 96, 122,0.6)',
      primary700: 'rgba(75, 96, 122,0.7)',
      primary800: 'rgba(75, 96, 122,0.8)',
      primary900: 'rgba(75, 96, 122,0.9)',

      onPrimary: 'rgba(255,255,255,1)',
      onPrimary100: 'rgba(255,255,255,0.1)',
      onPrimary200: 'rgba(255,255,255,0.2)',
      onPrimary300: 'rgba(255,255,255,0.3)',
      onPrimary400: 'rgba(255,255,255,0.4)',
      onPrimary500: 'rgba(255,255,255,0.5)',
      onPrimary600: 'rgba(255,255,255,0.6)',
      onPrimary700: 'rgba(255,255,255,0.7)',
      onPrimary800: 'rgba(255,255,255,0.8)',
      onPrimary900: 'rgba(255,255,255,0.9)',

      secondary: 'rgba(91, 95, 1027,1)',
      secondary100: 'rgba(91, 95, 1027,0.1)',
      secondary200: 'rgba(91, 95, 1027,0.2)',
      secondary300: 'rgba(91, 95, 1027,0.3)',
      secondary400: 'rgba(91, 95, 1027,0.4)',
      secondary500: 'rgba(91, 95, 1027,0.5)',
      secondary600: 'rgba(91, 95, 1027,0.6)',
      secondary700: 'rgba(91, 95, 1027,0.7)',
      secondary800: 'rgba(91, 95, 1027,0.8)',
      secondary900: 'rgba(91, 95, 1027,0.9)',

      onSecondary: 'rgba(255,255,255,1)',
      onSecondary100: 'rgba(255,255,255,0.1)',
      onSecondary200: 'rgba(255,255,255,0.2)',
      onSecondary300: 'rgba(255,255,255,0.3)',
      onSecondary400: 'rgba(255,255,255,0.4)',
      onSecondary500: 'rgba(255,255,255,0.5)',
      onSecondary600: 'rgba(255,255,255,0.6)',
      onSecondary700: 'rgba(255,255,255,0.7)',
      onSecondary800: 'rgba(255,255,255,0.8)',
      onSecondary900: 'rgba(255,255,255,0.9)',
      error: 'rgba(186, 26, 26,1)',
      onError: 'rgba(255,255,255,1)',
    },

    shadows: {
      '1dp': '0px 0px 2px 0px #00000024 , 0px 2px 2px 0px #0000001f , 0px 1px 3px 0px  #00000033',
      '8dp': '0px 8px 10px 1px #00000024 , 0px 3px 14px 3px #0000001f , 0px 4px 15px 0px  #00000033',
      '1dpw': '0px 0px 2px 0px #ffffff24 , 0px 2px 2px 0px #ffffff1f , 0px 1px 3px 0px  #ffffff33',
      '24dp': '0px 24px 38px 3px #00000024 , 0px 9px 46px 8px #0000001f , 0px 11px 15px 0px  #00000033',
    },

    fonts: {
      barlow: 'Barlow',
      playfairDisplay: 'Playfair Display',
    },
    fontSizes: {
      logo: '50px',
      headline1: '36px',
      headline2: '32px',
      headline3: '28px',
      headline4: '24px',
      headline5: '22px',
      headline6: '18px',
      subhead1: '16px',
      subhead2: '14px',
      subhead3: '12px',
      button: '15px',
    },

    lineHeights: {
      headline1: '44px',
      headline2: '40px',
      headline3: '36px',
      headline4: '32px',
      headline5: '28px',
      headline6: '24px',
      subhead1: '24px',
      subhead2: '20px',
      subhead3: '18px',
      button: '20px',
    },

    space: {
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px',
      5: '40px',
      6: '48px',
      7: '56px',
      8: '64px',
      9: '72px',
      10: '80px',
      11: '88px',
      12: '96px',
      13: '102px',
      14: '110px',
      15: '120px',
      16: '130px',
      17: '140px',
      18: '150px',
      19: '160px',
      20: '170px',
      21: '180px',
      22: '190px',
      23: '200px',
    },
    transitions: {
      coAndBg: 'color 0.5s , background-color 0.5s , fill 0.5s',
      shadowing: 'box-shadow 0.5s',
    },
  },

  media: {
    bp0: '(max-width:1200px)',
    bp1: '(max-width:1000px)',
    bp2: '(max-width:850px)',
    bp3: '(max-width:750px)',
    bp3_1: '(max-width:600px)',
    bp4: '(max-width:540px)',
    bp5: '(max-width:420px)',

  },

  utils: {
    logo: (weight) => ({
      fontFamily: '$playfairDisplay',
      fontWeight: weight,
      fontSize: '$logo',
      lineHeight: '$headline1',
      fontStyle: 'italic',
    }),

    headline1: (weight) => ({
      fontFamily: '$barlow',
      fontWeight: weight,
      fontSize: '$headline1',
      lineHeight: '$headline1',
      fontStyle: 'normal',
    }),

    headline1_i: (weight) => ({
      headline1: weight,
      fontStyle: 'italic',
    }),

    headline2: (weight) => ({
      fontFamily: '$barlow',
      fontWeight: weight,
      fontSize: '$headline2',
      lineHeight: '$headline2',
      fontStyle: 'normal',
    }),

    headline2_i: (weight) => ({
      headline2: weight,
      fontStyle: 'italic',
    }),

    headline3: (weight) => ({
      fontFamily: '$barlow',
      fontWeight: weight,
      fontSize: '$headline3',
      lineHeight: '$headline3',
      fontStyle: 'normal',
    }),

    headline3_i: (weight) => ({
      headline3: weight,
      fontStyle: 'italic',
    }),

    headline4: (weight) => ({
      fontFamily: '$barlow',
      fontWeight: weight,
      fontSize: '$headline4',
      lineHeight: '$headline4',
      fontStyle: 'normal',
    }),

    headline4_i: (weight) => ({
      headline4: weight,
      fontStyle: 'italic',
    }),

    headline5: (weight) => ({
      fontFamily: '$barlow',
      fontWeight: weight,
      fontSize: '$headline5',
      lineHeight: '$headline5',
      fontStyle: 'normal',
    }),

    headline5_i: (weight) => ({
      headline5: weight,
      fontStyle: 'italic',
    }),

    headline6: (weight) => ({
      fontFamily: '$barlow',
      fontWeight: weight,
      fontSize: '$headline6',
      lineHeight: '$headline6',
      fontStyle: 'normal',
    }),

    headline6_i: (weight) => ({
      headline6: weight,
      fontStyle: 'italic',
    }),

    subhead1_i: (weight) => ({
      subhead1: weight,
      fontStyle: 'italic',
    }),

    subhead1: (weight) => ({
      fontFamily: '$barlow',
      fontWeight: weight,
      fontSize: '$subhead1',
      lineHeight: '$subhead1',
      fontStyle: 'normal',
      letterSpacing: '$1',
    }),

    subhead2: (weight) => ({
      fontFamily: '$barlow',
      fontWeight: weight,
      fontSize: '$subhead2',
      lineHeight: '$subhead2',
      fontStyle: 'normal',
      letterSpacing: '$1',
    }),
    subhead2_i: (weight) => ({
      subhead2: weight,
      fontStyle: 'italic',
    }),

    subhead3: (weight) => ({
      fontFamily: '$barlow',
      fontWeight: weight,
      fontSize: '$subhead3',
      lineHeight: '$subhead3',
      fontStyle: 'normal',
      letterSpacing: '$1',
    }),

    subhead3_i: (weight) => ({
      subhead3: weight,
      fontStyle: 'italic',
    }),

    button: (weight) => ({
      fontFamily: '$barlow',
      fontWeight: weight,
      fontSize: '$button',
      lineHeight: '$button',
      fontStyle: 'normal',
      letterSpacing: '$1',
    }),

    flex_r: () => ({
      display: 'flex',
      flexDirection: 'row',
    }),

    flex_c: () => ({
      display: 'flex',
      flexDirection: 'column',
    }),

    jc_ac: () => ({
      'justify-content': 'center',
      'align-items': 'center',
    }),

    jfs_afs: () => ({
      'justify-content': 'flex-start',
      'align-items': 'flex-start',
    }),
    jfs_ac: () => ({
      'justify-content': 'flex-start',
      'align-items': 'center',
    }),
    jsb_ac: () => ({
      'justify-content': 'space-between',
      'align-items': 'center',
    }),
    bgCentering: () => ({
      backgroundPosition: 'center',
      backgroundOrigin: 'content-box',
      backgroundSize: 'cover',
    }),

  },
});
