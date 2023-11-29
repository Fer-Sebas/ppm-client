import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react';
import { useFonts } from 'expo-font'
import { calcDimensions } from './shared/pixelPerfect'
import BottomNavigationBar from './shared/components/BottomNavigationBar'

import { dummyUser as USER_DATA } from './dummyDevUserData';

import SignUpView from './views/SignUp'
import DashboardView from './views/dashboard/DashboardIndex'
import LocationsView from './views/locations/LocationIndex';
import SettingsView from './views/settings/SettingsIndex'

export default function App() {

  const [fontsLoaded] = useFonts({
    'NotoSans-Regular': require('./assets/fonts/NotoSans-Regular.ttf'),
    'NotoSans-Medium': require('./assets/fonts/NotoSans-SemiBold.ttf'),
    'NotoSans-Bold': require('./assets/fonts/NotoSans-Bold.ttf'),
  })

  const [ view, setView ] = useState('dashboard')

  function handleSetView (state) { setView(state) }

  if (!fontsLoaded) {
    return null;
  }

  return (

    <>
      <ScrollView style={styles.container}>
        {
          view == 'dashboard' ? <DashboardView userData={USER_DATA} handleSetView={handleSetView} /> :
          view == 'locations' ? <LocationsView handleSetView={handleSetView} /> :
          view == 'settings' ? <SettingsView handleSetView={handleSetView} /> :
          <SignUpView />
        } 
      </ScrollView>
      <BottomNavigationBar currentView={view} handleSetView={handleSetView} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: calcDimensions(32),
    paddingTop: calcDimensions(32),
    paddingBottom: calcDimensions(0)
  },
});