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
  } = props;

  const countdown = showCountdown && (
    <View style={styles.countdownContainer}>
      <Countdown targetTimestamp={timestampStr} />
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{ uri: imgUri }}
          background
          width={VP_WIDTH}
          style={styles.image}
        >
          {countdown}
        </Image>
      </View>
    </TouchableWithoutFeedback>
  );
}

Card.propTypes = {
  imgUri: PropTypes.string.isRequired,
  timestampStr: PropTypes.string.isRequired,
  showCountdown: PropTypes.bool.isRequired,
  onPress: PropTypes.func,
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
    justifyContent: 'flex-end',
  },
});

export default Card;
