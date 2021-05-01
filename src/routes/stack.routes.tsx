import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import Identification from '../pages/Identification';
import Confirmation from '../pages/Confirmation';

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
  </stackRoutes.Navigator>
);

export default AppRoutes;
