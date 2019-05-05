import React from 'react';
import {
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Countdown from '../Countdown';


let styles;

function Card(props) {
  const {
    onPress,
    city,
    localTime,
    title,
    timestampStr,
    showCountdown,
  } = props;
  const detailsStr = `${city}, ${localTime}`;

  const countdown = showCountdown && (
    <View style={styles.minimisedCountdown}>
      <Countdown targetTimestamp={timestampStr} scale={0.7} />
    </View>
  );

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={styles.touchableContainer}
    >
      <View style={styles.container}>
        <View style={styles.details}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.detailsText}>{detailsStr}</Text>
        </View>
        {countdown}
      </View>
    </TouchableWithoutFeedback>
  );
}

Card.propTypes = {
  onPress: PropTypes.func,
  city: PropTypes.string,
  localTime: PropTypes.string,
  title: PropTypes.string,
  timestampStr: PropTypes.string.isRequired,
  showCountdown: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  onPress: Function.prototype,
  city: '',
  localTime: '',
  title: '',
};

styles = StyleSheet.create({
  touchableContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  container: {
    borderTopWidth: 2,
    borderTopColor: '#ffcc01',
    backgroundColor: 'black',
    flexDirection: 'row',
    padding: 6,
  },
  details: {
    // alignItems: 'flex-start',
    paddingLeft: 8,
    justifyContent: 'center',
    flex: 1,
  },
  minimisedCountdown: {
    color: 'white',
  },
  titleText: {
    fontSize: 15,
    color: '#ffcc01',
    fontWeight: 'bold',
  },
  detailsText: {
    fontSize: 12,
    color: 'white',
  },
});

export default Card;
