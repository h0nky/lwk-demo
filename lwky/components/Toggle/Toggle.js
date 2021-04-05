import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

import { WHITE, POPPINS_MEDIUM, BLUE_RIBBON } from '../../constants';

const Toggle = ({ title }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Switch
        trackColor={{ true: BLUE_RIBBON, false: BLUE_RIBBON }}
        thumbColor={{ true: BLUE_RIBBON, false: BLUE_RIBBON }}
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
    margin: 16,
  },
  text: {
    color: WHITE,
    fontFamily: POPPINS_MEDIUM,
    fontSize: 14,
  },
});

export default Toggle;
