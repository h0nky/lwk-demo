import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import PollCard from '../PollCard';
import {
  WHITE,
  POPPINS_REGULAR,
  WATERLOO,
  POPPINS_BOLD,
} from '../../constants';

import { mockData } from './mockData';

const ChatListItem = ({ index, item }) => (
  <View key={index} style={styles.listItem}>
    <Avatar size="large" icon={{ name: 'user', type: 'font-awesome' }} />
    <View>
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userMessage}>{item.message}</Text>
    </View>
  </View>
);

const ChatList = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState(mockData);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={item => item.key}
        renderItem={props => <ChatListItem {...props} />}
      />
      <PollCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 12,
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
    lineHeight: 22,
  },
  userMessage: {
    color: WHITE,
    fontSize: 15,
    fontFamily: POPPINS_REGULAR,
    lineHeight: 22,
  },
});

export default ChatList;
