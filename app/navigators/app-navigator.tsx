import React, { useRef } from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import { WelcomeScreen } from '../Features/welcome/welcome-screen'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './navigation-utilities'

const Stack = createStackNavigator()

const AppNavigator = () => {
  const routeNameRef = useRef<string>()

  const onReady = () => (routeNameRef.current = navigationRef.current.getCurrentRoute().name)

  const onStateChange = async () => {
    const currentRouteName = navigationRef.current.getCurrentRoute().name

    routeNameRef.current = currentRouteName
  }

  return (
    <NavigationContainer ref={navigationRef} onReady={onReady} onStateChange={onStateChange}>
      <Stack.Navigator
        initialRouteName={'WelcomeScreen'}
        screenOptions={{
          headerTitleAlign: 'center',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
