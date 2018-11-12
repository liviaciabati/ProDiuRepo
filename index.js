import React from "react";
import { Navigation } from 'react-native-navigation';
import { StyleSheet,View,FlatList,TouchableOpacity,Text,TextInput } from "react-native";
import {registerScreens} from './src/Screens';
import { HomeTab, Test } from './_Navigation'

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
		HomeTab();
});
