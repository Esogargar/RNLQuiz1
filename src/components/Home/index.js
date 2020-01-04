import React, { Component } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../../Styles/Home';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends Component {
  render() {
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.getStartedContainer}>
          <View style={Styles.titleContainer}>
            <Image
              style={Styles.logo}
              source={require('../../assets/images/test1.png')}
            />
            <Text style={Styles.title}>TEST YOURSELF NOW</Text>
          </View>
          <View style={Styles.holder}>
            <View style={Styles.holderDesc}>
              <Text style={Styles.descText}>
                Do you want to have some kind of an exams? is it so bad that you
                want to take them. Here we are going to test you out by
                involving you into a little tiny exam
              </Text>
            </View>
            <View style={Styles.holderButtons}>
              <View style={Styles.buttons}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Questions')}
                  style={Styles.oneButton}>
                  <View style={Styles.buttonTextWrapper}>
                    <Text style={Styles.buttonText}> Started</Text>
                  </View>
                  <View style={Styles.icon}>
                    <Icon color="white" name="md-arrow-forward" size={18} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
