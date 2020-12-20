import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Pressable,

} from 'react-native';
import CardView from 'react-native-cardview'

import EmployeeCardView from './employeeCardView'
import { StackActions, NavigationActions } from 'react-navigation';
import { ListItem, Avatar, Image, Card, Button } from 'react-native-elements';
export default class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      dataList: [],
      data: ''
    }
  }
  setAnimation(animating) {
    this.setState({ animating })
  }
  componentDidMount() {
    this.getCancelledList();

  }
  componentDidUpdate() {
  
  }
  getCancelledList() {
    console.log("inside this page")
    // this.setAnimation(true);
    fetch('http://freshnfetch.tk/api/v1/survey/get-request').then((response) => response.json())
      .then((response) => {
        console.log(response)
        // let dataList = this.getListObject(response);
        //        this.setState({ dataList })
        this.setState({ data: response })  // do set state 
        //  console.log(dataList.length)
        // return data.names;
      }).catch((error) => {
        console.error(error);
      });

   

  }
  getListObject(result) {
    let list = []
    for (let index = 0; index < result.length; index++) {
      const element = result[index];
      console.log(element);
      // let obj = {
      //   name: element.name,
      //   class: element.class,
      //     school: element.school,
      //     nationality: element.nationality,
      //     mobile: element.mobile,
      //     guardian: element.guardian,
      //     email: element.email,
      //     country: element.country,
      //     address: element.address,
      //     achievements: element.achievements

      // }
      // list.push(obj);
    }
    return list;
  }
  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };




  convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
  }
  render() {
    console.log(this.state.data)
  

    var date = this.convertUTCDateToLocalDate(new Date(this.state.data.time));
    console.log(date.toLocaleString())
    return (
     

      <SafeAreaView>
        <View style={styles.containerStyle}>

          <Text style={{ paddingBottom: 5 }}>Request Id : {this.state.data.request_id}</Text>
          <Text style={{ paddingBottom: 5 }}>Location : {this.state.data.location}</Text>
          <Text style={{ paddingBottom: 5 }}>Date/Time : {date.toLocaleString()}</Text>
        </View>

        <View style={styles.containerStyle}>
            <Text style={{ paddingBottom: 5 }}>Cancelled by  : Bandar (Admin)</Text>
          <Text style={{ paddingBottom: 5 }}>Cancellation reason : Out of service Area</Text>
        </View>
       

        <View style={styles.containerStyle}>
            <Text style={{ paddingBottom: 5 }}>Engineer NAme : Muhammad Basheer</Text>
          <Text style={{ paddingBottom: 5 }}>Mobile : +925654313464</Text>
         
        </View>

      </SafeAreaView>

    );

  }
}


const styles = StyleSheet.create({
  scrollView: {

  },



  containerStyle: {
    // flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
   
    marginRight: 5,
    marginTop: 20,
    marginLeft: 10,
  
    padding: 10,
    alignItems: 'center',

  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  listItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "black"
  },
});