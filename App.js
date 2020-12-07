import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: '#fff' },
          headerTitleAlign: 'center',
          headerStyle: {
            elevation: 0,
          },
        }}
      >
        <Stack.Screen
          name='Search'
          component={SearchScreen}
          options={{ title: 'Business Search' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
