import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import OptionsHeader from './components/OptionsHeader';
import OptionsScreen from './screens/OptionsScreen';

import ChatHeader from './components/ChatHeader';
import ChatScreen from './screens/ChatScreen';

import TabBar from './components/TabBar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ChatTabScreen = () => (
  <Tab.Navigator tabBar={() => <TabBar />}>
    <Tab.Screen name="ChatScreen" component={ChatScreen} />
  </Tab.Navigator>
);

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Options"
          component={OptionsScreen}
          options={{
            header: props => <OptionsHeader {...props} />,
          }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatTabScreen}
          options={{
            header: props => <ChatHeader {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
