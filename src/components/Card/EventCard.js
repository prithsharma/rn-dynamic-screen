import React from 'react';
import {
  Image,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

let styles;

function Card(props) {
  const {
    onPress,
    imgUri,
  } = props;

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: imgUri }}
        />
        <View style={styles.descriptionContainer} />
      </View>
    </TouchableHighlight>
  );
}

Card.propTypes = {
  onPress: PropTypes.func,
  imgUri: PropTypes.string.isRequired,
};


Card.defaultProps = {
  onPress: Function.prototype,
};

styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 150 / 76,
    resizeMode: 'contain',
    marginTop: 8,
    marginBottom: 4,
  },
});

export default Card;
