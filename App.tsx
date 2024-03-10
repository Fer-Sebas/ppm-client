import React, { FC, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { calcDimensions } from './src/shared/pixelPerfect';
import BottomNavigationBar from './src/shared/components/BottomNavigationBar';

import { dummyUser as USER_DATA } from './dummyDevUserData';

import DashboardView from './src/views/dashboard/DashboardIndex';
import LocationsView from './src/views/locations/LocationIndex';
import SettingsView from './src/views/settings/SettingsIndex';
import SignUpView from './src/views/SignUp';

interface AppProps {}

const App: FC<AppProps> = () => {
  const [fontsLoaded] = useFonts({
    'NotoSans-Regular': require('./assets/fonts/NotoSans-Regular.ttf'),
    'NotoSans-Medium': require('./assets/fonts/NotoSans-SemiBold.ttf'),
    'NotoSans-Bold': require('./assets/fonts/NotoSans-Bold.ttf'),
  });

  const [view, setView] = useState<string>('dashboard');

  function handleSetView(state: string) {
    setView(state);
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ScrollView style={styles.container}>
        {view === 'dashboard' ? (
          <DashboardView userData={USER_DATA} handleSetView={handleSetView} />
        ) : view === 'locations' ? (
          <LocationsView handleSetView={handleSetView} />
        ) : view === 'settings' ? (
          <SettingsView handleSetView={handleSetView} />
        ) : (
          <SignUpView />
        )}
      </ScrollView>
      <BottomNavigationBar currentView={view} handleSetView={handleSetView} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: calcDimensions(32),
    paddingTop: calcDimensions(32),
    paddingBottom: calcDimensions(0),
  },
});

export default App;
