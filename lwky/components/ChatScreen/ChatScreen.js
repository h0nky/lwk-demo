import React from 'react';
import { StyleSheet, View } from 'react-native';
import ChatList from '../ChatList';

import { CINDER } from '../../constants';

const ChatScreen = () => (
  <View style={styles.container}>
    <ChatList />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CINDER,
  },
});

export default ChatScreen;
