import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './tab.routes';

import Welcome from '../pages/Welcome';
import Identification from '../pages/Identification';
import Confirmation from '../pages/Confirmation';
import PlantSave from '../pages/PlantSave';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: '#fff',
      },
    }}>
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen name="Identification" component={Identification} />
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />
    <stackRoutes.Screen name="Dashboard" component={AuthRoutes} />
    <stackRoutes.Screen name="PlantSave" component={PlantSave} />
    <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
