import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import Label from '../Label';
import { STEEL_GRAY, WATERLOO, WHITE } from '../../constants';

const CustomTextInput = () => {
  const [text, onChangeText] = useState('');
  return (
    <SafeAreaView style={styles.containter}>
      <View style={styles.labelContainer}>
        <Label text="Question" />
        <Label text={`${text.length}/140`} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        maxLength={140}
        placeholder="Ask a question"
        placeholderTextColor={WATERLOO}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containter: {
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  input: {
    height: 51,
    color: WHITE,
    backgroundColor: STEEL_GRAY,
    paddingLeft: 20,
    borderWidth: 0,
    lineHeight: 22,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    borderRadius: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default CustomTextInput;
