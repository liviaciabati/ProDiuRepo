import { Platform } from 'react-native';
import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';
import { registerScreens, registerScreenVisibilityListener } from './screens';

import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import App from './posts/screens/AddPost'
// screen related book keeping
//registerScreens();
//registerScreenVisibilityListener();
Navigation.registerComponent('ProDIU', () => App);

export default class Initialising extends React.Component {
  async componentDidMount() {

    
Navigation.mergeOptions("stack1", {
  topBar: {
    rightButtons: [
      {
        id: 'myDynamicButton',
        text: 'My Button',
        title: {
          component: {
            name: 'wallet.searchText',
            alignment: 'center',
          },
        },
      }
    ]
  }
});
//goToAuth()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
      </View>
    )
  }
}

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'ProDIU',
            passProps: {
              side: 'left'
            }
          }
        },
        center: {
          stack: {
            id: "stack1",
            children: [
              {
                bottomTabs: {
                  children: [{
                    stack: {
                      children: [{
                        component: {
                          name: 'ProDIU',
                          passProps: {
                            text: 'This is tab 1'
                          }
                        }
                      }],
                      options: {
                        bottomTab: {
                          text: 'Tab 1',
                          icon: require('../img/one.png'),
                          testID: 'FIRST_TAB_BAR_BUTTON'
                        }
                      }
                    }
                  },
                  {
                    component: {
                      name: 'ProDIU',
                      passProps: {
                        text: 'This is tab 2'
                      },
                      options: {
                        bottomTab: {
                          text: 'Tab 2',
                          icon: require('../img/one.png'),
                          testID: 'SECOND_TAB_BAR_BUTTON'
                        }
                      }
                    }
                  },
                  {
                    component: {
                      name: 'ProDIU',
                      passProps: {
                        text: 'This is tab 2'
                      },
                      options: {
                        bottomTab: {
                          text: 'Tab 3',
                          icon: require('../img/one.png'),
                          testID: 'SECOND_TAB_BAR_BUTTON'
                        }
                      }
                    }
                  }]
                }
              }
            ],
            options: {
              topBar: {
                visible:true,
                text: 'Collapse',
                textColor: 'black',
                textFontSize: 16,
                backgroundColor: 'red',
                hidden: false,
                drawUnder: false,
                leftButtons: [
                  {
                    id: 'buttonOne',
                    icon: require('../img/one.png'),
                  }
                ],
                rightButtons: [],
              }
            }
          }
        }
      }
    }
  });
});


const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

// this will start our app
//Navigation.startTabBasedApp({
//  tabs,
  //animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
  //tabsStyle: {
  //  tabBarBackgroundColor: '#003a66',
  //  tabBarButtonColor: '#ffffff',
  //  tabBarSelectedButtonColor: '#ff505c',
  //  tabFontFamily: 'BioRhyme-Bold',
  //},
  //appStyle: {
  //  tabBarBackgroundColor: '#003a66',
  //  navBarButtonColor: '#ffffff',
  //  tabBarButtonColor: '#ffffff',
  //  navBarTextColor: '#ffffff',
  //  tabBarSelectedButtonColor: '#ff505c',
  //  navigationBarColor: '#003a66',
  //  navBarBackgroundColor: '#003a66',
  //  statusBarColor: '#002b4c',
  //  tabFontFamily: 'BioRhyme-Bold',
  //},
//   drawer: {
//     left: {
//       screen: 'example.Types.Drawer'
//     }
//   }
// });
