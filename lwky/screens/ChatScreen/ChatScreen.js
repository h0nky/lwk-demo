import React from 'react';
import { StyleSheet, View } from 'react-native';
import ChatList from '../../components/ChatList';
import PollCard from '../../components/PollCard';
import { CINDER } from '../../constants';

const ChatScreen = () => (
  <View style={styles.container}>
    <ChatList />
    <PollCard />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CINDER,
    paddingHorizontal: 12,
  },
});

export default ChatScreen;
