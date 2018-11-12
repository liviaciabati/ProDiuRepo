import React from "react";
import { StyleSheet,View,FlatList,TouchableOpacity,Text,TextInput } from "react-native";
import { Navigation } from 'react-native-navigation';
import { closeSidebar } from '../_Navigation';
import {Avatar, List, ListItem } from 'react-native-elements'

const list = [
	{
	  title: 'Profile',
	  icon: 'person'
	},
	{
	  title: 'Sync Data',
	  icon: 'sync'
	},
	{
	  title: 'Settings',
	  icon: 'settings'
	}
  ]

class Sidebar extends React.Component {
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
		return (
			<View style={styles.container} >
				<View style={styles.containerAvatar} >
				<Avatar
					large
					rounded
					//source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
					onPress={() => console.log("Works!")}
					activeOpacity={0.7}
					title="LC"				
					/>
					<Text >Nome do médico</Text>				
				</View>
				<List>
				{
					list.map((item) => (
					<ListItem
						key={item.title}
						title={item.title}
						leftIcon={{name: item.icon}}
						style={styles.containerList}
					/>
					))
				}
				</List>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF'
	},	
	containerAvatar: {
		flex: 3,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
		alignItems:'center'
	},	
	containerList: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
		alignItems:'center'
	}
});

export default Sidebar;
