import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const scale = SCREEN_HEIGHT / 680;
const normalised = dp => PixelRatio.getFontScale() * dp * scale;

const COLORS = {
  primary: '#27374D',
  secondary: '#526D82',
  tertiary: '#9DB2BF',
  fourth: '#9DB2BF',

  gray: '#83829A',
  gray2: '#C1C0C8',

  white: '#F3F4F8',
  lightWhite: '#FAFAFC',
};

const FONT = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
};

const SIZES = {
  xSmall: normalised(10),
  small: normalised(12),
  regular: normalised(14),
  medium: normalised(16),
  large: normalised(20),
  xLarge: normalised(24),
  xxLarge: normalised(32),
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export {COLORS, FONT, SIZES, SHADOWS};
