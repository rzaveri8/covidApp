
import * as React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import colors from './../components/colors';

export default class SummaryScreen extends React.Component {
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
      .then(json => { //has the json response
        this.setState({
          totalCases: json['Global']['TotalConfirmed'],  
        });
        this.setState({
          totalRecovered: json[['Global']]['TotalDeaths'],  
        });        
        this.setState({
          totalDeaths: json['Global']['TotalRecovered'],  //us
        });

      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (  //styling happens here!
      <View style={styles.container}>
        <Text style={styles.smallText}>   </Text>
        <Text style={styles.smallText}>   </Text>
        <Text style={styles.titleText}>World Summary of COVID19 Cases </Text>
        <Text style={styles.smallText}>   </Text>
        <Text style={styles.boldText}>Total Cases: </Text><Text style={styles.smallText}>{this.state.totalCases} </Text>
        <Text style={styles.boldText}>Total Deaths:</Text><Text style={styles.smallText}> {this.state.totalDeaths} </Text>
        <Text style={styles.boldText}>Total Recovered Cases: </Text><Text style={styles.smallText}>{this.state.totalRecovered} </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  flexContainer: {
  flex: 1
},
container: {
  alignContent: "center",
  alignItems: "center",
  flex: 1,
  padding: 20,
  marginTop: 5,
  marginBottom:5,
  flexDirection: 'column',
  backgroundColor: colors.backgroundColor
},
button: {
  marginTop:10,
  height: 50, 
  width: 250, 
  paddingTop: 10, 
  alignItems: 'center',
 borderRadius: 10,
 paddingLeft: 10,
 paddingRight: 10,
 alignSelf: 'center',
 backgroundColor: colors.buttonColor

},
medText: {
  color: colors.buttonColor,
  textAlign: "left",
  fontWeight: "bold",
  fontSize: 45,
  //fontFamily: "Cabin-Regular"
  },
  italText: {
    color: colors.buttonColor,
    textAlign: "left",
    fontStyle: "italic",
    fontSize: 15,
    //fontFamily: "Cabin-Regular"
    },
titleText: {
//color: Colors.buttonTextColor,
fontWeight: "bold",
textAlign: "center",
color: "#fad4a7",
borderColor: colors.buttonColor,
borderWidth: 2,
fontSize: 45,
//fontFamily: "Cabin-Bold"
},
boldText: {
  //color: Colors.buttonTextColor,
  fontWeight: "bold",
  textAlign: "center",
  color: "#3D2A2A",
  fontSize: 40,
  },

smallText: {
color: "#fad4a7",
textAlign: "left",
fontSize: 35,
fontWeight: "bold",

},
});
