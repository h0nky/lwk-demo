import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

import {
  WHITE,
  POPPINS_REGULAR,
  WATERLOO,
  POPPINS_BOLD,
} from '../../constants';

const mock = [
  { name: 'Jared Phillips', message: 'Okie dokie!!' },
  { name: 'Kelley Hodges', message: 'Okie dokie!!' },
  { name: 'Edwin Bass', message: 'Sounds good to me!!!' },
  { name: 'Jared Phillips', message: 'Okie dokie!!' },
  { name: 'Jared Phillips', message: 'Okie dokie!!' },
  { name: 'Jared Phillips', message: 'Okie dokie!!' },
];

const ChatList = () => {
  const [state, setState] = useState(mock);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={item => item.key}
        renderItem={({ index, item }) => (
          <View key={index} style={styles.listItem}>
            <Avatar
              size="medium"
              icon={{ name: 'user', type: 'font-awesome' }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userMessage}>{item.message}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  userName: {
    color: WATERLOO,
    fontSize: 12,
    fontFamily: POPPINS_BOLD,
  },
  userMessage: {
    color: WHITE,
    fontSize: 15,
    fontFamily: POPPINS_REGULAR,
  },
});

export default ChatList;
