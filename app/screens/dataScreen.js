// import * as React from 'react';
// import { NavigationInjectedProps, withNavigation } from 'react-navigation';
// import {
//     Platform,
//     StyleSheet,
//     Text,
//     View
//   } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import colors from '../components/colors'
// import {getWorldSummary, getCountrySummary, parseWorld, parseCountry} from '../../api/api'

// //type Props = NavigationInjectedProps & {};
// //getWorldSummary()
// export default
// class DataScreen extends React.Component{
//     render() {
//       console.log(getWorldSummary())
//         return(
          
//         // create a bunch of emply cards in scroll view with empty data

//         //ex: Date:
//         //    Country:
//         //    Number of Cases:
//             <View style={styles.container}>
//              <Text>Hello</Text>
//             </View>
//         );   

//     }
// }

// const styles = StyleSheet.create({
//   flexContainer: {
//   flex: 1
// },
// container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignContent: "center",
//     alignItems: "center",
//     marginHorizontal: 0,
//     backgroundColor: colors.backgroundColor
// },
// button: {
//   marginTop:10,
//   height: 50, //50
//   width: 250, //200
//   paddingTop: 10, //10
//   alignItems: 'center',
//  borderRadius: 10,
//  paddingLeft: 10,
//  paddingRight: 10,
//  backgroundColor: colors.buttonColor

// },
// titleText: {
// //color: Colors.buttonTextColor,
// fontWeight: "bold",
// textAlign: "center",
// color: "#3D2A2A",
// fontSize: 45,
// //fontFamily: "Cabin-Bold"
// },
// smallText: {
// color: colors.textColor,
// textAlign: "left",
// fontSize: 25,
// //fontFamily: "Cabin-Regular"
// },
// });


import * as React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import colors from './../components/colors';

export default class DataScreen extends React.Component {
  state = {
    totalCases: '',
    totalRecovered: '',
    totalDeaths: '',
    newCases: '',
    newDeaths: '',
    newRecovered: '',
  };
  componentDidMount() {
    fetch('https://api.covid19api.com/summary', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => { //holds the json response!!!
        this.setState({
          totalCases: json['Countries'][235]['TotalConfirmed'],  //us
        });
        this.setState({
          totalRecovered: json['Countries'][235]['TotalRecovered'],  //us
        });        
        this.setState({
          totalDeaths: json['Countries'][235]['TotalDeaths'],  //us
        });
        this.setState({
          newCases: json['Countries'][235]['NewConfirmed'],  //us
        });
        this.setState({
          newDeaths: json['Countries'][235]['NewDeaths'],  //us
        });
        this.setState({
          newRecovered: json['Countries'][235]['NewRecovered'],  //us
        });

      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (  //styling happens here!
      <View style={styles.container}>
        <Text style={styles.titleText}>United States COVID-19 Cases </Text>
        <Text style={styles.smallText}>Total Cases: {this.state.totalCases} </Text>
        <Text style={styles.smallText}>Total Deaths: {this.state.totalDeaths} </Text>
        <Text style={styles.smallText}>Total Recovered Cases: {this.state.totalRecovered} </Text>
        <Text style={styles.smallText}>New Cases: {this.state.newCases} </Text>
        <Text style={styles.smallText}>New Deaths: {this.state.newDeaths}</Text>        
        <Text style={styles.smallText}>New Recovered Cases: {this.state.newRecovered}</Text>

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
color: colors.textColor,
textAlign: "left",
fontSize: 25,
//fontFamily: "Cabin-Regular"
},
});

//export default Data;