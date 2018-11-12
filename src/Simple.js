import React from "react";
import { StyleSheet,View,FlatList,TouchableOpacity,Text,TextInput } from "react-native";
import { Navigation } from 'react-native-navigation';
import { closeSidebar } from '../_Navigation';

class Simple extends React.Component {
	static get options () {
        return {topBar: {title: {text: 'Screen1'}}};
	}
	constructor(props) {
        super(props)
		Navigation.events().bindComponent(this);
	}

	navigationButtonPressed({ sidebarButton }) {
		closeSidebar();
	}

    render() {
        return (<Text>Hello, I''m Simple.</Text>);
    }
}

  
export default Simple;
