import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS, ROUTES} from '../constants';
import {Wallet, Notifications} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <BottomTabNavigator />
  );
}

export default DrawerNavigator;
