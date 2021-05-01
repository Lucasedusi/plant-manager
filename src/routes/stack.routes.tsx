import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator></stackRoutes.Navigator>
);

export default AppRoutes;
