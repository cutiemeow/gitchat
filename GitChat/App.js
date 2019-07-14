import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormLogin from './src/component/FormLogin/';

export default function App() {
  return (
    <View style={styles.container}>
      <FormLogin></FormLogin>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
