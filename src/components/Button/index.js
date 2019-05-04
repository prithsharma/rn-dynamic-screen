import React from 'react';
import {
  TouchableOpacity, Text, View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';


let styles;

const Button = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
};


Button.defaultProps = {
  onPress: Function.prototype,
  children: null,
};

styles = StyleSheet.create({
  container: {},
});

export default Button;
