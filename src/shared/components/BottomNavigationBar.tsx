import React, { ReactElement } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import { DESIGN_TOKENS as $ } from '../designTokens';
import { calcDimensions } from '../pixelPerfect';
import FloatingActionButton from './FloatingActionButton';
import { Feather } from '@expo/vector-icons';

interface TabProps {
  icon: string;
  name: string;
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  view: string;
}

function Tab(props: TabProps): ReactElement {
  return (
    <Pressable style={styles.tab} onPress={props.onPress}>
      <Feather
        name={props.icon as any}
        size={calcDimensions(24)}
        color={
          props.name === props.view
            ? $['bottom-nav'].tab.icon.color.active
            : $['bottom-nav'].tab.icon.color.idle
        }
      />
    </Pressable>
  );
}

interface BottomNavigationBarProps {
  handleSetView: (view: string) => void;
  currentView: string;
}

export default function BottomNavigationBar({
  handleSetView,
  currentView,
}: BottomNavigationBarProps): ReactElement {
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
  );
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
    fontFamily: $['bottom-nav'].tab.label.font.active,
  },
});
