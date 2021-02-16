import React from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

import db from '../config';
import firebase from 'firebase';
import {AppTabNavigator} from './AppTabNavigator';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBar from './CustomSideBarMenu';
import Settings from '../screens/Settings';

export const DrawerNavigator = createDrawerNavigator({
    home:{screen:AppTabNavigator},
    Setting:{screen:Settings},
},
{contentComponent:CustomSideBar},
{initialRouteName:'Home'})