import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import Identification from '../pages/Identification';
import Confirmation from '../pages/Confirmation';
import Dashboard from '../pages/Dashboard';
import PlantSave from '../pages/PlantSave';
import MyPlants from '../pages/MyPlants';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    // initialRouteName="MyPlants"
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: '#fff',
      },
    }}>
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen name="Identification" component={Identification} />
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />
    <stackRoutes.Screen name="Dashboard" component={Dashboard} />
    <stackRoutes.Screen name="PlantSave" component={PlantSave} />
    <stackRoutes.Screen name="MyPlants" component={MyPlants} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
