import React from 'react';
import {
  Image,
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';


let styles;

function Card(props) {
  const {
    onPress,
    titleText,
    imgUri,
    descriptionText,
    timestampStr,
  } = props;
  const timestampText = moment(timestampStr).fromNow();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText}>
            {titleText}
          </Text>
          <Image
            style={styles.image}
            source={{ uri: imgUri }}
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.timestamp}>
              {timestampText}
            </Text>
            <Text style={styles.descriptionText} numberOfLines={2}>
              {descriptionText}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

Card.propTypes = {
  onPress: PropTypes.func,
  titleText: PropTypes.string.isRequired,
  imgUri: PropTypes.string.isRequired,
  descriptionText: PropTypes.string,
  timestampStr: PropTypes.string.isRequired,
};


Card.defaultProps = {
  onPress: Function.prototype,
  descriptionText: '',
};

styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    elevation: 2,
    borderRadius: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginHorizontal: 5,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    marginTop: 8,
    marginBottom: 4,
    resizeMode: 'contain',
    aspectRatio: 16 / 9,
  },
  descriptionText: {
    fontSize: 12,
  },
  timestamp: {
    color: 'grey',
    fontSize: 10,
    marginBottom: 4,
  },
});

export default Card;
