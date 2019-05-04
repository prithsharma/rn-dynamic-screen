import React from 'react';
import {
  Image,
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';


let styles;

function Card(props) {
  const {
    onPress,
    titleText,
    imgUri,
    descriptionText,
    // timestamp,
  } = props;
  const timestampText = 'About 30 mins ago';

  return (
    <TouchableHighlight onPress={onPress}>
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
    </TouchableHighlight>
  );
}

Card.propTypes = {
  onPress: PropTypes.func,
  titleText: PropTypes.string.isRequired,
  imgUri: PropTypes.string.isRequired,
  descriptionText: PropTypes.string,
};


Card.defaultProps = {
  onPress: Function.prototype,
  descriptionText: '',
};

styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 150,
    marginTop: 8,
    marginBottom: 4,
  },
  descriptionText: {
    fontSize: 16,
  },
  timestamp: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 4,
  },
});

export default Card;
