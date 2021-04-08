import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import OptionsList from '../../components/OptionsList';
import Toggle from '../../components/Toggle';
import { CINDER } from '../../constants';

const OptionsScreen = () => (
  <View style={styles.container}>
    <CustomTextInput />
    <OptionsList />
    <View style={styles.toggleContainer}>
      <Toggle title="Annonymous voting" />
      <Toggle title="Ability to add more options" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: CINDER,
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 20,
  },
  toggleContainer: {
    flex: 1,
  },
});

export default OptionsScreen;
