import React from 'react';
import {
  Dimensions,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native';
import Image from 'react-native-scalable-image';
import PropTypes from 'prop-types';
import Countdown from '../Countdown';


const { width: VP_WIDTH } = Dimensions.get('screen');
let styles;

function Card(props) {
  const {
    onPress,
    imgUri,
    timestampStr,
    showCountdown,
    ...restProps
  } = props;

  const countdown = showCountdown && (
    <View style={styles.countdownContainer}>
      <Countdown targetTimestamp={timestampStr} />
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={onPress} {...restProps}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          width={VP_WIDTH}
          source={{ uri: imgUri }}
        />
        {countdown}
      </View>
    </TouchableWithoutFeedback>
  );
}

Card.propTypes = {
  onPress: PropTypes.func,
  imgUri: PropTypes.string.isRequired,
  timestampStr: PropTypes.string.isRequired,
  showCountdown: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  onPress: Function.prototype,
};

styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  countdownContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Card;
