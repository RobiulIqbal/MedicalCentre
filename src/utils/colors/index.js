const maincolors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  green3: '#61d14c',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EDEEF0',
  grey4: '#B1B7C2',
  blue1: '#0066CB',
  black1: '#000000',
  black2: 'rgba(0,0,0,0.5)',
  red1: '#E06379',
};

export const colors = {
  primary: maincolors.green1,
  secondary: maincolors.dark1,
  tertiary: maincolors.blue1,
  white: 'white',
  black: 'black',
  disable: maincolors.grey3,
  text: {
    primary: maincolors.dark1,
    secondary: maincolors.grey1,
    inactive: maincolors.dark2,
    active: maincolors.green1,
    subTitle: maincolors.dark3,
  },
  button: {
    primary: {
      background: maincolors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: maincolors.dark1,
    },
    disable: {
      background: maincolors.grey3,
      text: maincolors.grey4,
    },
  },
  border: maincolors.grey2,
  splash: maincolors.grey2,
  cardLight: maincolors.green2,
  LoadingColor: maincolors.black2,
  erorrmassage: maincolors.red1,
  succesmassage: maincolors.green3,
};
