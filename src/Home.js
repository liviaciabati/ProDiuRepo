import React from "react";
import { StyleSheet,View,FlatList,TouchableOpacity,Text,TextInput } from "react-native";
import { Navigation } from 'react-native-navigation';
import { closeSidebar } from '../_Navigation';

class Home extends React.Component {
	constructor(props) {
        super(props)
		Navigation.events().bindComponent(this);
	}

	navigationButtonPressed({ sidebarButton }) {
		closeSidebar();
	}

    render() {
        return (<Text>Hello, I'm Simple. 123</Text>);
    }
}

  
export default Home;
