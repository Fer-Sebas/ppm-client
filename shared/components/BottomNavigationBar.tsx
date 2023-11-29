import React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'
import { DESIGN_TOKENS as $ } from '../designTokens'
import { calcDimensions } from '../pixelPerfect'
import FloatingActionButton from './FloatingActionButton'
import { Feather } from '@expo/vector-icons'


function Tab (props) {  
  
  return (
    <Pressable style={styles.tab} onPress={props.onPress}>
      <Feather name={props.icon} size={calcDimensions(24)} color={props.name == props.view ? $['bottom-nav'].tab.icon.color.active : $['bottom-nav'].tab.icon.color.idle } />
    </Pressable>
  )
}

// <Text style={props.name == props.view ? styles.tabLabelActive : styles.tabLabel}>{props.label}</Text>

export default function BottomNavigationBar ({ handleSetView, currentView}) {

  return (
    <>
    <View style={styles.container}>

      <Tab
        icon='home'
        name='dashboard'
        label='Inicio'
        onPress={() => handleSetView('dashboard')}
        view={currentView}
      />

      <Tab
        icon='calendar'
        name='locations'
        label='Turnos'
        onPress={() => handleSetView('locations')}
        view={currentView}
      />


    </View>
  </>
  ) 

}

const styles = StyleSheet.create({

    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: calcDimensions(10),
      backgroundColor: $['bottom-nav'].background,
      paddingVertical: calcDimensions($['bottom-nav'].padding.vertical),
      borderTopWidth: calcDimensions($['bottom-nav'].border.width),
      borderTopColor: $.border.color,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      rowGap: calcDimensions(4),
      alignContent: 'center',
      fontFamily: $['bottom-nav'].tab.label.font.idle,
    },

      tabLabel: {
        color: $['bottom-nav'].tab.label.color.idle,
      },
      tabLabelActive: {        
        color: $['bottom-nav'].tab.label.color.active,
        fontFamily: $['bottom-nav'].tab.label.font.active
      },

})
