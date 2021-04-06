import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import {
  STEEL_GRAY,
  WATERLOO,
  POPPINS_MEDIUM,
  POPPINS_BOLD,
  WHITE,
  POPPINS_REGULAR,
  BLACK,
} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChatHeader = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Options')}>
      <Icon name="times" size={22} color={WHITE} />
    </TouchableOpacity>
    <View style={styles.titleContainer}>
      <Text style={styles.headerTitle}>Lowkey Squad</Text>
      <Text style={styles.headerSubtitle}>1 member • 1 online</Text>
    </View>
    <Icon name="user" size={22} color={WHITE} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 44,
    paddingBottom: 2,
    paddingHorizontal: 20,
    backgroundColor: STEEL_GRAY,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: BLACK,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 0.5,
    },
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
  headerSubtitle: {
    color: WATERLOO,
    fontSize: 12,
    fontFamily: POPPINS_REGULAR,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ChatHeader;
