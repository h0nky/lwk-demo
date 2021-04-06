import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {
  CINDER,
  WHITE,
  WATERLOO,
  POPPINS_REGULAR,
  CHARADE,
} from '../../constants';

import Icon from 'react-native-vector-icons/FontAwesome';

const TabBar = () => {
  const [state, setState] = useState();

  const onHandleTextChange = e => {
    setState(e);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="bars" size={32} color={WHITE} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={state}
        placeholderTextColor={WATERLOO}
        onChangeText={onHandleTextChange}
      />
      <TouchableOpacity>
        <Icon name="arrow-circle-up" size={32} color={WHITE} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: CINDER,
    height: 80,
    paddingTop: 4,
    paddingHorizontal: 20,
    paddingBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: CHARADE,
    height: 35,
    width: 266,
    fontSize: 15,
    fontFamily: POPPINS_REGULAR,
    borderRadius: 10,
    paddingLeft: 15,
    color: WHITE,
  },
});

export default TabBar;
