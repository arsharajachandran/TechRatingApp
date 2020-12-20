import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  View,
  Text,

  Button,
  Image, Alert,

} from 'react-native';
import { Input, Icon, Rating } from 'react-native-elements';

// import Icon from 'react-native-vector-icons/FontAwesome';
export default class RatingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''

    }
  }

  setAnimation(animating) {
    this.setState({ animating })
  }
  componentDidMount() {
 

  }

  render() {
    return (

      <View style={{ flex: 1, padding: 5, backgroundColor: 'grey' }}>
        <SafeAreaView  >

          <View style={styles.containerStyle}>

            <Text style={{ fontSize: 20, alignItems: "flex-start" }}>Rate your Experience</Text>

            <View >
              <View style={{ flexDirection: "row", padding: 5, paddingTop: 10 }}>
                <Text style={{ alignItems: "flex-start", paddingTop: 10 }}>Rate your Experience :  </Text>
                <Rating
                  // showRating
                  onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 2 }}
                />
              </View>
              <View style={{ flexDirection: "row", padding: 5, paddingTop: 10 }}>
                <Text style={{ alignItems: "flex-start", paddingTop: 10 }}>On Time Service :  </Text>
                <Rating
                  // showRating
                  onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 2 }}
                />
              </View>
              <View style={{ flexDirection: "row", padding: 5, paddingTop: 10 }}>
                <Text style={{ alignItems: "flex-start", paddingTop: 10 }}>Engineer Support :  </Text>
                <Rating
                  // showRating
                  onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 2 }}
                />
              </View>

            </View>


            <View style={{ borderRadius: 1, borderWidth: 1, marginTop: 10, marginBottom: 20 }}  >
              <TextInput
                // icon="mail"
                placeholder="type comment here"
                autoCapitalize="none"

                keyboardAppearance="dark"

                multiline={true}
                style={{ paddingBottom: 10, padding: 20 }}
                onChangeText={(comment) => this.setState({ comment })}
              />
            </View>

            <View style={{ borderRadius: 1, borderWidth: 1, }}>
              <Button title="Submit" />


            </View>
          </View>


        </SafeAreaView>
      </View>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginBottom: 20,

  },
  scrollView: {

  },


  input: {
    flex: 1,
    padding: 10,
    margin: 10,
    // width: 200,
    height: 50,
    padding: 10,
    borderWidth: 1,
 
    marginBottom: 10,
  },
  containerStyle: {
    //  flex: 1,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#ddd',
    marginTop: 20,
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'white'
  },
});