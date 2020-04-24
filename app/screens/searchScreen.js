

import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import colors from './../components/colors';


getJson = (country) => {
    const URL = `https://api.covid19api.com/total/country/${country}`;
    return fetch(URL)
            .then((res) => res.json());
}

getCountry = () => {
      const URL = `https://api.covid19api.com/countries`;
      return fetch(URL)
              .then((list) => list.json());
  }



export default class searchScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
        country: '',
        date: '',
        totalCases: '',
        totalRecovered: '',
        totalDeaths: '',
        newCases: '',
        newDeaths: '',
        newRecovered: '',
        error: false
      }
      this.handleCountryChange = this.handleCountryChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCountryChange(evt) {
      this.setState({
        country: evt.nativeEvent.text
      });
    }

    handleDateChange(evt) {
      this.setState({
        date: evt.nativeEvent.text
      });
    }





    handleSubmit() {
      var myDate = this.state.date
      getCountry()
        .then((list)=> {
          var myCountries = []
          var myCountry = this.state.country
          for (let i = 0; i< list.length; i++){
            if (myCountry == list[i]['Country']){
                getJson(this.state.country)

            .then((res) => {    //need date here to be inputed date        
                var fullDate = myDate + "T00:00:00Z";
                for (let i = 0; i< res.length; i++){
                  if (fullDate == res[i]['Date']){
                    var index = i
                    this.setState({
                      totalCases: res[i]['Confirmed'],   
                      totalRecovered: res[i]['Recovered'],
                      totalDeaths: res[i]['Deaths'],
                      newCases: parseInt(res[i]['Confirmed']) - parseInt(res[i-1]['Confirmed']), 
                      newDeaths: parseInt(res[i]['Deaths']) - parseInt(res[i-1]['Deaths']),
                      newRecovered: parseInt(res[i]['Recovered']) - parseInt(res[i-1]['Recovered'])    
                    });
                    break;
                 }
                  
                  else{
                      this.setState({
                      totalCases: "Error: No Data for this Date", 
                      totalRecovered: "Error: No Data for this Date", 
                      totalDeaths: "Error: No Data for this Date", 
                      newCases: "Error: No Data for this Date", 
                      newDeaths: "Error: No Data for this Date", 
                      newRecovered: "Error: No Data for this Date",  
                    });
                 }
              
                }
              
          });
              break;
            }
            else{
              this.setState({
                totalCases: "Error: No Data for this Country", 
                totalRecovered: "Error: No Data for this Country",
                totalDeaths: "Error: No Data for this Country", 
                newCases: "Error: No Data for this Country", 
                newDeaths: "Error: No Data for this Country", 
                newRecovered: "Error: No Data for this Country",  
              });
              

            }

            
          }


        }
        )
    }
  render() {
    let showErr = (
      this.state.error ?
      <Text>
        {this.state.error}
      </Text> :
      <View></View>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.boldText}>   </Text>
        <Text style={styles.medText}>Please Enter a Country</Text>
        <TextInput
              style={styles.searchInput}
              onChange={this.handleCountryChange}
        />
        <Text style={styles.boldText}>   </Text>

        <Text style={styles.medText}>Please Enter a Date</Text>
        <Text style={styles.italText}>Year:Month:Day, Ex: 2020-03-27</Text>
        <TextInput
              style={styles.dateInput}
              onChange={this.handleDateChange}
        />
 <Text style={styles.smallText}>   </Text>
        <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.handleSubmit}
              >
              <Text
                  style={styles.titleText}>
                  Search
              </Text>
              
        </TouchableHighlight>
        <Text style={styles.smallText}>   </Text>
        <Text style={styles.boldText}>Total Cases: </Text><Text style={styles.smallText}>{this.state.totalCases}</Text>
        <Text style={styles.boldText}>Total Deaths:  </Text><Text style={styles.smallText}>{this.state.totalDeaths} </Text>
        <Text style={styles.boldText}>Total Recovered Cases:  </Text><Text style={styles.smallText}>{this.state.totalRecovered} </Text>
        <Text style={styles.boldText}>New Cases:  </Text><Text style={styles.smallText}>{this.state.newCases} </Text>
        <Text style={styles.boldText}>New Deaths:  </Text><Text style={styles.smallText}>{this.state.newDeaths}</Text>        
        <Text style={styles.boldText}>New Recovered Cases:  </Text><Text style={styles.smallText}>{this.state.newRecovered}</Text>
            {showErr}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  flexContainer: {
  flex: 1
},
container: {
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
searchInput: {
  height: 50,
  padding: 4,
  marginRight: 5,
  fontSize: 23,
  borderWidth: 1,
  borderColor: '#fad4a7',
  color: '#fad4a7',
  alignContent: 'center'
},
dateInput: {
  height: 40,
  padding: 4,
  marginRight: 5,
  fontSize: 25,
  borderWidth: 1,
  borderColor: '#fad4a7',
  color: '#fad4a7'
},
medText: {
  color: colors.buttonColor,
  textAlign: "left",
  fontWeight: "bold",
  fontSize: 25,
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
color: "#3D2A2A",
fontSize: 30,
//fontFamily: "Cabin-Bold"
},
boldText: {
  //color: Colors.buttonTextColor,
  fontWeight: "bold",
  textAlign: "left",
  color: "#3D2A2A",
  fontSize: 25,
  },

smallText: {
color: "#fad4a7",
textAlign: "left",
fontSize: 25,
//fontFamily: "Cabin-Regular"
},
});

