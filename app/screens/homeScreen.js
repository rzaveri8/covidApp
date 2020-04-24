import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text,View} from "react-native"
import colors from './../components/colors';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import searchScreen from '../screens/searchScreen'
import dataScreen from '../screens/dataScreen'
import mapScreen from '../screens/mapScreen'
import summaryScreen from '../screens/summaryScreen'
//import testScreen from '../screens/testScreen'
//import { ScrollView } from 'react-native-gesture-handler';
//import Genericbutton from './app/components/button';

//type Props = NavigationInjectedProps & {};
class HomeScreen extends React.Component{
    render() {
        return (
                <View style={styles.container}>
                    <Text style={styles.titleText}>Covid19 Application</Text>
                    <Text style={styles.medText}>by Ruby Zaveri</Text>
                    <View>
                    <TouchableOpacity //edit this button for navigation
                     style={styles.button} onPress={() => this.props.navigation.navigate('SummaryScreen')} ><Text style = {styles.smallText}>World Summary</Text>
                    </TouchableOpacity>

                    <TouchableOpacity //edit this button for navigation
                     style={styles.button} onPress={() => this.props.navigation.navigate('MapScreen')}><Text style = {styles.smallText}>Map of Cases</Text>
                    </TouchableOpacity>

                    <TouchableOpacity //edit this button for navigation
                     style={styles.button} onPress={() => this.props.navigation.navigate('SearchScreen')} ><Text style = {styles.smallText}>Cases by Date</Text>
                    </TouchableOpacity>

                    </View>
                </View>
              
                );
          }
        }


const styles = StyleSheet.create({
  flexContainer: {
  flex: 1
},
container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 0,
    backgroundColor: colors.backgroundColor
},
button: {
  marginTop:10,
  height: 50, //50
  width: 250, //200
  paddingTop: 10, //10
  alignItems: 'center',
 borderRadius: 10,
 paddingLeft: 10,
 paddingRight: 10,
 backgroundColor: colors.buttonColor

},
titleText: {
//color: Colors.buttonTextColor,
fontWeight: "bold",
textAlign: "center",
color: "#3D2A2A",
fontSize: 45,
//fontFamily: "Cabin-Bold"
},
smallText: {
color: colors.titletextColor,
textAlign: "left",
fontSize: 25,
//fontFamily: "Cabin-Regular"
},
medText: {
  color: colors.buttonColor,
  textAlign: "left",
  fontSize: 25,
  //fontFamily: "Cabin-Regular"
  }
});

export default HomeScreen;