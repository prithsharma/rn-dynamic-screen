import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './index.styles';
import {
  fetchFeed,
  selectFeed,
} from '../../state';

export class HomeScreen extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchFeed());
  }

  render() {
    return (
      <View style={styles.container} />
    );
  }
}

HomeScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    feedItems: selectFeed(state),
  };
}
export default connect(mapStateToProps)(HomeScreen);
