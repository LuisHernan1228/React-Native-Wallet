/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { AppState } from 'react-native';

import Route from './src/Route';
import { AppDataProvider } from './src/store/context/AppContext';
import { AuthProvider } from './src/store/context/AuthContext';

function App() {
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange)
  }, [])

  const handleAppStateChange = (nextAppState) => {
    if(nextAppState === 'background') {
      console.log('the app is closed');
    }
  }

  return (
    <AuthProvider>
      <AppDataProvider>
        <Route />
      </AppDataProvider>
    </AuthProvider>
  );
}

export default App;
