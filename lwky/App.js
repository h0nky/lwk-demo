import 'react-native-gesture-handler';
import React from 'react';

import OptionsScreen from './components/OptionsScreen';
import ChatScreen from './components/ChatScreen';
import Header from './components/Header';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { STEEL_GRAY, WHITE } from './constants';

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="OptionScreen">
        <Screen
          name="Options"
          component={OptionsScreen}
          options={{
            header: props => <Header {...props} />,
          }}
        />
        <Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: 'Lowkey Squad',
            headerStyle: {
              backgroundColor: STEEL_GRAY,
            },
            headerTintColor: WHITE,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
