import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CINDER, WHITE } from '../../constants';

const ChatScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: CINDER,
    flex: 1,
  },
});

export default ChatScreen;
