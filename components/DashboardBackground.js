import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundWrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgb(40,40,40)',
  },
});

// 170, 109, 109

const DashboardBackground = ({ children }) => {
  return (
    <>
      <View style={styles.backgroundWrapper}>
        <Svg height={dimensions.height} width={dimensions.width}>
          <Defs>
            <LinearGradient id="grad" x1="-10%" y1="-10%" x2="70%" y2="70%">
              <Stop offset="0%" stopColor="rgb(170, 109, 109)" />
              <Stop offset="45%" stopColor="rgb(0,0,0)" />
            </LinearGradient>
          </Defs>
          <Rect
            x="0"
            y="0"
            width={dimensions.width}
            height={dimensions.height}
            fill="url(#grad)"
          />
        </Svg>
      </View>
      <View style={styles.container}>{children}</View>
    </>
  );
};

export default DashboardBackground;
