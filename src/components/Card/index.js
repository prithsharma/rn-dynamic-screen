import React from 'react';
import {
  TouchableHighlight, Text, View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';


let styles;

const Card = ({ onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>{'Regian Eersel\'s game'}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

Card.propTypes = {
  onPress: PropTypes.func,
};


Card.defaultProps = {
  onPress: Function.prototype,
};

styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
});

export default Card;
