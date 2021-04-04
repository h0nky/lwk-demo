import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';
import { STEEL_GRAY, WATERLOO, WHITE } from '../../constants';

const CustomTextInput = () => {
  const [text, onChangeText] = useState('');
  return (
    <SafeAreaView style={styles.containter}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Question</Text>
        <Text style={styles.label}>{`${text.length}/140`}</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          maxLength={140}
          placeholder="Ask a question"
          placeholderTextColor={WATERLOO}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  input: {
    height: 51,
    margin: 15,
    color: WHITE,
    backgroundColor: STEEL_GRAY,
    paddingLeft: 20,
    borderWidth: 0,
    lineHeight: 22,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    borderRadius: 12,
  },
  label: {
    color: WATERLOO,
    fontSize: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});

export default CustomTextInput;
