import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import { STEEL_GRAY, BLUE_RIBBON, WHITE, WATERLOO } from '../../constants';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const OptionsList = () => {
  const [state, setState] = useState([]);
  const [itemText, setItemText] = useState('');

  const onSubmitOption = e => {
    if (!itemText.length) {
      return;
    }
    setState([...state, { title: itemText, key: Math.random() }]);
    setItemText('');
  };

  console.log('ITEM TEXT', itemText);
  console.log('STATE', state);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Question</Text>
        <Text style={styles.label}>{`${state.length}/8`}</Text>
      </View>
      <FlatList
        data={state}
        renderItem={({ index, item, separators }) => (
          <View key={index} style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
      />
      <View>
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
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: WHITE,
    backgroundColor: STEEL_GRAY,
    borderRadius: 12,
  },
  title: {
    fontSize: 32,
    color: WHITE,
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

export default OptionsList;
