import React from 'react';
import {
  Image,
  TouchableWithoutFeedback,
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
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: imgUri }}
        />
        <View style={styles.descriptionContainer} />
      </View>
    </TouchableWithoutFeedback>
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
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 150 / 76,
    resizeMode: 'contain',
  },
});

export default Card;
