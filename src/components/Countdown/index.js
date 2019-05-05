import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';


let styles;

export default class Countdown extends Component {
  static getDurationFrom(targetTimestampStr) {
    const target = moment(targetTimestampStr);
    const duration = moment.duration(target.diff(moment()));
    return {
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

  constructor(props) {
    super(props);
    this.intervalId = null;
    this.state = {
      duration: this.getDurationFromNow(),
    };
  }

  componentDidMount() {
    // Update countdown timer every second
    this.intervalId = setInterval(() => {
      this.setState({
        duration: this.getDurationFromNow(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getDurationFromNow() {
    const { targetTimestamp } = this.props;
    return this.constructor.getDurationFrom(targetTimestamp);
  }

  static renderTimeBlock(label, value, scale) {
    const fontSizeLabel = scale * 14;
    const fontSizeValue = scale * 18;
    const blockPadding = scale * 6;

    return (
      <View style={[styles.timeBlock, { padding: blockPadding }]}>
        <Text style={[styles.timeValue, { fontSize: fontSizeValue }]}>
          {value.toString().padStart(2, '0')}
        </Text>
        <Text style={[styles.timeLabel, { fontSize: fontSizeLabel }]}>{label}</Text>
      </View>
    );
  }

  render() {
    const { scale } = this.props;
    const {
      duration: {
        seconds,
        minutes,
        hours,
        days,
      },
    } = this.state;

    if (seconds < 0) {
      return null;
    }

    return (
      <View style={styles.container}>
        {this.constructor.renderTimeBlock('DAYS', days, scale)}
        {this.constructor.renderTimeBlock('HRS', hours, scale)}
        {this.constructor.renderTimeBlock('MINS', minutes, scale)}
        {this.constructor.renderTimeBlock('SECS', seconds, scale)}
      </View>
    );
  }
}

Countdown.propTypes = {
  targetTimestamp: PropTypes.string.isRequired,
  scale: PropTypes.number,
};
Countdown.defaultProps = {
  scale: 1,
};

styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  timeBlock: {
    alignItems: 'center',
    padding: 6,
  },
  timeValue: {
    ...Platform.select({
      android: {
        fontFamily: 'RobotoBold',
      },
    }),
    color: 'white',
    fontWeight: '800',
  },
  timeLabel: {
    ...Platform.select({
      android: {
        fontFamily: 'Roboto',
      },
    }),
    color: 'white',
  },
});
