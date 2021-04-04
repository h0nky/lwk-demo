/* eslint-disable react-native/no-inline-styles */
import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import CustomTextInput from '../CustomTextInput';
import OptionsList from '../OptionsList';

import { CINDER, WHITE, WATERLOO } from '../../constants';

const OptionsScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Text style={styles.buttonTextStyle}>Create</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <CustomTextInput />
      <OptionsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: CINDER,
    flex: 1,
    paddingTop: 24,
  },
  buttonTextStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: WATERLOO,
  },
});

export default OptionsScreen;
