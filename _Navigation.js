import { Navigation } from 'react-native-navigation'
import { Platform } from 'react-native';
//import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const HomeTab = () =>
	Promise.all([
		FontAwesome5.getImageSource('bars', 20),
		FontAwesome5.getImageSource('edit', 20),
		FontAwesome5.getImageSource('star', 20),
		FontAwesome5.getImageSource('search', 20)
	]).then(sources => {
		Navigation.setRoot({
			root: {
				sideMenu: {
					id: 'sidemenu',
					center: {
						stack: {
							id: "centerStack",
							options: {
								topBar: {
									visible: false,
								},
							},
							children: [{
								bottomTabs: {
									children: [
										{
											stack: {
												children: [{
													component: {
														id: "Simple",
														name: 'Simple',
														passProps: {
															text: 'Pushed screen'
														},
														options: {
															topBar: {
																title: { text: 'Dúvidas' },
																icon: sources[0],
																leftButtons: [
																	{
																		id: 'sidebarButton',
																		icon: sources[0],
																	}
																]
															},
															bottomTab: {
																text: 'Dúvidas',
																icon: sources[1]
															}
														}
													},
												}],
											}
										}, {
											stack: {
												children: [{
													component: {
														name: 'Home',
														options: {
															topBar: {
																title: { text: 'Favoritos' },
																leftButtons: [
																	{
																		id: 'sidebarButton',
																		icon: sources[0],
																	}
																]
															},
															bottomTab: {
																text: 'Favoritos',
																icon: sources[2]
															}
														}
													}
												}],
											}
										}, {
											stack: {
												children: [{
													component: {
														name: 'Simple',
														options: {
															topBar: {
																title: { text: 'Buscar' },
																leftButtons: [
																	{
																		id: 'sidebarButton',
																		icon: sources[0],
																	}
																]
															},
															bottomTab: {
																text: 'Buscar',
																icon: sources[3]
															}
														}
													}
												}],
											}
										}
									],
								},
							},],
						},
					},
					left: {
						component: {
							name: 'Sidebar'
						}
					}
				}
			}
		});
	});


export const Test = () =>
	Promise.all([
		FontAwesome5.getImageSource('bars', 20),
		FontAwesome5.getImageSource('edit', 20),
		FontAwesome5.getImageSource('star', 20),
		FontAwesome5.getImageSource('search', 20)
	]).then(sources => {
	Navigation.setRoot({
		root: {
			sideMenu: {
				left: {
					component: {
						name: 'Home',
					},
				},
				center: {
					bottomTabs: {
						id: 'BottomTabsId',
						children: [
							{
								stack: {
									id: 'Tabs',
									children: [
										{
											component: {
												name: 'Simple',
												options: {
													bottomTab: {
														badge: '2',
														fontSize: 12,
														text: 'Create Job',
													}
												}
											},
										}, {
											component: {
												name: 'Simple',
												options: {
													bottomTab: {
														badge: '3',
														fontSize: 12,
														text: 'Create Job',
													}
												}
											},
										},
									],
								}
							}
						],
					},
				}
			}
		}
	})
});

export const closeSidebar = () =>
	Navigation.mergeOptions('sidemenu', {
		sideMenu: {
			left: {
				visible: true
			}
		}			
});