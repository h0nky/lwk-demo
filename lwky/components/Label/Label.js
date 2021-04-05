import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { WATERLOO } from '../../constants';

const Label = ({ text }) => <Text style={styles.label}>{text}</Text>;

const styles = StyleSheet.create({
  label: {
    color: WATERLOO,
    fontSize: 12,
  },
});

export default Label;
