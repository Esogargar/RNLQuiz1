import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../../Styles/Questions';
import HomeStyles from '../../../Styles/Home';

class Three extends Component {
  render() {
    return (
      <View style={Styles.quizContainer}>
        <View style={Styles.quizCard}>
          <View style={Styles.quizTitle}>
            <Text style={Styles.title}>Question Number Three</Text>
          </View>
          <View style={Styles.quiz}>
            <Text>here is the body of the question!</Text>
          </View>
          <View style={HomeStyles.holderButtons}>
            <View style={HomeStyles.buttons}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('FinalResult')}
                style={HomeStyles.oneButton}>
                <View style={HomeStyles.buttonTextWrapper}>
                  <Text style={HomeStyles.buttonText}>Finish!</Text>
                </View>
                <View style={HomeStyles.icon}>
                  <Icon color="white" name="md-done-all" size={18} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Three;
