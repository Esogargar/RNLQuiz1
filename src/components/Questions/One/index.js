import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../../Styles/Questions';

class One extends Component {
  render() {
    return (
      <View style={Styles.quizContainer}>
        <View style={Styles.quizCard}>
          <View style={Styles.quizTitle}>
            <Text style={Styles.title}>Question Number One</Text>
          </View>
          <View style={Styles.quiz}>
            <Text>here is the body of the question!</Text>
          </View>
          <View style={Styles.navigates}>
            <TouchableOpacity
              onPress={() => this.props.navigation.pop()}
              style={Styles.navigateButtons}>
              <Icon name="md-arrow-back" color={'white'} size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.push('Two')}
              style={{...Styles.buttonGo, ...Styles.navigateButtons}}>
              <Icon name="md-arrow-forward" color="white" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default One;
