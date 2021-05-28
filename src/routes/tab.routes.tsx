import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '../pages/Dashboard';
import MyPlants from '../pages/MyPlants';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: '#32B768',
        inactiveTintColor: '#52665A',
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: 20,
          height: 88,
        },
      }}>
      <AppTab.Screen
        name="Nova Planta"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <AppTab.Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default AuthRoutes;
