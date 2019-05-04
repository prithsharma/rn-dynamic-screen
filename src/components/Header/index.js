import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';


let styles;

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./logo.png')}
      />
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    maxWidth: 96,
    resizeMode: 'cover',
    height: '80%',
  },
});
