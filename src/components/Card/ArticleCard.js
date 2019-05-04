import React from 'react';
import {
  Image,
  TouchableWithoutFeedback,
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
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Image
            style={styles.image}
            source={{ uri: imgUri }}
          />
          <View style={styles.headerTitleCol}>
            <Text style={styles.titleText}>
              {titleText}
            </Text>
            <Text style={styles.timestamp}>
              {timestampText}
            </Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText} numberOfLines={2}>
            {unescape(descriptionText)}
          </Text>
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
};


Card.defaultProps = {
  onPress: Function.prototype,
  descriptionText: '',
};

styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 6,
    paddingVertical: 8,
    elevation: 2,
    borderRadius: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginHorizontal: 5,
  },
  headerRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  headerTitleCol: {
    flex: 3,
  },
  titleText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    flex: 2,
    marginRight: 8,
    resizeMode: 'contain',
    aspectRatio: 3 / 2,
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
