import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, } from 'react-navigation';
import HomePage from './App';
import CancelledList from './cancelledList';
import EmployeeCardView from './employeeCardView';
import RatingForm from './ratingForm'



import { Text, View, TouchableOpacity, Image } from 'react-native';

const stackNav = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,

    }),
  },


  CancelledList: {
    screen: CancelledList,
    navigationOptions: ({ navigation }) => ({
      title: 'Cancelled request',
      headerShown: () => (true),
      headerRight: () =>
        (
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity activeOpacity={0.7}
              onPress={() => { { navigation.navigate('RatingForm') } }}>
              <Text style={{ paddingRight: 10, fontSize: 20 }}>Goto</Text>
                        </TouchableOpacity >

          </View >
        ),

    }),
  },
  EmployeeCardView: {
    screen: EmployeeCardView,

    navigationOptions: ({ navigation }) => ({
      title: 'Registration',
      headerShown: true,

    }),
  },

  RatingForm: {
    screen: RatingForm,

    navigationOptions: ({ navigation }) => ({
      title: 'Rating Form',
      headerShown: true,

    }),
  }

})

const Navigator = createAppContainer(stackNav);

export default Navigator;