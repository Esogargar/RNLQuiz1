import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import Styles from '../../Styles/Profile';

const profileImage = require('../../assets/images/profile.jpg');

class Profile extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    }
  }

  render() {
    return (
      <View style={Styles.Container} >
        <ImageBackground source={profileImage} style={Styles.imgCover} />

        <View style={Styles.Wrapper} >
          <View style={Styles.Pad}>
            <Text style={Styles.Title}  >Iman Mohammed</Text>
            <View style={Styles.textIconWrapper}>
              <Text style={[Styles.Text, { margin: 10, backgroundColor: '#f7be16', color: '#fff' }]}>Supper Player</Text>
              <Icon name="md-star" size={30} style={{ color: '#f7be16' }} />
            </View>
          </View>
          <View style={Styles.Results}>
            <View style={Styles.Result} >
              <Text style={[Styles.Text, { color: '#000', fontWeight: 'bold' }]} >98</Text>
              <Text style={Styles.Text} >Quizes</Text>
            </View>
            <View style={Styles.Result} >
              <Text style={[Styles.Text, { color: '#000', fontWeight: 'bold' }]} >122k</Text>
              <Text style={Styles.Text} >Questions</Text>
            </View>
            <View style={Styles.Result} >
              <Text style={[Styles.Text, { color: '#000', fontWeight: 'bold' }]} >109</Text>
              <Text style={Styles.Text} >Wins</Text>
            </View>
          </View>

        </View>

        <View style={Styles.Test} >
          {/* <ImageBackground source={profileImage2} style={Styles.Container} /> */}

        </View>
      </View>

    );
  }
}

export default Profile;
