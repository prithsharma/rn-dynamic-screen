import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './index.styles';


export class HomeScreen extends Component {
  componentDidMount() {
    // TODO: fetch data here
  }

  render() {
    return (
      <View style={styles.container} />
    );
  }
}


function mapStateToProps() {
  return {};
}
export default connect(mapStateToProps)(HomeScreen);
