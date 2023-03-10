import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Logo from './components/Logo';
import Location from './pages/Location';

const Stack = createNativeStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#000202',
                },
                headerLeft: () => (<Logo />),
                // headerTransparent: true
            }}
            >
                <Stack.Screen
                    name='Signin'
                    component={Signin}
                    options={{ 
                        headerTitle: '',
                        // headerRight: () => (<Logo />),
                    }}
                />
                <Stack.Screen
                    name='Signup'
                    component={Signup}
                    options={{
                        headerTitle: ''
                    }}
                />
                <Stack.Screen
                    name='Location'
                    component={Location}
                    options={{
                        headerTitle: ''
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route;
