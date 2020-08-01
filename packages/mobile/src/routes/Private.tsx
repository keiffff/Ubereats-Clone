import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from 'providers/Auth';
import { ApolloProvider } from 'providers/Apollo';
import { CurrentUserProvider } from 'providers/CurrentUser';
import { Home } from 'screens/Home';

const Stack = createStackNavigator();

export const Private = () => {
  const { token } = useAuth();

  return (
    <ApolloProvider accessToken={token}>
      <CurrentUserProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </CurrentUserProvider>
    </ApolloProvider>
  );
};
