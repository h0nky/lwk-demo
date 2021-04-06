import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {
  CINDER,
  WATERLOO,
  POPPINS_MEDIUM,
  POPPINS_BOLD,
  WHITE,
  BLACK,
} from '../../constants';

import Icon from 'react-native-vector-icons/FontAwesome';

const OptionsHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerWrapper}>
        <TouchableOpacity>
          <Icon name="times" size={22} color={WHITE} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Poll</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Text style={styles.headerRight}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: CINDER,
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
  headerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    paddingTop: 15,
    paddingHorizontal: 20,
    backgroundColor: CINDER,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowColor: BLACK,
  },
});

export default OptionsHeader;
