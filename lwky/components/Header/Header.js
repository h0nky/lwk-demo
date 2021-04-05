import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import {
  CINDER,
  WATERLOO,
  POPPINS_MEDIUM,
  POPPINS_BOLD,
  WHITE,
} from '../../constants';

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>New Poll</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Text style={styles.headerRight}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 45,
    paddingHorizontal: 16,
    backgroundColor: CINDER,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  headerRight: {
    fontFamily: POPPINS_MEDIUM,
    fontSize: 14,
    color: WATERLOO,
  },
  headerTitle: {
    fontFamily: POPPINS_BOLD,
    fontSize: 16,
    color: WHITE,
  },
});

export default Header;
