import React, { useState } from 'react';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Label from '../Label';

import {
  STEEL_GRAY,
  BLUE_RIBBON,
  WHITE,
  YANKEES_BLUE,
  POPPINS_REGULAR,
} from '../../constants';

const OptionsList = () => {
  const [state, setState] = useState([]);
  const [itemText, setItemText] = useState('');

  const onSubmitOption = e => {
    if (!itemText.length || state.length >= 8) {
      return;
    }
    setState([...state, { title: itemText, key: Math.random() }]);
    setItemText('');
  };

  const onHandleRemove = id => {
    const newState = state.filter(item => item.key !== id);
    setState([...newState]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.labelContainer}>
        <Label text="Options" />
        <Label text={`${state.length}/8`} />
      </View>
      <View>
        <FlatList
          data={state}
          keyExtractor={item => item.key}
          renderItem={({ index, item }) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemText}>{item.title}</Text>
              <TouchableOpacity onPress={() => onHandleRemove(item.key)}>
                <View style={styles.deleteButton} />
              </TouchableOpacity>
            </View>
          )}
        />
        <TextInput
          style={styles.input}
          value={itemText}
          onChangeText={setItemText}
          onSubmitEditing={onSubmitOption}
          placeholder="Add an option"
          placeholderTextColor={BLUE_RIBBON}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingLeft: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: STEEL_GRAY,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    color: WHITE,
    fontSize: 15,
  },
  title: {
    fontSize: 32,
    color: WHITE,
  },
  deleteButton: {
    backgroundColor: YANKEES_BLUE,
    height: 50,
    width: 50,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  input: {
    height: 51,
    margin: 15,
    color: WHITE,
    backgroundColor: STEEL_GRAY,
    paddingLeft: 20,
    borderWidth: 0,
    lineHeight: 22,
    fontFamily: POPPINS_REGULAR,
    fontSize: 15,
    borderRadius: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});

export default OptionsList;
