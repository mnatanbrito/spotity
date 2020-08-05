import { StyleSheet } from 'react-native';

import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  withRedBorder: {
    borderWidth: 3,
    borderColor: 'red',
  },
  defaultFont: {
    fontFamily: 'Circular',
  },
  stackHeaderStyle: {
    backgroundColor: colors.stackHeaderBackground,
    borderBottomColor: 'transparent',
  },
  stackHeaderTitleStyle: {
    fontFamily: 'Circular',
    fontSize: 16,
    color: colors.pallete.white,
  },
});
