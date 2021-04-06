import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { WHITE, POPPINS_MEDIUM, BLUE_RIBBON } from '../../constants';

const Toggle = ({ title }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.toggleLeft}>
        <Icon name="user" size={20} color={WHITE} />
        <Text style={styles.text}>{title}</Text>
      </View>
      <Switch
        trackColor={{ true: BLUE_RIBBON }}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  toggleLeft: {
    flexDirection: 'row',
  },
  text: {
    color: WHITE,
    fontFamily: POPPINS_MEDIUM,
    fontSize: 14,
    marginLeft: 15,
  },
});

export default Toggle;
