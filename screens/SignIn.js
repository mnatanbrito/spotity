import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInTitle: {
    fontSize: 32,
    color: 'rgb(40,40,40)',
  },
});

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.signInTitle}>Sign In</Text>
    </View>
  );
};

export default SignIn;
